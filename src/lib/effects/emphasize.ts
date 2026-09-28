/**
 * Toggles `is-active` while the element crosses the middle band of the
 * viewport. Used for scroll-based emphasis (dim vs. highlighted).
 */
export function emphasize(node: HTMLElement) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		node.classList.add('is-active');
		return {};
	}

	node.classList.add('emphasis');

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				entry.target.classList.toggle('is-active', entry.isIntersecting);
			}
		},
		{ threshold: 0.35, rootMargin: '-20% 0px -20% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
