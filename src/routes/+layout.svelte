<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import MobileTabs from '$lib/components/layout/MobileTabs.svelte';
	import CustomCursor from '$lib/components/ui/CustomCursor.svelte';
	import ReadingProgress from '$lib/components/ui/ReadingProgress.svelte';
	import portfolioData from '$lib/data/portfolio.json';

	let { children } = $props();

	const { seo, navigation } = portfolioData;
	const homePath = page.url.pathname === '/' ? '' : '/';
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords.join(', ')} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:image" content={seo.image} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.image} />
</svelte:head>

<ReadingProgress />

{@render children()}

<MobileTabs items={navigation} {homePath} />

<CustomCursor />
