<script lang="ts">
	import { onMount } from 'svelte';

	let bar: HTMLDivElement | undefined = $state();

	onMount(() => {
		if (!bar) return;

		let raf = 0;
		let scheduled = false;

		function update() {
			scheduled = false;
			const max = document.documentElement.scrollHeight - window.innerHeight;
			const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
			bar?.style.setProperty('--progress', progress.toFixed(4));
		}

		function onScroll() {
			if (!scheduled) {
				scheduled = true;
				raf = requestAnimationFrame(update);
			}
		}

		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	});
</script>

<div class="fixed inset-x-0 top-0 z-[60] h-[2px]" aria-hidden="true">
	<div
		bind:this={bar}
		class="h-full w-full origin-left bg-accent"
		style="transform: scaleX(var(--progress, 0))"
	></div>
</div>
