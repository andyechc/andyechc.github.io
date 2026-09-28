<script lang="ts">
	import SiteNav from '$lib/components/layout/SiteNav.svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
	import portfolioData from '$lib/data/portfolio.json';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const project = $derived(data.project);
	const next = $derived(data.next);
	const { site, navigation, social, contact, footer } = portfolioData;
</script>

<svelte:head>
	<title>{project.title} — {site.name}</title>
	<meta name="description" content={project.description} />
	<meta property="og:title" content={`${project.title} — ${site.name}`} />
	<meta property="og:description" content={project.description} />
	<meta property="og:image" content={project.media.cover} />
</svelte:head>

<SiteNav siteName={site.name} items={navigation} homePath="/" contactHref="/#contact" />

<main id="top" class="relative z-10 mx-auto max-w-6xl px-5 pt-28 pb-20 sm:px-8 md:pt-36 md:pb-28">
	<a href="/#work" class="group inline-flex items-center gap-2 text-sm text-muted">
		<span class="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
			←
		</span>
		All work
	</a>

	<p class="display mt-10 text-6xl text-muted/40 md:text-7xl" aria-hidden="true">
		{project.number}
	</p>
	<h1 class="display-strong mt-4 max-w-4xl text-5xl sm:text-6xl md:text-7xl">{project.title}</h1>
	<p class="display display-italic mt-3 text-2xl text-muted md:text-3xl">{project.subtitle}</p>

	<p class="mt-5 text-xs font-medium tracking-[0.18em] text-muted uppercase">
		{project.category} · {project.year} · {project.status}
	</p>

	<figure class="mt-10 overflow-hidden rounded-2xl border border-line md:mt-14">
		<img
			src={project.media.cover}
			alt={`${project.title} — ${project.subtitle}`}
			class="aspect-[16/10] w-full object-cover"
			loading="eager"
			decoding="async"
		/>
	</figure>

	<div class="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12">
		<div class="lg:col-span-7">
			<h2 class="eyebrow">Overview</h2>
			<p class="mt-5 text-lg leading-relaxed md:text-xl">
				{project.longDescription ?? project.description}
			</p>
			<p class="mt-5 leading-relaxed text-muted">{project.description}</p>
		</div>

		<aside class="lg:col-span-5">
			{#if project.highlights.length > 0}
				<h2 class="eyebrow">Key aspects</h2>
				<ul class="mt-5">
					{#each project.highlights as highlight (highlight)}
						<li class="border-t border-line py-3 text-sm text-muted last:border-b">
							{highlight}
						</li>
					{/each}
				</ul>
			{/if}

			<h2 class="eyebrow {project.highlights.length > 0 ? 'mt-10' : ''}">Built with</h2>
			<p class="mt-4 text-sm text-muted">{project.technologies.join(' · ')}</p>

			<div class="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium">
				{#if project.links.live}
					<a
						href={project.links.live}
						target="_blank"
						rel="noopener noreferrer"
						class="quiet-link text-muted"
					>
						Live ↗
					</a>
				{/if}
				{#if project.links.github}
					<a
						href={project.links.github}
						target="_blank"
						rel="noopener noreferrer"
						class="quiet-link text-muted"
					>
						Code ↗
					</a>
				{/if}
			</div>
		</aside>
	</div>

	{#if next && next.id !== project.id}
		<nav class="mt-20 border-t border-line pt-10 md:mt-28" aria-label="Next project">
			<p class="eyebrow">Next project</p>
			<a
				href={`/work/${next.id}`}
				class="group mt-4 flex flex-wrap items-baseline gap-x-5"
			>
				<span class="font-display text-xl text-muted/60">{next.number}</span>
				<span class="display text-4xl transition-colors duration-200 group-hover:text-accent sm:text-5xl">
					{next.title}
				</span>
				<span class="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
					→
				</span>
			</a>
		</nav>
	{/if}
</main>

<div class="relative z-10">
	<SiteFooter
		copyright={footer.copyright}
		message={footer.message}
		social={social}
		email={contact.email}
	/>
</div>
