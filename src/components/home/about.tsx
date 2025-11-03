import LaserFlow from "../LaserFlow";
import { useRef } from "react";
import AboutCard from "./aboutMeCard";

// Image Example Interactive Reveal Effect
function About() {
	const revealImgRef = useRef<HTMLImageElement | null>(null);

	return (
		<section
			id="about"
			className="h-[120vh] relative overflow-hidden bg-[#060010]"
			onMouseMove={(e) => {
				const rect = e.currentTarget.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				const el = revealImgRef.current;
				if (el) {
					el.style.setProperty("--mx", `${x}px`);
					el.style.setProperty("--my", `${y + rect.height * 0.5}px`);
				}
			}}
			onMouseLeave={() => {
				const el = revealImgRef.current;
				if (el) {
					el.style.setProperty("--mx", "-9999px");
					el.style.setProperty("--my", "-9999px");
				}
			}}
		>
			<div className="absolute inset-0">
				<div className="absolute inset-0 w-full h-full">
					<div className="absolute inset-0">
						<LaserFlow
							horizontalBeamOffset={0.1}
							verticalBeamOffset={0.0}
							color="#FF79C6"
						/>
					</div>
					<div className="absolute inset-0 pointer-events-auto">
						<div className="h-full container mx-auto">
							<AboutCard />
						</div>
					</div>
				</div>
			</div>

			<div id="bottom" className="flex-1 relative h-[30vh]">
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translateX(-50%)",
						width: "86%",
						height: "60%",
					}}
					className="absolute bg-[#060010] rounded-[20px] border-2 border-[#FF79C6] flex items-center justify-center z-6"
				></div>
			</div>
		</section>
	);
}

export default About;
