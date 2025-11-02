import { Menu } from "lucide-react";
import Button from "../Button";
import GooeyNav from "../GooeyNav";

function Nav() {
	const NAV_LIST: { label: string; href: string }[] = [
		{ label: "Home", href: "#home" },
		{ label: "Projects", href: "#projects" },
		{ label: "Skills", href: "#skills" },
		{ label: "About", href: "#about" },
		{ label: "Contact", href: "#contact" },
	];
	return (
		<header className="flex-1 flex flex-row items-center gap-2.5 justify-between border-4 py-4 px-2.5 lg:px-7 rounded-full">
			<h2 className="lg:text-2xl font-['Pacifico'] text-primary">
				Kgotso Masha
			</h2>
			<nav className="">
				<ul className="hidden md:block">
					<li className="flex gap-4">
						<GooeyNav
							items={NAV_LIST}
							particleCount={15}
							particleDistances={[90, 10]}
							particleR={100}
							initialActiveIndex={0}
							animationTime={600}
							timeVariance={300}
						/>
					</li>
				</ul>
				{/* Mobile nav list */}
				<ul className="block md:hidden">
					{/* <Button Children={<Menu />} /> */}
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
