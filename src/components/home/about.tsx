import LaserFlow from "../LaserFlow";
import { useRef } from "react";
import AboutCard from "./aboutMeCard";

// Image Example Interactive Reveal Effect

function About() {
	const revealImgRef = useRef<HTMLImageElement | null>(null);

	return (
		<section
			id="about"
			className="relative overflow-hidden bg-[#060010]"
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
			{/* Background laser flow (absolute) */}
			<div className="pointer-events-none hidden lg:block absolute inset-0 z-0">
				<LaserFlow
					horizontalBeamOffset={-0.1}
					verticalBeamOffset={-0.5}
					color="#3b82f6"
				/>
			</div>

			<div className="relative z-10 container mx-auto pt-30 pb-20 px-6">
				<AboutCard />
			</div>
		</section>
	);
}

export default About;
