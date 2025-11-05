import type { ReactNode } from "react";
import StarBorder from "./StarBorder";

const Button = ({
	Children,
	className,
	onclick,
	btnColor,
}: {
	Children: ReactNode;
	className: string;
	onclick?: () => void;
	btnColor?: string;
}) => {
	return (
		<StarBorder
			as="button"
			className={className}
			color="#3b82f6"
			speed="3s"
			onClick={onclick}
			thickness={5}
			btnColor={btnColor}
		>
			{Children}
		</StarBorder>
	);
};

export default Button;
