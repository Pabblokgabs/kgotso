import img from "../assets/bg.jpg";
import board from "../assets/game.png";
import ecom from "../assets/cases.png";
import elearn from "../assets/math.png";
import confi from "../assets/confi.webp";
import ai from "../assets/ai.png";
import mana from '../assets/mana.png'

export const projects: {
	img: string;
	title: string;
	stackUsed: string[];
	dataTags: string;
	description: string;
	github: string;
	liveDemo: string;
}[] = [
	{
		img: ai,
		title: "Portfolio Analyser",
		stackUsed: ["React", "TypeScript", "Tailwind CSS"],
		dataTags: "react typescript tailwind portfolio analyser",
		description:
			"A web‑tool that analyses your portfolio and tells you if you stand out for a job — simply pasting your URL triggers AI‑powered insights and optimization recommendations.",
		github: "https://github.com/Pabblokgabs/AiAnalyserFrondend",
		liveDemo: "https://ai-url-analyser.vercel.app/",
	},

	{
		img: ecom,
		title: "E-commerce Platform",
		stackUsed: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
		dataTags: "react typescript node",
		description:
			"A feature-rich website for selling custom phone cases with real-time photo uploads, mobile model selection, and instant previews of how your design will look on the case.",
		github: "https://github.com/Pabblokgabs/luxcases",
		liveDemo: "https://luxcases.vercel.app",
	},
	{
		img: elearn,
		title: "Math & Science Learning Platform",
		stackUsed: ["HTML", "JavaScript", "Tailwind CSS"],
		dataTags: "html javascript",
		description:
			"A work-in-progress learning website focused on helping Grade 10–12 learners across South Africa study math and science online. Built with HTML, Tailwind CSS and JavaScript for a fast, responsive experience.",
		github: "https://github.com/Pabblokgabs/mathway-app",
		liveDemo: "https://mathway-app.vercel.app",
	},
	{
		img: mana,
		title: "Property Management System",
		stackUsed: ["React", "CSS", "Node.js"],
		dataTags: "react javascript node",
		description:
			"A full-stack web application for managing rental properties, tenants, and maintenance tasks. Includes features for listing properties, tracking leases, and managing communication between landlords and tenants.",
		github: "https://github.com/Pabblokgabs/kgabsiN",
		liveDemo: "https://kgabs-in.vercel.app/",
	},
	{
		img: img,
		title: "Collaborative Blogging Platform",
		stackUsed: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
		dataTags: "react node express",
		description:
			"A modern blogging app built in collaboration with other developers. Features include user authentication, rich text post creation, comments, and a clean, responsive UI for reading and writing blogs.",
		github: "https://github.com/Pabblokgabs/mern-blogging-website",
		liveDemo: "",
	},
	{
		img: board,
		title: "Board games",
		stackUsed: ["HTML", "JavaScript", "CSS"],
		dataTags: "html javascript",
		description:
			"A creative board game demo showcasing front-end skills using pure HTML, CSS, and JavaScript.",
		github: "https://github.com/Pabblokgabs/boardGames",
		liveDemo: "https://games-phi-nine.vercel.app",
	},
	{
		img: confi,
		title: "Other Projects (Confidential)",
		dataTags: "node javascript typescript html",
		stackUsed: [
			"JavaScript",
			"TypeScript",
			"Tailwind CSS",
			"Node.js",
			"React",
			"Next",
			"Python",
		],
		description:
			"Involved in several additional projects ranging from internal tools to client-specific solutions. Due to confidentiality agreements or incomplete status, these projects cannot be publicly showcased but contributed significantly to my experience.",
		github: "",
		liveDemo: "",
	},
];

export const skills = [
	{
		title: "Frontend Development",
		icon: "ri-layout-4-line",
		list: [
			{ name: "React.js", percentage: 95 },
			{ name: "Next.js", percentage: 90 },
			{ name: "TypeScript", percentage: 95 },
			{ name: "JavaScript", percentage: 95 },
			{ name: "Tailwind CSS", percentage: 97 },
			{ name: "HTML/CSS", percentage: 98 },
			{ name: "Django", percentage: 70 },
		],
	},
	{
		title: "Backend Development",
		icon: "ri-server-line",
		list: [
			{ name: "Node.js", percentage: 95 },
			{ name: "Express", percentage: 90 },
			{ name: "Python", percentage: 80 },
			{ name: "RESTful APIs", percentage: 95 },
			{ name: "MongoDB", percentage: 90 },
			{ name: "PostgreSQL", percentage: 70 },
		],
	},
	{
		title: "Mobile Development",
		icon: "ri-smartphone-line",
		list: [
			{ name: "React Native", percentage: 80 },
			{ name: "Expo", percentage: 90 },
		],
	},
	{
		title: "Tools & DevOps",
		icon: "ri-smartphone-line",
		list: [
			{ name: "Git & GitHub", percentage: 90 },
			{ name: "Redux", percentage: 95 },
			{ name: "Tanstack", percentage: 95 },
			{ name: "Jest/Testing", percentage: 90 },
			{ name: "Vercel", percentage: 85 },
			{ name: "CI/CD", percentage: 80 },
		],
	},
];

export const next = [
	"AI/ML Integration",
	"Web3 Development",
	"Serverless Architecture",
	"Micro-frontends",
	"Progressive Web Apps",
];

export const NAV_LIST: { label: string; href: string }[] = [
	{ label: "Home", href: "#home" },
	{ label: "Projects", href: "#projects" },
	{ label: "Skills", href: "#skills" },
	{ label: "About", href: "#about" },
	{ label: "Contact", href: "#contact" },
];

export const items = [
	{
		label: "home",
		href: "#home",
		ariaLabel: "Home",
		rotation: -8,
		hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
	},
	{
		label: "about",
		href: "#projects",
		ariaLabel: "About",
		rotation: 8,
		hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
	},
	{
		label: "Skills",
		href: "#skills",
		ariaLabel: "Skills",
		rotation: 8,
		hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
	},
	{
		label: "About",
		href: "#about",
		ariaLabel: "About",
		rotation: 8,
		hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
	},
	{
		label: "contact",
		href: "#constact",
		ariaLabel: "Contact",
		rotation: -8,
		hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
	},
];
