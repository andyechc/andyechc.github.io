#!/usr/bin/env node
/**
 * Fetch Open Graph images for portfolio projects.
 *
 * Reads src/lib/data/portfolio.json, resolves a public URL for each project
 * (links.live, or a GitHub Pages candidate derived from links.github), fetches
 * the page, parses <meta property="og:image"> and downloads the image to
 * static/projects/<id>/cover.<ext> when it does not exist yet.
 *
 * Writes a JSON report to scripts/og-report.json.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const PORTFOLIO_PATH = path.join(ROOT, 'src/lib/data/portfolio.json');
const STATIC_DIR = path.join(ROOT, 'static');
const REPORT_PATH = path.join(ROOT, 'scripts/og-report.json');

const FETCH_TIMEOUT_MS = 25000;

function withTimeout(ms) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), ms);
	return { signal: controller.signal, cancel: () => clearTimeout(timer) };
}

async function fetchText(url) {
	const { signal, cancel } = withTimeout(FETCH_TIMEOUT_MS);
	try {
		const res = await fetch(url, {
			signal,
			redirect: 'follow',
			headers: { 'user-agent': 'portfolio-og-fetcher/1.0' }
		});
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		const html = await res.text();
		return { res, html, finalUrl: res.url };
	} finally {
		cancel();
	}
}

function getMeta(html, property) {
	const patterns = [
		new RegExp(`<meta[^>]+property=["']${property}["'][^>]*content=["']([^"']+)["']`, 'i'),
		new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]*property=["']${property}["']`, 'i')
	];
	for (const re of patterns) {
		const m = html.match(re);
		if (m && m[1]) return m[1].trim();
	}
	return null;
}

function resolveOgImage(html, pageUrl) {
	const candidates = [
		getMeta(html, 'og:image'),
		getMeta(html, 'og:image:url'),
		getMeta(html, 'og:image:secure_url')
	].filter(Boolean);
	if (candidates.length === 0) return null;
	try {
		return new URL(candidates[0], pageUrl).toString();
	} catch {
		return candidates[0];
	}
}

function candidateUrls(project) {
	const urls = [];
	if (project.links?.live) urls.push(project.links.live);
	if (project.links?.github) {
		const m = String(project.links.github).match(/github\.com\/([^/]+)\/([^/?#]+)/i);
		if (m) {
			const owner = m[1];
			const repo = m[2].replace(/\.git$/i, '');
			urls.push(`https://${owner}.github.io/${repo}/`);
			urls.push(`https://${owner}.is-a.dev/${repo}/`);
		}
	}
	return [...new Set(urls)];
}

function extFromBuffer(buf, res, url) {
	if (buf.length >= 8 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return 'png';
	if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'jpg';
	if (buf.length >= 12 && buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46 && buf[8] === 0x57 && buf[9] === 0x45 && buf[10] === 0x42 && buf[11] === 0x50) return 'webp';
	if (buf.length >= 6 && buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46) return 'gif';
	const ct = ((res && res.headers && res.headers.get('content-type')) || '').toLowerCase();
	if (ct.includes('png')) return 'png';
	if (ct.includes('jpeg') || ct.includes('jpg')) return 'jpg';
	if (ct.includes('webp')) return 'webp';
	if (ct.includes('gif')) return 'gif';
	if (ct.includes('svg')) return 'svg';
	const m = String(url || '').match(/\.([a-z0-9]+)(?:[?#]|$)/i);
	return m ? m[1].toLowerCase() : 'png';
}

async function tryFetchOg(url) {
	try {
		const { html, finalUrl } = await fetchText(url);
		const og = resolveOgImage(html, finalUrl);
		if (!og) return { url, finalUrl, og: null, status: 'no-og' };
		return { url, finalUrl, og, status: 'ok' };
	} catch (err) {
		return { url, finalUrl: null, og: null, status: 'fetch-error', error: String(err?.message || err) };
	}
}

async function downloadImage(imageUrl, destDir, id) {
	const { signal, cancel } = withTimeout(FETCH_TIMEOUT_MS * 4);
	let res;
	try {
		res = await fetch(imageUrl, { signal, redirect: 'follow', headers: { 'user-agent': 'portfolio-og-fetcher/1.0' } });
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
	} finally {
		cancel();
	}
	const buf = Buffer.from(await res.arrayBuffer());
	const ext = extFromBuffer(buf, res, res.url || imageUrl);
	const fileName = `cover.${ext}`;
	const destPath = path.join(destDir, fileName);
	const publicPath = `/projects/${id}/${fileName}`;

	if (fs.existsSync(destPath)) {
		return { downloaded: false, reason: 'exists', path: destPath, publicPath, ext };
	}
	fs.mkdirSync(destDir, { recursive: true });
	fs.writeFileSync(destPath, buf);
	return { downloaded: true, reason: 'downloaded', path: destPath, publicPath, ext, bytes: buf.length };
}

async function main() {
	const portfolio = JSON.parse(fs.readFileSync(PORTFOLIO_PATH, 'utf8'));
	const projects = portfolio?.work?.projects || [];
	const report = {
		generatedAt: new Date().toISOString(),
		projects: []
	};

	for (const project of projects) {
		const urls = candidateUrls(project);
		let pageUrl = null;
		let ogImage = null;
		let status = 'no-url';
		let error = null;

		if (urls.length === 0) {
			status = 'no-url';
		} else {
			// Try candidates in order; stop at first page that yields an og:image.
			let lastError = null;
			let found = false;
			for (const u of urls) {
				const result = await tryFetchOg(u);
				if (result.status === 'ok') {
					pageUrl = result.finalUrl || u;
					ogImage = result.og;
					status = 'ok';
					found = true;
					break;
				}
				if (result.status === 'fetch-error') lastError = result.error;
				// keep trying; a later candidate may work
				if (!pageUrl && result.finalUrl) pageUrl = result.finalUrl;
			}
			if (!found) {
				status = lastError ? 'fetch-error' : 'no-og';
				error = lastError;
				// if any candidate returned a page, record it
				if (!pageUrl && urls.length) pageUrl = urls[0];
			}
		}

		let localCover = null;
		let downloaded = false;
		let downloadInfo = null;
		if (ogImage) {
			try {
				const destDir = path.join(STATIC_DIR, 'projects', project.id);
				downloadInfo = await downloadImage(ogImage, destDir, project.id);
				localCover = downloadInfo.publicPath;
				downloaded = downloadInfo.downloaded;
			} catch (err) {
				status = 'image-error';
				error = String(err?.message || err);
			}
		}

		const entry = {
			id: project.id,
			title: project.title,
			featured: Boolean(project.featured),
			candidateUrls: urls,
			pageUrl,
			ogImage,
			status,
			error,
			localCover,
			downloaded
		};
		if (downloadInfo?.reason) entry.downloadReason = downloadInfo.reason;
		report.projects.push(entry);

		console.log(`[${project.id}] ${status} :: page=${pageUrl || '-'} og=${ogImage || '-'} local=${localCover || '-'}`);
	}

	fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2) + '\n');
	console.log(`\nReport written to ${REPORT_PATH}`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
