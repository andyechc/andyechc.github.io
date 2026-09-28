export interface SocialLink {
	name: string;
	url: string;
}

export interface NavItem {
	label: string;
	target: string;
}

export interface ProjectLinks {
	github?: string | null;
	live?: string | null;
}

export interface ProjectMedia {
	cover: string;
	images: string[];
}

export interface Project {
	id: string;
	number: string;
	title: string;
	subtitle: string;
	description: string;
	longDescription?: string;
	category: string;
	status: string;
	year: string;
	technologies: string[];
	highlights: string[];
	links: ProjectLinks;
	media: ProjectMedia;
	featured: boolean;
}

export interface ExperienceItem {
	id: string;
	period: string;
	company: string;
	role: string;
	description: string;
	highlights: string[];
}

export interface Principle {
	title: string;
	description: string;
}
