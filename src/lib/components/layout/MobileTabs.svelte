<script lang="ts">
	import { onMount } from 'svelte';
	import { Briefcase, History, User, Mail } from 'lucide-svelte';
	import type { NavItem } from '$lib/data/types';

	interface Props {
		items: NavItem[];
		/** Prefix for anchor targets. Empty on the home page, "/" on subpages. */
		homePath?: string;
	}

	let { items, homePath = '' }: Props = $props();

	const ICONS: Record<string, typeof Briefcase> = {
		'#work': Briefcase,
		'#experience': History,
		'#about': User,
		'#contact': Mail
	};

	let active = $state<string | null>(null);

	onMount(() => {
		const sections = items
			.map((item) => document.querySelector(item.target))
			.filter((el): el is Element => el !== null);

		if (sections.length === 0) {
			// Subpages have no sections: keep tabs as plain links.
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						active = `#${entry.target.id}`;
					}
				}
			},
			{ rootMargin: '-40% 0px -55% 0px', threshold: 0 }
		);

		for (const section of sections) {
			observer.observe(section);
		}

		return () => observer.disconnect();
	});
</script>

<nav
	class="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:hidden"
	style="padding-bottom: max(1rem, env(safe-area-inset-bottom));"
	aria-label="Sections"
>
	<ul
		class="mx-auto flex max-w-sm items-center justify-around rounded-full border border-white/10 bg-ink/60 px-2 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl backdrop-saturate-150"
	>
		{#each items as item (item.target)}
			{@const Icon = ICONS[item.target] ?? Briefcase}
			<li>
				<a
					href={`${homePath}${item.target}`}
					aria-label={item.label}
					aria-current={active === item.target ? 'true' : undefined}
					class="relative flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors duration-200 {active ===
					item.target
						? 'text-accent'
						: 'text-muted'}"
				>
					<Icon size={22} strokeWidth={1.5} />
					{#if active === item.target}
						<span
							class="absolute -bottom-0.5 h-1 w-1 rounded-full bg-accent"
							aria-hidden="true"
						></span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</nav>
