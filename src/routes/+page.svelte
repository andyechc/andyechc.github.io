<script lang="ts">
	import SiteNav from '$lib/components/layout/SiteNav.svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
	import Hero from '$lib/components/hero/Hero.svelte';
	import Introduction from '$lib/components/hero/Introduction.svelte';
	import WorkIndex from '$lib/components/work/WorkIndex.svelte';
	import ExperienceList from '$lib/components/experience/ExperienceList.svelte';
	import AboutSection from '$lib/components/about/AboutSection.svelte';
	import ContactClosing from '$lib/components/contact/ContactClosing.svelte';
	import portfolioData from '$lib/data/portfolio.json';
	import { estimateReadingMinutes } from '$lib/data/reading-time';

	const { site, navigation, social, hero, introduction, work, experience, about, contact, footer } =
		portfolioData;

	const readingTime = estimateReadingMinutes();
</script>

<SiteNav siteName={site.name} items={navigation} contactHref="#contact" />

<main id="top" class="relative z-10">
	<Hero
		eyebrow={hero.eyebrow}
		headline={hero.headline}
		rotatingWords={hero.rotatingWords}
		description={hero.description}
		primaryAction={hero.primaryAction}
		secondaryAction={hero.secondaryAction}
		scrollLabel={hero.scrollLabel}
		portrait={site.avatar}
		portraitAlt={site.name}
		location={site.location}
		{readingTime}
	/>

	<Introduction
		eyebrow={introduction.eyebrow}
		title={introduction.title}
		body={introduction.body}
		secondaryBody={introduction.secondaryBody}
	/>

	<div id="work">
		<WorkIndex
			eyebrow={work.eyebrow}
			title={work.title}
			description={work.description}
			projects={work.projects}
		/>
	</div>

	<div id="experience">
		<ExperienceList eyebrow={experience.eyebrow} title={experience.title} items={experience.items} />
	</div>

	<div id="about">
		<AboutSection
			eyebrow={about.eyebrow}
			title={about.title}
			paragraphs={about.paragraphs}
			principles={about.principles}
		/>
	</div>

	<div id="contact">
		<ContactClosing
			eyebrow={contact.eyebrow}
			title={contact.title}
			description={contact.description}
			email={contact.email}
			form={contact.form}
			formspreeEndpoint={contact.formspree.endpoint}
		/>
	</div>
</main>

<div class="relative z-10">
	<SiteFooter
		copyright={footer.copyright}
		message={footer.message}
		social={social}
		email={contact.email}
	/>
</div>
