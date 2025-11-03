import { useState } from "react";
import { showToast } from "../../lib/helpers";
import { Loader } from "lucide-react";

function Contact() {
	const [formData, setFormData] = useState({
		email: "",
		name: "",
		message: "",
		subject: "",
	});
	const [isSubmiting, setIsSubmiting] = useState(true);

	const handleSubmit = async () => {
		if (!formData.email && !formData.name && !formData.message) {
			return showToast("Please fill in all required fields.", "error");
		} else if (!formData.email) {
			return showToast("Email address is required.", "error");
		} else if (!formData.name) {
			return showToast("Name is required.", "error");
		} else if (!formData.message) {
			return showToast("Message is required.", "error");
		}
		const emailRegex =
			/^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"[^"\\]*(\\.[^"\\]*)*")@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/i;

		if (!emailRegex.test(formData.email.trim())) {
			showToast("Please enter a valid email address.", "error");
			return;
		}

		try {
			setIsSubmiting(true);
			const response = await fetch("https://formspree.io/f/mzzgqlpr", {
				method: "POST",
				headers: {
					Accept: "application/json",
				},
				body: formData,
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
	return (
		<section
			id="contact"
			className="flex-1 bg-linear-to-b from-[#060010] to-gray-950"
		>
			<div className="container mx-auto h-full">
				<div className="lg:border-r lg:border-l md:rounded-t-[20px] overflow-hidden lg:border-t-4 lg:border-[#3b82f6] h-full p-5 flex flex-col">
					<div className="text-center mb-16 lg:mb-20 opacity-0 translate-y-[-100px] transition-all duration-700 fade-in-down">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Get In Touch
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Have a project in mind or just want to say hello? I'd love to hear
							from you!
						</p>
					</div>
					<div className="flex flex-col lg:flex-row gap-12">
						<div className="w-full lg:w-1/3 order-2 md:order-1 opacity-0 translate-x-[-100px] transition-all duration-700 fade-in-left">
							<div className="bg-gray-900 p-8 rounded-lg shadow-md">
								<h3 className="text-xl font-bold mb-6">Contact Information</h3>

								<div className="space-y-6">
									<div className="flex items-start">
										<div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-[#3b82f6] rounded-full mr-4 mt-1">
											<i className="ri-mail-line"></i>
										</div>
										<div>
											<h4 className="font-medium mb-1">Email</h4>
											<p className="text-gray-700">kgotsomasha1@gmail.com</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-[#3b82f6] rounded-full mr-4 mt-1">
											<i className="ri-map-pin-line"></i>
										</div>
										<div>
											<h4 className="font-medium mb-1">Location</h4>
											<p className="text-gray-700">
												South Africa, Polokwane Limpopo
											</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-[#3b82f6] rounded-full mr-4 mt-1">
											<i className="ri-time-line"></i>
										</div>
										<div>
											<h4 className="font-medium mb-1">Availability</h4>
											<p className="text-gray-700">
												Monday - Friday, 9am - 6pm
											</p>
										</div>
									</div>
								</div>

								<div className="mt-8">
									<h3 className="text-xl font-bold mb-4">Connect</h3>
									<div className="flex space-x-4">
										<a
											href="https://github.com/Pabblokgabs"
											target="_blank"
											rel="noopener noreferrer"
											className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-[#3b82f6] hover:text-white transition-colors duration-300"
										>
											<i className="ri-github-fill"></i>
										</a>
										<a
											href=""
											target="_blank"
											rel="noopener noreferrer"
											className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-[#3b82f6] hover:text-white transition-colors duration-300"
										>
											<i className="ri-mail-fill text-xl"></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="w-full lg:w-2/3 order-1 md:order-2 opacity-0 translate-x-[100px] transition-all duration-700 fade-in-right">
							<div className="bg-gray-900 p-8 rounded-lg shadow-md">
								<h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
								<form id="contact-form" className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-gray-700 mb-1"
											>
												Name
											</label>
											<input
												type="text"
												id="name"
												name="name"
												className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
												placeholder="Your name"
											/>
										</div>
										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-gray-700 mb-1"
											>
												Email
											</label>
											<input
												type="email"
												id="email"
												name="email"
												className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
												placeholder="Your email"
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="subject"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Subject
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
											placeholder="Subject"
										/>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Message
										</label>
										<textarea
											id="message"
											name="message"
											rows={5}
											className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
											placeholder="Your message"
										></textarea>
									</div>

									<div className="flex items-center">
										<input
											type="checkbox"
											id="newsletter"
											name="newsletter"
											className="custom-checkbox mr-3"
										/>
										<label
											htmlFor="newsletter"
											className="text-sm text-gray-700"
										>
											Subscribe to my newsletter for updates on new projects
										</label>
									</div>

									<button
										disabled={isSubmiting}
										type="button"
										onClick={handleSubmit}
										className={`${
											isSubmiting ? "cursor-not-allowed" : "cursor-pointer"
										} px-6 py-3 bg-[#3b82f6] text-white font-medium whitespace-nowrap transition-all duration-300 hover:bg-blue-600 shadow-md hover:shadow-lg flex items-center`}
									>
										{isSubmiting && <Loader className="animate-spin mr-2" />}

										<span>
											{isSubmiting ? "Submitting..." : "Send Message"}
										</span>
										{!isSubmiting && (
											<i className="ri-send-plane-line ml-2"></i>
										)}
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
