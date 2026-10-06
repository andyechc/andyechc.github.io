<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let dot: HTMLDivElement | undefined = $state();

	onMount(() => {
		if (!dot) return;

		const finePointer = window.matchMedia('(pointer: fine)').matches;
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (!finePointer || reduceMotion) {
			return;
		}

		const el = dot;
		document.documentElement.classList.add('has-custom-cursor');

		gsap.set(el, {
			xPercent: -50,
			yPercent: -50,
			x: window.innerWidth / 2,
			y: window.innerHeight / 2,
			scale: 1,
			autoAlpha: 0
		});

		const xTo = gsap.quickTo(el, 'x', { duration: 0.1, ease: 'power2.out' });
		const yTo = gsap.quickTo(el, 'y', { duration: 0.1, ease: 'power2.out' });

		let shown = false;

		function onPointerMove(event: PointerEvent) {
			if (!shown) {
				shown = true;
				gsap.set(el, { x: event.clientX, y: event.clientY });
				gsap.to(el, { autoAlpha: 1, duration: 0.25, ease: 'power2.out' });
			}
			xTo(event.clientX);
			yTo(event.clientY);
		}

		function onPointerOver(event: Event) {
			const target = event.target as HTMLElement | null;
			const hot = !!target?.closest('a, button, [data-cursor]');
			gsap.to(el, {
				scale: hot ? 1.8 : 1,
				duration: 0.3,
				ease: 'power2.out',
				overwrite: 'auto'
			});
		}

		function onPointerLeave() {
			shown = false;
			gsap.to(el, { autoAlpha: 0, duration: 0.25, ease: 'power2.in', overwrite: 'auto' });
		}

		window.addEventListener('pointermove', onPointerMove, { passive: true });
		window.addEventListener('pointerover', onPointerOver, { passive: true });
		document.documentElement.addEventListener('pointerleave', onPointerLeave);

		return () => {
			window.removeEventListener('pointermove', onPointerMove);
			window.removeEventListener('pointerover', onPointerOver);
			document.documentElement.removeEventListener('pointerleave', onPointerLeave);
			gsap.killTweensOf(el);
			document.documentElement.classList.remove('has-custom-cursor');
		};
	});
</script>

<div bind:this={dot} class="cursor-dot" aria-hidden="true"></div>

<style>
	.cursor-dot {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 70;
		pointer-events: none;
		width: 12px;
		height: 12px;
		border-radius: 999px;
		background: #ffffff;
		mix-blend-mode: difference;
		opacity: 0;
		visibility: hidden;
	}
</style>
