import Landing from "./components/home/landing";
import ClickSpark from "./components/ClickSpark";
import { useEffect } from "react";
import { Animation } from "./lib/helpers";

function App() {
	useEffect(() => Animation(), []);
	return (
		<div className="flex flex-col items-center justify-center min-h-screen max-w-screen overflow-x-hidden">
			<ClickSpark
				sparkColor="#fff"
				sparkSize={10}
				sparkRadius={15}
				sparkCount={8}
				duration={400}
			>
				<Landing />
				<div className="h-screen bg-amber-400" />
			</ClickSpark>
		</div>
	);
}

export default App;
