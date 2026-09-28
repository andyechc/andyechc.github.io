<script lang="ts">
	import { reveal } from '$lib/effects/reveal';
	import { emphasize } from '$lib/effects/emphasize';
	import SectionHeading from '$lib/components/layout/SectionHeading.svelte';
	import type { ExperienceItem } from '$lib/data/types';

	interface Props {
		eyebrow: string;
		title: string;
		items: ExperienceItem[];
	}

	let { eyebrow, title, items }: Props = $props();

	const current = $derived(items[0]);
	const previous = $derived(items.slice(1));
</script>

<section aria-label="Experience">
	<div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
		<SectionHeading {eyebrow} {title} />

		{#if current}
			<article class="mt-14 md:mt-20" aria-label={`Current role: ${current.role}`} use:reveal>
				<p class="eyebrow eyebrow-accent">{current.period}</p>
				<h3 class="display mt-4 max-w-4xl text-5xl sm:text-6xl md:text-7xl">
					{current.role}
				</h3>
				{#if current.company}
					<p class="mt-3 text-lg text-muted">{current.company}</p>
				{/if}
				<p class="measure mt-6 text-base leading-relaxed text-muted md:text-lg">
					{current.description}
				</p>
				<ul class="mt-8 grid gap-x-12 gap-y-2 sm:grid-cols-2">
					{#each current.highlights as highlight (highlight)}
						<li class="border-t border-line py-3 text-sm text-muted">{highlight}</li>
					{/each}
				</ul>
			</article>
		{/if}

		<div class="mt-16 divide-y divide-line border-y border-line md:mt-24">
			{#each previous as item (item.id)}
				<article
					class="grid gap-3 py-10 md:grid-cols-12 md:gap-8"
					aria-label={`${item.role}, ${item.period}`}
					use:emphasize
				>
					<p class="text-sm font-medium tracking-[0.14em] text-muted uppercase md:col-span-3">
						{item.period}
					</p>
					<div class="md:col-span-9">
						<h3 class="display text-3xl sm:text-4xl">{item.role}</h3>
						{#if item.company}
							<p class="mt-1 text-muted">{item.company}</p>
						{/if}
						<p class="measure mt-4 leading-relaxed text-muted">{item.description}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
