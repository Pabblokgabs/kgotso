import ProfileCard from "../ProfileCard";
import prifileImg from "../../assets/photo.jpg";

function AboutCard() {
	return (
		<div className="flex-1 h-full flex flex-col lg:flex-row">
			<div className="flex-3">
				<div className="w-full md:w-2/3 opacity-0 bg-red-600 translate-x-[100px] transition-all duration-700 fade-in-right">
					<h3 className="text-2xl font-bold mb-4">Hi, I'm kgotso Masha</h3>
					<p className="text-gray-500 mb-6">
						I'm a self-taught full-stack developer with a passion for creating
						elegant, efficient, and user-friendly web applications. My journey
						into coding began 5 years ago when I decided to switch careers from
						a university student, My real education came from building countless
						projects and solving complex problems.
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
								<i className="ri-map-pin-line mr-2 text-primary"></i>
								<span>Tafelkop, Limpopo</span>
							</p>
						</div>

						<div className="bg-gray-50 p-4 rounded-lg">
							<h4 className="font-bold text-gray-900 mb-2">Experience</h4>
							<p className="text-gray-500 flex items-center">
								<i className="ri-briefcase-line mr-2 text-primary"></i>
								<span>4+ Years in Development</span>
							</p>
						</div>

						<div className="bg-gray-50 p-4 rounded-lg">
							<h4 className="font-bold text-gray-900 mb-2">Education</h4>
							<p className="text-gray-500 flex items-center">
								<i className="ri-book-open-line mr-2 text-primary"></i>
								<span>Self-taught + Online Courses</span>
							</p>
						</div>

						<div className="bg-gray-50 p-4 rounded-lg">
							<h4 className="font-bold text-gray-900 mb-2">Availability</h4>
							<p className="text-gray-500 flex items-center">
								<i className="ri-time-line mr-2 text-primary"></i>
								<span>Open to New Projects</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex-2 flex justify-end">
				<div>
					<ProfileCard
						name="Kgotso Masha"
						title="Fullstack Developer"
						handle=""
						status="Availabe"
						contactText="Contact Me"
						avatarUrl={prifileImg}
						showUserInfo={true}
						enableTilt={true}
						enableMobileTilt={false}
						onContactClick={() => {}}
						showBehindGradient={false}
					/>
				</div>
			</div>
		</div>
	);
}

export default AboutCard;
