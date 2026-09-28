<script lang="ts">
	import { reveal } from '$lib/effects/reveal';

	interface Props {
		eyebrow: string;
		title: string;
		description: string;
		email: string;
		form: {
			name: string;
			email: string;
			message: string;
			submit: string;
		};
		formspreeEndpoint: string;
	}

	let { eyebrow, title, description, email, form, formspreeEndpoint }: Props = $props();
</script>

<section aria-label="Contact">
	<div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
		<p class="eyebrow eyebrow-accent">{eyebrow}</p>
		<h2 class="display-strong mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl">
			{title}
		</h2>
		<p class="measure mt-6 leading-relaxed text-muted md:text-lg">
			{description}
		</p>

		<a
			href={`mailto:${email}`}
			class="display mt-10 inline-block text-3xl break-all transition-colors duration-200 hover:text-accent sm:text-4xl md:text-5xl"
		>
			{email}
		</a>

		<form
			method="POST"
			action={formspreeEndpoint}
			class="mt-16 grid max-w-2xl gap-6 md:mt-20"
			aria-label="Contact form"
			use:reveal={{ variant: 'rise', delay: 100 }}
		>
			<div class="grid gap-6 sm:grid-cols-2">
				<label class="grid gap-2 text-sm text-muted">
					{form.name}
					<input
						type="text"
						name="name"
						required
						autocomplete="name"
						class="rounded-xl border border-line bg-transparent px-4 py-3 text-paper placeholder:text-muted/60 focus:border-accent focus:outline-none"
						placeholder="Your name"
					/>
				</label>
				<label class="grid gap-2 text-sm text-muted">
					{form.email}
					<input
						type="email"
						name="email"
						required
						autocomplete="email"
						class="rounded-xl border border-line bg-transparent px-4 py-3 text-paper placeholder:text-muted/60 focus:border-accent focus:outline-none"
						placeholder="you@example.com"
					/>
				</label>
			</div>
			<label class="grid gap-2 text-sm text-muted">
				{form.message}
				<textarea
					name="message"
					rows="5"
					required
					class="resize-y rounded-xl border border-line bg-transparent px-4 py-3 text-paper placeholder:text-muted/60 focus:border-accent focus:outline-none"
					placeholder="What would you like to build?"
				></textarea>
			</label>
			<div>
				<button type="submit" class="btn-primary">
					{form.submit}
					<span aria-hidden="true">→</span>
				</button>
			</div>
		</form>
	</div>
</section>
