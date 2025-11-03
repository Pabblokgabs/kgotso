import GooeyNav from "../GooeyNav";
import { useEffect, useState, useRef } from "react";
import { Menu } from "lucide-react";

function Nav() {
	const NAV_LIST: { label: string; href: string }[] = [
		{ label: "Home", href: "#home" },
		{ label: "Projects", href: "#projects" },
		{ label: "Skills", href: "#skills" },
		{ label: "About", href: "#about" },
		{ label: "Contact", href: "#contact" },
	];

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 8);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed container px-auto top-4 left-1/2 transform  border border-white/10 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
				scrolled ? "backdrop-blur-md bg-white/5" : "bg-transparent"
			} rounded-full`}
			style={{
				WebkitBackdropFilter: scrolled ? "blur(6px)" : undefined,
				backdropFilter: scrolled ? "blur(6px)" : undefined,
			}}
		>
			<div className="flex flex-row items-center gap-2.5 justify-between py-4 px-2.5 lg:px-7">
				<h2 className="lg:text-2xl font-['Pacifico'] text-primary">
					Kgotso Masha
				</h2>
				<nav>
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

					<ul className="block md:hidden">
						<li>
							<MobileMenuButton navList={NAV_LIST} />
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Nav;

function MobileMenuButton({
	navList,
}: {
	navList: { label: string; href: string }[];
}) {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const onDocClick = (e: MouseEvent) => {
			if (!ref.current) return;
			if (!ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener("click", onDocClick);
		return () => document.removeEventListener("click", onDocClick);
	}, []);

	return (
		<div className="relative" ref={ref}>
			<button
				aria-label="Open navigation"
				onClick={() => setOpen((s) => !s)}
				className="p-2 rounded-md bg-white/5 hover:bg-white/10"
			>
				<Menu size={18} />
			</button>

			{open && (
				<div className="absolute right-0 mt-2 w-48 bg-[#0b0812]/80 backdrop-blur-sm rounded-md shadow-lg ring-1 ring-white/10 z-40">
					<ul className="flex flex-col p-2">
						{navList.map((item) => (
							<li key={item.href}>
								<a
									href={item.href}
									onClick={() => setOpen(false)}
									className="block px-3 py-2 rounded hover:bg-white/5 text-sm text-white"
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
