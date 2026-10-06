import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export type RevealVariant = 'rise' | 'fade' | 'scale' | 'slide-left' | 'slide-right' | 'clip';

interface RevealOptions {
	variant?: RevealVariant;
	delay?: number;
}

let registered = false;

function ensureRegistered() {
	if (!registered && typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger);
		registered = true;
		document.fonts?.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
	}
}

const FROM: Record<RevealVariant, gsap.TweenVars> = {
	rise: { y: 28, opacity: 0 },
	fade: { opacity: 0 },
	scale: { scale: 1.06, opacity: 0 },
	'slide-left': { x: 48, opacity: 0 },
	'slide-right': { x: -48, opacity: 0 },
	clip: { clipPath: 'inset(10% 6% 10% 6% round 20px)', opacity: 0, y: 24 }
};

/**
 * Reveals an element once when it enters the viewport, powered by GSAP.
 * Static-safe: the hidden initial state is only applied via JS,
 * so content stays visible without JS or when reduced motion is on.
 */
export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const { variant = 'rise', delay = 0 } = options;
	ensureRegistered();

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return {};
	}

	const ctx = gsap.context(() => {
		const toVars: gsap.TweenVars = {
			x: 0,
			y: 0,
			scale: 1,
			opacity: 1,
			duration: 0.9,
			delay: delay / 1000,
			ease: 'power3.out',
			overwrite: 'auto',
			scrollTrigger: {
				trigger: node,
				start: 'top 88%',
				toggleActions: 'play none none reverse'
			}
		};
		// Rounded clip only for the clip variant — on text blocks it would
		// eat glyphs touching the corners.
		if (variant === 'clip') {
			toVars.clipPath = 'inset(0% 0% 0% 0% round 20px)';
		}
		gsap.fromTo(node, FROM[variant], toVars);
	}, node);

	return {
		destroy() {
			ctx.revert();
		}
	};
}
