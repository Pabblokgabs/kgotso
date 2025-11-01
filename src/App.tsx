import ScrollReveal from "./components/ScrollReveal";

function App() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<p className="h-screen">hey</p>

			<ScrollReveal
				baseOpacity={0}
				enableBlur={true}
				baseRotation={5}
				blurStrength={10}

			>
				When does a man die? When he is hit by a bullet? No! When he suffers a
				disease? No! When he ate a soup made out of a poisonous mushroom? No! A
				man dies when he is forgotten!
			</ScrollReveal>
      <div className="h-screen"></div>
		</div>
	);
}

export default App;
