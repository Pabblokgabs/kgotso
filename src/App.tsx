import Landing from "./components/home/landing";
import ClickSpark from "./components/ClickSpark";
import { useEffect } from "react";
import { Animation } from "./lib/helpers";
import Project from "./components/home/project";
import Footer from "./components/home/footer";
import About from "./components/home/about";
import Contact from "./components/home/contact";

function App() {
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
				{/* <Landing /> */}
				{/* <Project /> */}
				<About />
				<Contact />
				<Footer />
				<div
					id="toast-container"
					className="fixed bottom-10 right-5 z-50 space-y-3"
				></div>
			</ClickSpark>
		</div>
	);
}

export default App;
