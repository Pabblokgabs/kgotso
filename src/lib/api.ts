import { showToast } from "./helpers";

const handleSubmit = async (
	formData: {
		email: string;
		name: string;
		message: string;
		subject: string;
	},
	setFormData: React.Dispatch<
		React.SetStateAction<{
			email: string;
			name: string;
			message: string;
			subject: string;
		}>
	>,
	setIsSubmiting: React.Dispatch<React.SetStateAction<boolean>>
) => {
	if (formData.email) {
		const emailRegex =
			/^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"[^"\\]*(\\.[^"\\]*)*")@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/i;

		if (!emailRegex.test(formData.email.trim())) {
			showToast("Please enter a valid email address.", "error");
			return;
		}
	}
	if (!formData.email && !formData.name && !formData.message) {
		return showToast("Please fill in all required fields.", "error");
	} else if (!formData.email) {
		return showToast("Email address is required.", "error");
	} else if (!formData.name) {
		return showToast("Name is required.", "error");
	} else if (!formData.message) {
		return showToast("Message is required.", "error");
	}

	try {
		setIsSubmiting(true);
		const response = await fetch("https://formspree.io/f/mwpwgpqb", {
			method: "POST",
			headers: {
				Accept: "application/json",
			},
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			showToast(
				"Thank you for your message! I’ll get back to you soon.",
				"success"
			);

			setFormData({
				email: "",
				name: "",
				message: "",
				subject: "",
			});
		} else {
			showToast("Failed to send. Please try again later.", "error");
		}
	} catch (error) {
		showToast("Something went wrong. Please try again later.", "error");
	} finally {
		setIsSubmiting(false);
	}
};

const handleValueChange = (
	e: any,
	formData: {
		email: string;
		name: string;
		message: string;
		subject: string;
	},
	setFormData: React.Dispatch<
		React.SetStateAction<{
			email: string;
			name: string;
			message: string;
			subject: string;
		}>
	>
) => {
	if (e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}
};

const handleCopyEmail = async (
	setCopied: React.Dispatch<React.SetStateAction<boolean>>,
	copied: boolean
) => {
	const email = "kgotsomasha1@gmail.com";
	try {
		await navigator.clipboard.writeText(email);
		setCopied(true);
		if (copied) showToast("Email copied successfully");
		setTimeout(() => setCopied(false), 2000);
	} catch (err) {
		console.error("Failed to copy email:", err);
	}
};
export { handleSubmit, handleValueChange, handleCopyEmail };
