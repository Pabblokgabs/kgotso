export const skills = [
	{
		title: "Frontend Development",
		icon: "ri-layout-4-line",
		list: [
			{ name: "React.js", percentage: 95 },
			{ name: "Next.js", percentage: 90 },
			{ name: "TypeScript", percentage: 95 },
			{ name: "JavaScript", percentage: 95 },
			{ name: "Tailwind CSS", percentage: 90 },
			{ name: "HTML/CSS", percentage: 98 },
		],
	},
	{
		title: "Backend Development",
		icon: "ri-server-line",
		list: [
			{ name: "Node.js", percentage: 90 },
			{ name: "Express", percentage: 85 },
			{ name: "Python", percentage: 80 },
			{ name: "MongoDB", percentage: 90 },
			{ name: "PostgreSQL", percentage: 70 },
			{ name: "RESTful APIs", percentage: 95 },
		],
	},
	{
		title: "Mobile Development",
		icon: "ri-smartphone-line",
		list: [
			{ name: "React Native", percentage: 80 },
			{ name: "Expo", percentage: 90 },
			{ name: "Firebase", percentage: 85 },
			{ name: "Push Notifications", percentage: 80 },
			{ name: "Native Modules", percentage: 80 },
		],
	},
	{
		title: "Tools &amp; DevOps",
		icon: "ri-smartphone-line",
		list: [
			{ name: "Git & GitHub", percentage: 80 },
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
