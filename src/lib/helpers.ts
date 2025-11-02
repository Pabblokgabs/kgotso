let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let timerId: number | null = null;

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