import portfolioData from './portfolio.json';
import type { Project } from './types';

const WORDS_PER_MINUTE = 200;

/**
 * Honest reading-time estimate derived from the actual
 * copy in portfolio.json (no invented content).
 */
export function estimateReadingMinutes(): number {
	const chunks: string[] = [
		portfolioData.hero.headline,
		portfolioData.hero.headlineAccent,
		portfolioData.hero.description,
		portfolioData.introduction.title,
		portfolioData.introduction.body,
		portfolioData.introduction.secondaryBody,
		portfolioData.work.title,
		portfolioData.work.description,
		...portfolioData.work.projects.flatMap((project) => [
			project.description,
			...((project as Project).longDescription
				? [(project as Project).longDescription as string]
				: []),
			...project.highlights
		]),
		portfolioData.experience.title,
		...portfolioData.experience.items.flatMap((item) => [
			item.description,
			...item.highlights
		]),
		portfolioData.about.title,
		...portfolioData.about.paragraphs,
		...portfolioData.about.principles.flatMap((principle) => [
			principle.title,
			principle.description
		]),
		portfolioData.contact.title,
		portfolioData.contact.description
	];

	const words = chunks
		.join(' ')
		.split(/\s+/)
		.filter((word) => word.length > 0).length;

	return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
