<script lang="ts">
	import { onMount } from 'svelte';
	import { Mail } from 'lucide-svelte';
	import type { NavItem } from '$lib/data/types';

	interface Props {
		siteName: string;
		items: NavItem[];
		contactHref: string;
		/** Prefix for anchor targets. Empty on the home page, "/" on subpages. */
		homePath?: string;
	}

	let { siteName, items, contactHref, homePath = '' }: Props = $props();

	let hidden = $state(false);
	let lastY = 0;

	onMount(() => {
		lastY = Math.max(window.scrollY, 0);
		let raf = 0;
		let scheduled = false;

		function update() {
			scheduled = false;
			const y = Math.max(window.scrollY, 0);
			// Hide on scroll down, reveal on scroll up.
			hidden = y > 160 && y > lastY;
			lastY = y;
		}

		function onScroll() {
			if (!scheduled) {
				scheduled = true;
				raf = requestAnimationFrame(update);
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<header
	class="fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-transform duration-300 sm:px-6 {hidden
		? '-translate-y-[140%]'
		: 'translate-y-0'}"
>
	<nav
		class="mx-auto max-w-6xl rounded-full border border-white/10 bg-ink/60 shadow-[0_12px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl backdrop-saturate-150"
		aria-label="Primary"
	>
		<div class="flex h-14 items-center justify-between px-5 sm:px-6">
			<a href="{homePath}#top" class="inline-flex items-center" aria-label="{siteName} — home">
				<img src="/logo.svg" alt="" width="34" height="34" class="h-8 w-8" />
				<span class="sr-only">{siteName}</span>
			</a>

			<ul class="hidden items-center gap-8 md:flex">
				{#each items as item (item.target)}
					<li>
						<a
							href={`${homePath}${item.target}`}
							class="text-sm font-medium text-muted transition-colors duration-200 hover:text-paper"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>

			<a
				href={contactHref}
				class="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:text-paper md:hidden"
				aria-label="Contact"
			>
				<Mail size={20} strokeWidth={1.5} />
			</a>
		</div>
	</nav>
</header>
