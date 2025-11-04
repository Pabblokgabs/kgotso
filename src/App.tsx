import Landing from "./components/home/landing";
import ClickSpark from "./components/ClickSpark";
import { useEffect, useState } from "react";
import { Animation } from "./lib/helpers";
import Project from "./components/home/project";
import Footer from "./components/home/footer";
import About from "./components/home/about";
import Contact from "./components/home/contact";
import Skills from "./components/home/skill";

function App() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 250);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => Animation(), []);
	return (
		<div className="flex flex-col items-center justify-center min-h-screen max-w-screen overflow-hidden">
			<ClickSpark
				sparkColor="#fff"
				sparkSize={10}
				sparkRadius={15}
				sparkCount={8}
				duration={400}
			>
				<Landing />
				<Project />
				<Skills />
				<About />
				<Contact />
				<Footer />
				<div
					id="toast-container"
					className="fixed bottom-10 right-5 z-50 space-y-3"
				></div>
				<button
					onClick={() => {
						window.scrollTo({
							top: 0,
							behavior: "smooth",
						});
					}}
					id="back-to-top"
					className={`fixed bottom-10 right-6 w-12 h-12 bg-[#3b82f6] rounded-full shadow-lg flex items-center justify-center ${
						scrolled ? "opacity-100 visible" : "opacity-0 invisible"
					} transition-all duration-300 hover:bg-blue-600 cursor-pointer`}
				>
					<i className="ri-arrow-up-line ri-lg"></i>
				</button>
			</ClickSpark>
		</div>
	);
}

export default App;
