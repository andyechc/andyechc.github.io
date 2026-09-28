export type RevealVariant = 'rise' | 'fade' | 'scale' | 'slide-left' | 'slide-right';

interface RevealOptions {
	variant?: RevealVariant;
	delay?: number;
}

/**
 * Reveals an element once when it enters the viewport.
 * Static-safe: the hidden initial state only applies when JS runs
 * (see the `js` class on <html>), so content stays visible without JS.
 *
 * NOTE: never hide the observed node itself with clip-path — Chromium
 * reports zero intersection for fully-clipped targets and the observer
 * would never fire. Use opacity/transform variants only.
 */
export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const { variant = 'rise', delay = 0 } = options;

	node.classList.add('reveal', `reveal-${variant}`);
	if (delay > 0) {
		node.style.transitionDelay = `${delay}ms`;
	}

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		node.classList.add('is-inview');
		return {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-inview');
					observer.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
