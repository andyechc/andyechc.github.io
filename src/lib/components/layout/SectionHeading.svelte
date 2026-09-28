<script lang="ts">
	import { reveal } from '$lib/effects/reveal';

	interface Props {
		eyebrow: string;
		title: string;
		description?: string;
	}

	let { eyebrow, title, description }: Props = $props();
</script>

<div class="max-w-3xl" use:reveal>
	<p class="eyebrow">{eyebrow}</p>
	<h2 class="display-strong mt-4 text-4xl sm:text-5xl md:text-6xl">{title}</h2>
	{#if description}
		<p class="measure mt-6 text-base leading-relaxed text-muted md:text-lg">{description}</p>
	{/if}
</div>
