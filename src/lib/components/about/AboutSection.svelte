<script lang="ts">
	import { reveal } from '$lib/effects/reveal';
	import type { Principle } from '$lib/data/types';

	interface Props {
		eyebrow: string;
		title: string;
		paragraphs: string[];
		principles: Principle[];
	}

	let { eyebrow, title, paragraphs, principles }: Props = $props();
</script>

<section aria-label="About">
	<div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
		<p class="eyebrow">{eyebrow}</p>
		<h2 class="display-strong mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl">
			{title}
		</h2>

		<div class="mt-10 grid max-w-4xl gap-6 md:mt-14">
			{#each paragraphs as paragraph (paragraph)}
				<p class="measure text-lg leading-relaxed text-muted">{paragraph}</p>
			{/each}
		</div>

		<ol class="mt-16 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
			{#each principles as principle, i (principle.title)}
				<li
					class="border-t border-line pt-6"
					use:reveal={{ variant: 'rise', delay: i * 100 }}
				>
					<p class="font-display text-xl text-muted/60" aria-hidden="true">
						{String(i + 1).padStart(2, '0')}
					</p>
					<h3 class="display mt-3 text-2xl">{principle.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-muted">{principle.description}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>
