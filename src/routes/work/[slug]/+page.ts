import { error } from '@sveltejs/kit';
import portfolioData from '$lib/data/portfolio.json';
import type { Project } from '$lib/data/types';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return portfolioData.work.projects
		.filter((project) => project.featured)
		.map((project) => ({ slug: project.id }));
};

export const load: PageLoad = ({ params }) => {
	const projects = portfolioData.work.projects as Project[];
	const featured = projects.filter((project) => project.featured);
	const index = featured.findIndex((project) => project.id === params.slug);
	const project = featured[index];

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project,
		next: featured[(index + 1) % featured.length]
	};
};
