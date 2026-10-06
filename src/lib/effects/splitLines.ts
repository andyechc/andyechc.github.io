import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

let registered = false;

function ensureRegistered() {
	if (!registered && typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger, SplitText);
		registered = true;
		document.fonts?.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
	}
}

interface SplitLinesOptions {
	stagger?: number;
	duration?: number;
}

/**
 * Editorial masked-line reveal for headings (GSAP SplitText pattern).
 * Lines slide up from behind their own mask with a stagger.
 */
export function splitLines(node: HTMLElement, options: SplitLinesOptions = {}) {
	const { stagger = 0.09, duration = 1 } = options;
	ensureRegistered();

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return {};
	}

	const ctx = gsap.context(() => {
		const split = new SplitText(node, { type: 'lines', mask: 'lines' });
		gsap.from(split.lines, {
			yPercent: 110,
			duration,
			stagger,
			ease: 'power4.out',
			overwrite: 'auto',
			scrollTrigger: {
				trigger: node,
				start: 'top 88%',
				toggleActions: 'play none none reverse'
			}
		});
	}, node);

	return {
		destroy() {
			ctx.revert();
		}
	};
}
