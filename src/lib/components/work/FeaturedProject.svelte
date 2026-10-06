<script lang="ts">
	import { reveal, type RevealVariant } from '$lib/effects/reveal';
	import { splitLines } from '$lib/effects/splitLines';
	import type { Project } from '$lib/data/types';

	interface Props {
		project: Project;
		flip?: boolean;
		eager?: boolean;
		imageReveal?: RevealVariant;
	}

	let { project, flip = false, eager = false, imageReveal = 'clip' }: Props = $props();

	const caseUrl = $derived(`/work/${project.id}`);
</script>

<article class="border-t border-line py-16 md:py-24" aria-labelledby={`project-${project.id}`}>
	<div
		class="mx-auto grid max-w-6xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12"
	>
		<div
			class="lg:col-span-7"
			class:lg:order-2={flip}
			use:reveal={{ variant: imageReveal }}
		>
			<a
				href={caseUrl}
				class="group block overflow-hidden rounded-2xl border border-line"
				aria-label={`Read the ${project.title} case study`}
			>
				<img
					src={project.media.cover}
					alt={`${project.title} — ${project.subtitle}`}
					class="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
					loading={eager ? 'eager' : 'lazy'}
					decoding="async"
				/>
			</a>
		</div>

		<div
			class="lg:col-span-5"
			class:lg:order-1={flip}
			use:reveal={{ variant: 'rise', delay: 120 }}
		>
			<p class="display text-6xl text-muted/40 md:text-7xl" aria-hidden="true">
				{project.number}
			</p>

			<h3 id={`project-${project.id}`} class="display mt-4 text-4xl sm:text-5xl" use:splitLines>
				<a href={caseUrl} class="transition-colors duration-200 hover:text-accent">
					{project.title}
				</a>
			</h3>
			<p class="display-italic display mt-2 text-xl text-muted md:text-2xl">
				{project.subtitle}
			</p>

			<p class="mt-4 text-xs font-medium tracking-[0.18em] text-muted uppercase">
				{project.category} · {project.year} · {project.status}
			</p>

			<p class="measure mt-6 leading-relaxed text-muted">
				{project.description}
			</p>

			<p class="mt-6 text-sm text-muted">
				{project.technologies.join(' · ')}
			</p>

			<div class="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium">
				<a href={caseUrl} class="group inline-flex items-center gap-2">
					Read case study
					<span class="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
						→
					</span>
				</a>
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
		</div>
	</div>
</article>
