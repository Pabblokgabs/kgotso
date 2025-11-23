import ProfileCard from "../ProfileCard";
import prifileImg from "../../assets/profile.png";
import { useContext } from "react";
import { ScrollFocusContext } from "../../context/ScrollFocusContext";
import { BookOpen, BriefcaseBusiness, ClockIcon, MapPin } from "lucide-react";

function AboutCard() {
	const context = useContext(ScrollFocusContext);

	if (!context) throw new Error("ScrollFocusContext is not provided");

	const { scrollToContact } = context;

	return (
		<div className="flex-1 h-full flex flex-col">
			<div className="text-center mb-16 lg:mb-20 opacity-0 translate-y-[-100px] transition-all duration-700 fade-in-down">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
					Get to know the person behind the code.
				</p>
			</div>
			<div className="flex flex-col lg:flex-row gap-10">
				<div className="lg:flex-2 flex justify-center lg:justify-start fade-in-left opacity-0 translate-x-[-100px] transition-all duration-1000">
					<div>
						<ProfileCard
							name="Kgotso Masha"
							title="Fullstack Developer"
							handle="pabblokgabs"
							status="Availabe"
							contactText="Contact Me"
							avatarUrl={prifileImg}
							showUserInfo={true}
							enableTilt={true}
							enableMobileTilt={false}
							onContactClick={scrollToContact}
							showBehindGradient={false}
						/>
					</div>
				</div>
				<div className="flex-1 lg:flex-3 flex justify-end">
					<div className="w-full lg:w-2/3 opacity-0 translate-x-[100px] transition-all duration-700 fade-in-right">
						<h3 className="text-2xl font-bold mb-4">Hi, I'm kgotso Masha</h3>
						<p className="text-gray-500 mb-6">
							I'm a self-taught full-stack developer with a passion for creating
							elegant, efficient, and user-friendly web applications. My journey
							into coding began 5 years ago when I decided to switch careers
							from a university student. My real education came from freelancing, building
							countless projects and solving complex problems.
						</p>

						<p className="text-gray-500 mb-6">
							What started as a curiosity quickly turned into a passion. I love
							the problem-solving aspect of development and the satisfaction of
							building something from scratch that people can use and enjoy. I
							specialize in React.js, React Native, Next.js, Python and Node.js,
							but I'm always exploring new technologies and approaches.
						</p>

						<p className="text-gray-500 mb-8">
							Outside of coding, I enjoy science fiction, gaming, and exploring
							new cultures through travel. I'm always learning and growing, and
							I’m passionate about helping others—whether through collaboration,
							sharing knowledge, or simply offering support when I can.
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div className="bg-gray-50 p-4 rounded-lg">
								<h4 className="font-bold text-gray-900 mb-2">Location</h4>
								<p className="text-gray-500 flex items-center">
									<MapPin className="mr-2 text-[#3b82f6]" />
									<span>South Africa, Polokwane</span>
								</p>
							</div>

							<div className="bg-gray-50 p-4 rounded-lg">
								<h4 className="font-bold text-gray-900 mb-2">Experience</h4>
								<p className="text-gray-500 flex items-center">
									<BriefcaseBusiness className="mr-2 text-[#3b82f6]" />
									<span>3+ Years in Development</span>
								</p>
							</div>

							<div className="bg-gray-50 p-4 rounded-lg">
								<h4 className="font-bold text-gray-900 mb-2">Education</h4>
								<p className="text-gray-500 flex items-center">
									<BookOpen className="mr-2 text-[#3b82f6]" />
									<span>Self-taught + Online Courses</span>
								</p>
							</div>

							<div id="contact" className="bg-gray-50 p-4 rounded-lg">
								<h4 className="font-bold text-gray-900 mb-2">Availability</h4>
								<p className="text-gray-500 flex items-center">
									<ClockIcon className="mr-2 text-[#3b82f6]" />
									<span>Open to New Projects</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutCard;
