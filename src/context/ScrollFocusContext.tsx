import type { ReactNode } from "react";
import React, { createContext, useContext, useRef } from "react";

interface ScrollFocusContextType {
	nameInputRef: React.RefObject<HTMLInputElement>;
	scrollToContact: () => void;
}

export const ScrollFocusContext = createContext<
	ScrollFocusContextType | undefined
>(undefined);

interface Props {
	children: ReactNode;
}

export const ScrollFocusProvider: React.FC<Props> = ({ children }) => {
	const nameInputRef = useRef<any>(null);

	const scrollToContact = () => {
		const contactSection = document.getElementById("contact");
		if (!contactSection) return;

		const targetPosition =
			contactSection.getBoundingClientRect().top + window.scrollY;
		const startPosition = window.scrollY;
		const distance = targetPosition - startPosition;
		const duration = 500;
		let startTime: number | null = null;

		const step = (currentTime: number) => {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const progress = Math.min(timeElapsed / duration, 1);
			const ease =
				progress < 0.5
					? 2 * progress * progress
					: -1 + (4 - 2 * progress) * progress;

			window.scrollTo(0, startPosition + distance * ease);

			if (timeElapsed < duration) {
				requestAnimationFrame(step);
			} else {
				nameInputRef.current?.focus();
			}
		};

		requestAnimationFrame(step);
	};

	return (
		<ScrollFocusContext.Provider value={{ nameInputRef, scrollToContact }}>
			{children}
		</ScrollFocusContext.Provider>
	);
};

export const UseScrollContext = () => {
	const context = useContext(ScrollFocusContext);
	if (!context) {
		throw new Error("ScrollFocusContext is not provided");
	}
	return context;
};

export default ScrollFocusContext;
