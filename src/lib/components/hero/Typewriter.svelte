<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		words: string[];
		extraClass?: string;
	}

	let { words, extraClass = '' }: Props = $props();

	function pick(index: number): string {
		return words[index] ?? '';
	}

	let text = $state(pick(0));

	onMount(() => {
		if (words.length < 2) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const TYPE_MS = 65;
		const DELETE_MS = 30;
		const HOLD_MS = 1700;
		const PAUSE_MS = 350;

		let wordIndex = 0;
		let charIndex = pick(0).length;
		let deleting = false;
		let timer = 0;

		function tick() {
			const word = pick(wordIndex);
			if (!deleting) {
				charIndex += 1;
				text = word.slice(0, charIndex);
				if (charIndex >= word.length) {
					deleting = true;
					timer = window.setTimeout(tick, HOLD_MS);
					return;
				}
				timer = window.setTimeout(tick, TYPE_MS);
			} else {
				charIndex -= 1;
				text = word.slice(0, Math.max(charIndex, 0));
				if (charIndex <= 0) {
					deleting = false;
					wordIndex = (wordIndex + 1) % words.length;
					timer = window.setTimeout(tick, PAUSE_MS);
					return;
				}
				timer = window.setTimeout(tick, DELETE_MS);
			}
		}

		timer = window.setTimeout(tick, HOLD_MS);

		return () => window.clearTimeout(timer);
	});
</script>

<span class={extraClass}
	>{text}<span class="tw-caret" aria-hidden="true"></span></span
>

<style>
	.tw-caret {
		display: inline-block;
		width: 3px;
		height: 1em;
		margin-left: 8px;
		vertical-align: -0.12em;
		background: var(--color-accent);
		animation: tw-blink 1.1s steps(2, start) infinite;
	}

	@keyframes tw-blink {
		to {
			visibility: hidden;
		}
	}
</style>
