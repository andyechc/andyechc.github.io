<script lang="ts">
	import { reveal } from '$lib/effects/reveal';

	interface Props {
		eyebrow: string;
		title: string;
		body: string;
		secondaryBody: string;
	}

	let { eyebrow, title, body, secondaryBody }: Props = $props();
</script>

<section aria-label="About preview">
	<div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28" use:reveal>
		<p class="eyebrow">{eyebrow}</p>

		<h2 class="display mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl">
			{title}
		</h2>

		<div class="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
			<p class="text-lg leading-relaxed md:text-xl">{body}</p>
			<p class="leading-relaxed text-muted md:pt-2">{secondaryBody}</p>
		</div>
	</div>
</section>
