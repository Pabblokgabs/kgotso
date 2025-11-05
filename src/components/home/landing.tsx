import { useEffect, useRef } from "react";
import heroImg from "../../assets/hero.png";
import bg from "../../assets/bg.jpg";
import DarkVeil from "../DarkVeil";
import Nav from "./navBar";
import { startTyping, imageStyle } from "../../lib/helpers";
import Button from "../Button";

function Landing() {
	const revealImgRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => {
		startTyping();
	}, []);

	return (
		<section
			id="home"
			className="h-[80vh] w-full relative"
			onMouseMove={(e) => {
				const rect = e.currentTarget.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				const el = revealImgRef.current;
				if (el) {
					el.style.setProperty("--mx", `${x}px`);
					el.style.setProperty("--my", `${y}px`);
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
						<DarkVeil />
					</div>

					<div className="absolute inset-0 pointer-events-auto">
						<div className="h-full container mx-auto">
							<div className="flex-1 h-full">
								<Nav />
								<div className="flex-1 px-6 overflow-hidden h-full py-10 flex flex-col md:flex-row lg:gap-10 items-center justify-center ">
									<div className="md:flex-1 flex flex-col gap-4 fade-in-left opacity-0 translate-x-[-100px] transition-all duration-1000 ease-out">
										<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
											Full-Stack Developer
										</h1>
										<div
											className="typing-animation text-xl text-blue-600 md:text-2xl font-medium mb-2"
											id="typing-text"
										>
											React Developer
										</div>
										<p className="text-neutral-400 text-pi">
											I create exceptional digital experiences with modern web
											and mobile technologies. Passionate about clean code,
											beautiful interfaces, and scalable solutions that make a
											difference. Let's create something amazing together!
										</p>
										<div className="flex flex-wrap gap-4">
											<a href="#projects">
												<Button Children={"View Projects"} className="" />
											</a>
											<a href="#contact">
												<Button
													Children={"Get in Touch"}
													className=""
													btnColor="bg-transparent"
												/>
											</a>
										</div>
									</div>
									<div className="flex-1 hidden md:flex justify-center fade-in-right opacity-0 translate-x-[100px] transition-all duration-1000 ease-out">
										<img
											src={heroImg}
											alt="Developer Illustration"
											className="w-full pointer-events-none select-none md:max-w-lg rounded-lg shadow-xl object-cover object-top"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<img
				ref={revealImgRef}
				src={bg}
				alt="Reveal effect"
				style={imageStyle}
				className="pointer-events-none opacity-30"
			/>
		</section>
	);
}

export default Landing;
