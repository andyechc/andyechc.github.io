interface ParallaxOptions {
	/** Translate factor in px at full progress (positive moves down). */
	speed?: number;
	/** Fade out while scrolling away (0 = no fade). */
	fade?: number;
	/** 0..1 progress source: element's own travel through the viewport. */
}

const fineMotion =
	typeof window !== 'undefined' &&
	window.matchMedia('(pointer: fine)').matches &&
	!window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Subtle transform-only parallax driven by the element's viewport travel.
 * Passive scroll listener + rAF, transform/opacity only, desktop pointers only.
 */
export function parallax(node: HTMLElement, options: ParallaxOptions = {}) {
	const { speed = 60, fade = 0 } = options;

	if (!fineMotion) {
		return {};
	}

	let raf = 0;
	let scheduled = false;

	function update() {
		scheduled = false;
		const rect = node.getBoundingClientRect();
		const viewport = window.innerHeight;
		// 0 when the element top hits the viewport bottom, 1 when it leaves the top.
		const total = viewport + rect.height;
		const progress = Math.min(1, Math.max(0, (viewport - rect.top) / total));
		const centered = progress - 0.5;

		node.style.transform = `translate3d(0, ${(centered * speed).toFixed(1)}px, 0)`;
		if (fade > 0) {
			node.style.opacity = (1 - Math.abs(centered) * 2 * fade).toFixed(3);
		}
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

	return {
		destroy() {
			cancelAnimationFrame(raf);
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			node.style.transform = '';
			node.style.opacity = '';
		}
	};
}
