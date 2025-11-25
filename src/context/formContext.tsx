import { showToast } from "../lib/helpers";
import type { ReactNode } from "react";
import React, { createContext, useContext, useState } from "react";

interface FormContextType {
	formData: formDataType;
	setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
	error: errorType;
	setError: React.Dispatch<React.SetStateAction<errorType>>;
	copied: boolean;
	setCopied: React.Dispatch<React.SetStateAction<boolean>>;
	isSubmiting: boolean;
	setIsSubmiting: React.Dispatch<React.SetStateAction<boolean>>;
	handleSubmit: any;
}

export const FormContext = createContext<FormContextType | undefined>(
	undefined
);

interface Props {
	children: ReactNode;
}

export const FormProvider: React.FC<Props> = ({ children }) => {
	const [formData, setFormData] = useState({
		email: "",
		name: "",
		message: "",
		subject: "",
	});

	const [error, setError] = useState({
		email: false,
		name: false,
		message: false,
	});

	const [isSubmiting, setIsSubmiting] = useState(false);
	const [copied, setCopied] = useState(false);

	const handleSubmit = async () => {
		// Basic validation
		if (formData.email) {
			const emailRegex =
				/^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"[^"\\]*(\\.[^"\\]*)*")@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/i;

			if (!emailRegex.test(formData.email.trim())) {
				showToast("Please enter a valid email address.", "error");
				setError({ ...error, email: true });
				return;
			}
		}

		if (!formData.email && !formData.name && !formData.message) {
			setError({ email: true, message: true, name: true });
			return showToast("Please fill in all required fields.", "error");
		} else if (!formData.email) {
			setError({ ...error, email: true });
			return showToast("Email address is required.", "error");
		} else if (!formData.name) {
			setError({ ...error, name: true });
			return showToast("Name is required.", "error");
		} else if (!formData.message) {
			setError({ ...error, message: true });
			return showToast("Message is required.", "error");
		} else {
			setError({ email: false, message: false, name: false });
		}

		try {
			setIsSubmiting(true);

			const response = await fetch("https://portfolio-server-eight-azure.vercel.app/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok && data.success) {
				showToast(
					"Thank you for your message! I’ll get back to you soon.",
					"success"
				);

				setFormData({ email: "", name: "", message: "", subject: "" });
			} else {
				showToast(
					data.error || "Failed to send. Please try again later.",
					"error"
				);
			}
		} catch (err) {
			showToast("Something went wrong. Please try again later.", "error");
			console.error(err);
		} finally {
			setIsSubmiting(false);
		}
	};

	return (
		<FormContext.Provider
			value={{
				formData,
				setFormData,
				error,
				setError,
				isSubmiting,
				setIsSubmiting,
				copied,
				setCopied,
				handleSubmit,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export const UseFormContext = () => {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error("FormContext is not provided");
	}
	return context;
};

export default FormContext;
