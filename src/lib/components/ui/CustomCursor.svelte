<script lang="ts">
	import { onMount } from 'svelte';

	let dot: HTMLDivElement | undefined = $state();
	let hovering = $state(false);
	let shown = $state(false);

	onMount(() => {
		if (!dot) return;

		const finePointer = window.matchMedia('(pointer: fine)').matches;
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (!finePointer || reduceMotion) {
			return;
		}

		document.documentElement.classList.add('has-custom-cursor');

		let targetX = window.innerWidth / 2;
		let targetY = window.innerHeight / 2;
		let x = targetX;
		let y = targetY;
		let raf = 0;
		let visible = false;

		function onPointerMove(event: PointerEvent) {
			targetX = event.clientX;
			targetY = event.clientY;
			if (!shown) {
				shown = true;
				x = targetX;
				y = targetY;
			}
		}

		function onPointerOver(event: Event) {
			const target = event.target as HTMLElement | null;
			hovering = !!target?.closest('a, button, [data-cursor]');
		}

		function onPointerLeave() {
			shown = false;
		}

		function loop() {
			x += (targetX - x) * 0.22;
			y += (targetY - y) * 0.22;
			dot?.style.setProperty('--cursor-x', `${x.toFixed(1)}px`);
			dot?.style.setProperty('--cursor-y', `${y.toFixed(1)}px`);
			raf = requestAnimationFrame(loop);
		}

		raf = requestAnimationFrame(loop);
		window.addEventListener('pointermove', onPointerMove, { passive: true });
		window.addEventListener('pointerover', onPointerOver, { passive: true });
		document.documentElement.addEventListener('pointerleave', onPointerLeave);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('pointermove', onPointerMove);
			window.removeEventListener('pointerover', onPointerOver);
			document.documentElement.removeEventListener('pointerleave', onPointerLeave);
			document.documentElement.classList.remove('has-custom-cursor');
		};
	});
</script>

<div
	bind:this={dot}
	class="cursor-dot"
	class:hovering
	class:shown
	aria-hidden="true"
></div>

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
		transform: translate3d(var(--cursor-x, 50vw), var(--cursor-y, 50vh), 0)
			translate(-50%, -50%) scale(1);
		transition:
			opacity 0.25s ease,
			scale 0.25s ease;
	}

	.cursor-dot.shown {
		opacity: 1;
	}

	.cursor-dot.hovering {
		scale: 2.4;
	}
</style>
