<script lang="ts">
	import { parallax } from '$lib/effects/parallax';
	import Typewriter from '$lib/components/hero/Typewriter.svelte';

	interface Action {
		label: string;
		target: string;
	}

	interface Props {
		eyebrow: string;
		headline: string;
		rotatingWords: string[];
		description: string;
		primaryAction: Action;
		secondaryAction: Action;
		scrollLabel: string;
		portrait: string;
		portraitAlt: string;
		location: string;
		readingTime: number;
	}

	let {
		eyebrow,
		headline,
		rotatingWords,
		description,
		primaryAction,
		secondaryAction,
		scrollLabel,
		portrait,
		portraitAlt,
		location,
		readingTime
	}: Props = $props();
</script>

<section class="relative flex min-h-svh flex-col justify-end overflow-hidden" aria-label="Introduction">
	<div
		class="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-10 sm:px-8 md:pb-14"
		use:parallax={{ speed: 90, fade: 0.55 }}
	>
		<div class="flex items-center gap-5">
			<img
				src={portrait}
				alt={portraitAlt}
				width="160"
				height="160"
				class="portrait-frame h-20 w-20 object-cover object-center md:h-24 md:w-24"
				loading="eager"
				decoding="async"
			/>
			<div>
				<p class="eyebrow eyebrow-accent">{eyebrow}</p>
				<p class="eyebrow mt-2">{location}</p>
			</div>
		</div>

		<h1 class="display-strong mt-6 max-w-5xl text-[clamp(2.75rem,8vw,7rem)]">
			{headline}
			<br />
			<Typewriter
				words={rotatingWords}
				extraClass="display display-italic normal-case text-muted"
			/>
		</h1>

		<div class="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
			<p class="measure text-base leading-relaxed text-muted md:text-lg">
				{description}
			</p>

			<div class="flex flex-wrap items-center gap-x-8 gap-y-4">
				<a href={primaryAction.target} class="btn-primary">
					{primaryAction.label}
					<span aria-hidden="true">→</span>
				</a>
				<a
					href={secondaryAction.target}
					class="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
				>
					{secondaryAction.label}
					<span class="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
						→
					</span>
				</a>
			</div>
		</div>

		<p class="mt-12 text-xs tracking-[0.2em] text-muted uppercase">
			{scrollLabel} · {readingTime} min read
		</p>
	</div>
</section>
