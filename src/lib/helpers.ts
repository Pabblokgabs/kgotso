let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let timerId: number | null = null;
import img from "../assets/bg.jpg";
import board from "../assets/game.png";
import ecom from "../assets/cases.png";
import elearn from "../assets/math.png";
import confi from "../assets/confi.webp";
import ai from "../assets/ai.png";

const phrases = [
	"React Developer",
	"TypeScript Enthusiast",
	"Node.js Developer",
	"Problem Solver",
	"UI/UX Enthusiast",
	"Mobile Developer",
	"Python Developer",
];

let caretStyleInjected = false;

function ensureCaretStyle() {
	if (caretStyleInjected) return;
	const style = document.createElement("style");
	style.textContent = `
	.typing-caret::after {
		content: '|';
		display: inline-block;
		margin-left: 2px;
		animation: typing-caret-blink 1s steps(1) infinite;
	}
	@keyframes typing-caret-blink {
		50% { opacity: 0; }
	}
	`;
	document.head.appendChild(style);
	caretStyleInjected = true;
}
export function TypeText() {
	const typingElement = document.getElementById("typing-text");

	if (!typingElement) {
		if (timerId !== null) clearTimeout(timerId);
		timerId = window.setTimeout(TypeText, 100);
		return;
	}

	ensureCaretStyle();
	typingElement.classList.add("typing-caret");

	const currentPhrase = phrases[phraseIndex];

	if (isDeleting) {
		charIndex = Math.max(0, charIndex - 1);
	} else {
		charIndex = Math.min(currentPhrase.length, charIndex + 1);
	}

	typingElement.textContent = currentPhrase.substring(0, charIndex);

	let delay = isDeleting ? 60 : 100;

	if (!isDeleting && charIndex === currentPhrase.length) {
		isDeleting = true;
		delay = 1000;
	} else if (isDeleting && charIndex === 0) {
		phraseIndex = (phraseIndex + 1) % phrases.length;
		const nextPhrase = phrases[phraseIndex];
		charIndex = 1;
		typingElement.textContent = nextPhrase.substring(0, charIndex);
		isDeleting = false;
		delay = 100;
	}

	if (timerId !== null) clearTimeout(timerId);
	timerId = window.setTimeout(TypeText, delay);
}

export function startTyping() {
	if (timerId !== null) return;
	TypeText();
}

export function stopTyping() {
	if (timerId !== null) {
		clearTimeout(timerId);
		timerId = null;
		const el = document.getElementById("typing-text");
		if (el) el.classList.remove("typing-caret");
	}
}

export const imageStyle: React.CSSProperties & Record<string, string | number> =
	{
		mixBlendMode: "lighten",
		"--mx": "-9999px",
		"--my": "-9999px",
		WebkitMaskImage:
			"radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
		maskImage:
			"radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
		WebkitMaskRepeat: "no-repeat",
		maskRepeat: "no-repeat",
		position: "absolute",
		inset: 0,
		width: "100%",
		height: "100%",
		objectFit: "cover",
	};

export const Animation = () => {
	const options = {
		threshold: 0.2,
	};

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const el = entry.target;
				el.classList.remove("opacity-0");

				if (el.classList.contains("fade-in-left")) {
					el.classList.remove("translate-x-[-100px]");
				} else if (el.classList.contains("fade-in-right")) {
					el.classList.remove("translate-x-[100px]");
				} else if (el.classList.contains("fade-in-down")) {
					el.classList.remove("translate-y-[-100px]");
				} else if (el.classList.contains("fade-in-up")) {
					el.classList.remove("translate-y-[100px]");
				}

				observer.unobserve(el);
			}
		});
	}, options);
	document
		.querySelectorAll(
			".fade-in-left, .fade-in-right, .fade-in-down, .fade-in-up"
		)
		.forEach((el) => {
			observer.observe(el);
		});
};

// fade-in-right opacity-0 translate-x-[100px] transition-all duration-1000 ease-out
// opacity-0 translate-y-[-100px] transition-all duration-700 fade-in-down
// opacity-0 translate-y-[100px] transition-all duration-700 fade-in-up
// fade-in-left opacity-0 translate-x-[-100px] transition-all duration-1000 ease-out

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
		stackUsed: ["HTML", "TypeScript", "Tailwind CSS"],
		dataTags: "html javascript",
		description:
			"A work-in-progress learning website focused on helping Grade 10–12 learners across South Africa study math and science online. Built with HTML, Tailwind CSS and JavaScript for a fast, responsive experience.",
		github: "https://github.com/Pabblokgabs/mathway-app",
		liveDemo: "https://mathway-app.vercel.app",
	},
	{
		img: img,
		title: "Property Management System",
		stackUsed: ["React", "CSS", "Node.js"],
		dataTags: "react javascript node",
		description:
			"A full-stack web application for managing rental properties, tenants, and maintenance tasks. Includes features for listing properties, tracking leases, and managing communication between landlords and tenants.",
		github: "https://github.com/Pabblokgabs/kgabsiN",
		liveDemo: "",
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

export const getStack = () => {
	const stack: string[] = ["All Projects"];

	projects.map((item) => {
		for (let i = 0; i < item.stackUsed.length; i++) {
			if (!stack?.includes(item.stackUsed[i])) {
				if (item.stackUsed[i].toLowerCase() === "css") return;
				return stack.push(item.stackUsed[i]);
			}
		}
	});
	return stack;
};

export function showToast(message: string, type = "success") {
	const toast = document.createElement("div");

	const bgColor =
		type === "success"
			? "bg-green-500"
			: type === "error"
			? "bg-red-500"
			: "bg-gray-700";

	toast.className = `${bgColor} text-white px-4 py-3 rounded shadow-md animate-slide-in-right`;
	toast.innerText = message;

	const container = document.getElementById("toast-container");
	if (container) container.appendChild(toast);

	setTimeout(() => {
		toast.classList.add("animate-fade-out");
		setTimeout(() => toast.remove(), 300);
	}, 3000);
}

export const level = (num: number) => {
	if (typeof num != "number") return;
	let x;
	if (num >= 90) {
		x = "Expect";
	} else if (num >= 80) {
		x = "Advanced";
	} else if (num >= 70) {
		x = "Intermediate";
	} else {
		x = "Still learning";
	}

	return x;
};
