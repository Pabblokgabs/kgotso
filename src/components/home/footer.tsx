import { Github, Mail } from "lucide-react";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-6 md:mb-0">
						<a href="#" className="text-2xl font-['Pacifico'] text-white">
							Kgotso Masha
						</a>
						<p className="text-gray-400 mt-2">Full-Stack Developer</p>
					</div>

					<div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
						<a
							href="#home"
							className="text-gray-400 hover:text-white transition-colors duration-300"
						>
							Home
						</a>
						<a
							href="#projects"
							className="text-gray-400 hover:text-white transition-colors duration-300"
						>
							Projects
						</a>
						<a
							href="#skills"
							className="text-gray-400 hover:text-white transition-colors duration-300"
						>
							Skills
						</a>
						<a
							href="#about"
							className="text-gray-400 hover:text-white transition-colors duration-300"
						>
							About
						</a>
						<a
							href="#contact"
							className="text-gray-400 hover:text-white transition-colors duration-300"
						>
							Contact
						</a>
					</div>

					<div className="flex space-x-4">
						<a
							href="https://github.com/Pabblokgabs"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors duration-300"
						>
							<Github />
						</a>
						<a
							href=""
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors duration-300"
						>
							<Mail />
						</a>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p id="all_rights" className="text-gray-400 text-sm mb-4 md:mb-0">
						© {year} Kgotso Masha. All rights reserved. Portfolio done with
						React + TypeScripe + Tailwind CSS
					</p>

					<div className="flex space-x-6"></div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
