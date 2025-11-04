import { next, skills } from "../../lib/options";
import { Progress } from "../ui/progress";

function Skills() {
	return (
		<section id="skills" className="bg-[#060010] flex-1">
			<div className="container mx-auto h-full px-6">
				<div className="text-center mb-16 opacity-0 translate-y-[-100px] transition-all duration-700 fade-in-down">
					<h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-6">
						Technical <span className="text-blue-600">Skills</span>
					</h2>
					<p className="text-lg text-neutral-400 max-w-2xl mx-auto">
						A comprehensive toolkit for building modern web and mobile
						applications.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xxl:grid-cols-4 gap-8 opacity-0 translate-y-[100px] transition-all duration-300 fade-in-up">
					{skills.map((skill, i) => (
						<div
							key={`${i}-${skill.title}`}
							className="rounded-lg bg-gray-800 p-8"
						>
							<div className="flex items-center mb-6">
								<div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-[#3b82f6] rounded-lg mr-4">
									<i className={`${skill.icon} ri-xl`} />
								</div>
								<h3 className="text-2xl font-bold text-white">{skill.title}</h3>
							</div>
							<div className="space-y-6">
								{skill.list.map((item, i) => (
									<div key={`${i}-${item.name}`}>
										<div className="flex justify-between mb-1">
											<span className="text-gray-300 font-medium">
												{item.name}
											</span>
											<span className="text-gray-300 font-medium">
												{item.level}
											</span>
										</div>
										<Progress
											value={item.percentage}
											className="text-[#3b82f6]"
										/>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<div className="mt-16 text-center opacity-0 translate-y-[100px] transition-all duration-300 fade-in-up">
					<div className="bg-linear-to-r from-gray-800 to-gray-700 rounded-2xl p-8">
						<h3 className="text-2xl font-bold text-white mb-4">
							Always Learning
						</h3>
						<p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
							Technology evolves rapidly, and I'm committed to staying current
							with the latest trends, frameworks, and best practices in web and
							mobile development.
						</p>
						<div className="flex flex-wrap justify-center gap-3">
							{next.map((item) => (
								<span
									key={item}
									className="px-4 py-2 bg-white text-gray-500 rounded-full text-sm font-medium shadow-sm"
								>
									{item}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
