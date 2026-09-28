<script lang="ts">
	import type { SocialLink } from '$lib/data/types';

	interface Props {
		copyright: string;
		message: string;
		social: SocialLink[];
		email: string;
	}

	let { copyright, message, social, email }: Props = $props();
</script>

<footer class="pb-24 md:pb-0">
	<div
		class="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between"
	>
		<div>
			<p class="font-display text-2xl">{message}</p>
			<p class="mt-2 text-sm text-muted">{copyright}</p>
		</div>

		<div class="flex flex-col gap-2 md:items-end">
			<a href={`mailto:${email}`} class="quiet-link text-sm">{email}</a>
			<ul class="flex flex-wrap gap-x-5 gap-y-1">
				{#each social as link (link.name)}
					<li>
						<a
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							class="quiet-link text-sm text-muted"
						>
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>
