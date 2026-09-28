<script lang="ts">
	import { reveal } from '$lib/effects/reveal';
	import type { Project } from '$lib/data/types';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<article class="group py-8" aria-labelledby={`project-${project.id}`} use:reveal={{ variant: 'fade' }}>
	<div class="flex flex-wrap items-baseline gap-x-6 gap-y-2">
		<p class="font-display w-10 shrink-0 text-xl text-muted/60" aria-hidden="true">
			{project.number}
		</p>
		<h3 id={`project-${project.id}`} class="display min-w-0 flex-1 text-2xl sm:text-3xl">
			{#if project.links.live ?? project.links.github}
				<a
					href={project.links.live ?? project.links.github ?? '#'}
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors duration-200 group-hover:text-accent"
				>
					{project.title}
				</a>
			{:else}
				{project.title}
			{/if}
		</h3>
		<p class="text-sm text-muted">{project.year}</p>
	</div>

	<p class="mt-2 pl-16 text-muted sm:pl-[4rem]">
		{project.subtitle}
	</p>

	<div class="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 pl-16 sm:pl-[4rem]">
		<p class="text-sm text-muted">{project.technologies.join(' · ')}</p>
		{#if project.links.live}
			<a
				href={project.links.live}
				target="_blank"
				rel="noopener noreferrer"
				class="quiet-link text-sm text-muted"
			>
				Live ↗
			</a>
		{/if}
		{#if project.links.github}
			<a
				href={project.links.github}
				target="_blank"
				rel="noopener noreferrer"
				class="quiet-link text-sm text-muted"
			>
				Code ↗
			</a>
		{/if}
	</div>
</article>
