<script lang="ts">
	import SectionHeading from '$lib/components/layout/SectionHeading.svelte';
	import FeaturedProject from '$lib/components/work/FeaturedProject.svelte';
	import SecondaryProject from '$lib/components/work/SecondaryProject.svelte';
	import type { RevealVariant } from '$lib/effects/reveal';
	import type { Project } from '$lib/data/types';

	interface Props {
		eyebrow: string;
		title: string;
		description: string;
		projects: Project[];
	}

	let { eyebrow, title, description, projects }: Props = $props();

	const featured = $derived(projects.filter((p) => p.featured));
	const secondary = $derived(projects.filter((p) => !p.featured));

	const imageReveals: RevealVariant[] = ['scale', 'slide-left', 'slide-right'];
</script>

<section aria-label="Selected work">
	<div class="mx-auto max-w-6xl px-5 pt-20 sm:px-8 md:pt-28">
		<SectionHeading {eyebrow} {title} {description} />
	</div>

	<div class="mt-4 md:mt-8">
		{#each featured as project, i (project.id)}
			<FeaturedProject
				project={project}
				flip={i % 2 === 1}
				eager={i === 0}
				imageReveal={imageReveals[i % imageReveals.length]}
			/>
		{/each}
	</div>

	{#if secondary.length > 0}
		<div class="mx-auto max-w-6xl px-5 pb-20 sm:px-8 md:pb-28">
			<h3 class="eyebrow mt-16 md:mt-20">More work</h3>
			<div class="divide-y divide-line border-b border-line">
				{#each secondary as project (project.id)}
					<SecondaryProject {project} />
				{/each}
			</div>
		</div>
	{/if}
</section>
