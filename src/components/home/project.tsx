import { useState } from "react";
import { getStack } from "../../lib/helpers";
import MagicBento from "../MagicBento";
import { ArrowRight, Github } from "lucide-react";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import { projects } from "../../lib/options";

function Project() {
	const [active, setActive] = useState<string>("All Projects");

	const filter = function () {
		if (active === "All Projects") return projects;
		const filteredData = projects.filter((item) =>
			item.stackUsed.includes(active)
		);

		return filteredData;
	};

	return (
		<section
			id="projects"
			className="flex-1 relative overflow-hidden px-6 pt-30 pb-20 bg-linear-to-b from- to-neutral-950"
		>
			<div className="container mx-auto">
				<div className="text-center lg:mb-16 opacity-0 translate-y-[-100px] transition-all duration-300 fade-in-down">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Featured Projects
					</h2>
					<p className="text-lg text-neutral-500 max-w-2xl mx-auto">
						Check out some of my recent work. Each project represents unique
						challenges and solutions.
					</p>
				</div>

				<div className="hidden lg:flex flex-wrap justify-center gap-3 mb-12 opacity-0 translate-y-[100px] transition-all duration-300 fade-in-up">
					{getStack().map((item, index) => (
						<button
							onClick={() => setActive(item)}
							key={`${index}-${item}`}
							className={`active px-4 py-2 rounded-lg whitespace-nowrap ${active === item ? "bg-[#3b82f6]" : "border-b-blue-950"
								} text-white font-medium transition-all duration-300 border-2 cursor-pointer hover:border-[#3b82f6]`}
						>
							{item}
						</button>
					))}
				</div>

				<ScrollArea className="flex-1 block lg:hidden rounded-md my-10 whitespace-nowrap">
					<div className="flex w-max space-x-4 p-4">
						{getStack().map((item, index) => (
							<button
								onClick={() => setActive(item)}
								key={`${index}-${item}`}
								className={`active px-4 py-2 rounded-lg whitespace-nowrap ${active === item ? "bg-[#3b82f6]" : "border-b-blue-950"
									} text-white font-medium transition-all duration-300 border-2 cursor-pointer hover:border-[#3b82f6]`}
							>
								{item}
							</button>
						))}
					</div>
					<ScrollBar orientation="horizontal" />
				</ScrollArea>
				<div className="flex-1">
					<div
						className={`${filter().length > 0 &&
							filter() &&
							"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 opacity-0 translate-y-[100px] transition-all duration-300 fade-in-up"
							}`}
					>
						{filter().length > 0 && filter() ? (
							filter().map((item, i) => (
								<MagicBento
									key={`${i}-${item.title}`}
									enableBorderGlow={true}
									enableSpotlight={true}
									enableStars={false}
									glowColor="59,130,246"
									particleCount={8}
									spotlightRadius={300}
									enableTilt={false}
									clickEffect={true}
									enableMagnetism={false}
								>
									<div className="bg-[#060010] h-full flex flex-col rounded-[20px] overflow-hidden border-2 border-neutral-900">
										<div className="w-full h-48 overflow-hidden">
											<img
												src={item.img}
												alt="Hero"
												className="w-full h-full object-cover"
											/>
										</div>

										<div className="p-4 flex-1 flex flex-col">
											<h3 className="text-lg md:text-xl font-bold mb-2">
												{item.title}
											</h3>
											<p className="flex flex-1 text-sm text-neutral-400 flex-wrap gap-2 opacity-90 mb-4">
												{item.description}
											</p>

											{item.liveDemo || item.github ? (
												<div className="flex items-center justify-between gap-3 my-2">
													{item.github && (
														<a
															href={item.github}
															target="_blank"
															rel="noopener noreferrer"
															className="text-[14px] cursor-pointer opacity-80 flex items-center gap-2 rounded-md px-2.5"
														>
															<Github size={14} />
															<span>Github</span>
														</a>
													)}
													{item.liveDemo && (
														<a
															href={item.liveDemo}
															target="_blank"
															rel="noopener noreferrer"
															className="text-[14px] cursor-pointer opacity-80 flex items-center gap-2 text-[#3b82f6] rounded-md px-2.5"
														>
															<span>Live Demo</span>
															<ArrowRight size={14} />
														</a>
													)}
												</div>
											) : (
												<div className="flex gap-3">
													<span className="text-sm text-gray-400 italic cursor-not-allowed">
														Details available upon request
													</span>
												</div>
											)}
										</div>
									</div>
								</MagicBento>
							))
						) : (
							<div className="flex flex-1 w-full items-center justify-center">
								<span className="text-gray-400 italic text-center md:w-[60%]">
									I did not publish any project using {active.toUpperCase()}{" "}
									yet. Subscribe to my newsletter for updates on new projects on
									the form below!
								</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Project;

<div className="min-h-screen flex items-center justify-center bg-[#08040b] p-8">
	<MagicBento
		enableBorderGlow={true}
		enableSpotlight={true}
		enableStars={false}
		glowColor="132, 0, 255"
		particleCount={8}
		spotlightRadius={300}
		enableTilt={false}
		clickEffect={true}
		enableMagnetism={false}
	>
		<div
			className="bg-[#060010] rounded-[14px] overflow-hidden"
			style={{ width: 360 }}
		>
			{/* Image at the top */}
			<div className="w-full h-40 overflow-hidden">
				<img
					src="/src/assets/hero.png" // adjust to an image path that exists in your project
					alt="Hero"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Content */}
			<div className="p-4 text-white">
				<h3 className="text-lg font-semibold mb-2">Magic Bento Card</h3>
				<p className="text-sm opacity-90 mb-4">
					This content is wrapped by MagicBento. The bento should draw a border
					and glow around this block — height equals content height + border
					padding.
				</p>

				<div className="flex items-center gap-3">
					<button
						className="px-4 py-2 rounded-md bg-purple-600 text-white hover:brightness-110"
						onClick={() => alert("CTA clicked")}
					>
						Try it
					</button>

					<a href="#" className="text-xs opacity-80 underline">
						Learn more
					</a>
				</div>
			</div>
		</div>
	</MagicBento>
</div>;
