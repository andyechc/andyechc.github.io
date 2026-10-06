import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ParallaxOptions {
	/** Translate range in px across the full viewport travel. */
	speed?: number;
	/** Fade out toward the edges of the travel (0 = no fade). */
	fade?: number;
}

let registered = false;

function ensureRegistered() {
	if (!registered && typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger);
		registered = true;
	}
}

/**
 * Subtle scrubbed parallax tied to the element's viewport travel.
 * Transform-only (plus optional opacity), desktop pointers only.
 */
export function parallax(node: HTMLElement, options: ParallaxOptions = {}) {
	const { speed = 60, fade = 0 } = options;
	ensureRegistered();

	const fineMotion =
		window.matchMedia('(pointer: fine)').matches &&
		!window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (!fineMotion) {
		return {};
	}

	const ctx = gsap.context(() => {
		gsap.fromTo(
			node,
			{ y: -speed / 2 },
			{
				y: speed / 2,
				ease: 'none',
				scrollTrigger: {
					trigger: node,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true
				}
			}
		);

		if (fade > 0) {
			gsap.fromTo(
				node,
				{ opacity: 1 },
				{
					opacity: 1 - fade,
					ease: 'none',
					scrollTrigger: {
						trigger: node,
						start: 'top 30%',
						end: 'bottom top',
						scrub: true
					}
				}
			);
		}
	}, node);

	return {
		destroy() {
			ctx.revert();
		}
	};
}
