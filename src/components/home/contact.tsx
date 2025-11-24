import { Clock, Loader, Mail, MapPin } from "lucide-react";
import { UseScrollContext } from "../../context/ScrollFocusContext";
import { UseFormContext } from "../../context/formContext";
import { handleValueChange, showToast } from "../../lib/helpers";

function Contact() {
	const { formData, setFormData, error, isSubmiting, copied, setCopied, handleSubmit, setError } = UseFormContext()
	const { nameInputRef } = UseScrollContext()

	const handleCopyEmail = async () => {
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

	return (
		<section className="flex-1 bg-linear-to-b from-[#060010] to-gray-950">
			<div className="container mx-auto h-full pt-0.5 px-6">
				<div className="lg:border-r lg:border-l md:rounded-t-[20px] py-30 lg:shadow-[-5px_-5px_10px_#3b82f6] overflow-hidden lg:border-t-4 lg:border-[#3b82f6] h-full lg:p-5 flex flex-col">
					<div className="text-center mb-16 lg:mb-20 opacity-0 translate-y-[100px] transition-all duration-700 fade-in-up">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Get In Touch
						</h2>
						<p className="text-lg text-gray-500 max-w-2xl mx-auto">
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
											<Mail />
										</div>
										<div>
											<h4 className="font-medium mb-1">Email</h4>
											<p className="text-gray-500">kgotsomasha1@gmail.com</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-[#3b82f6] rounded-full mr-4 mt-1">
											<MapPin />
										</div>
										<div>
											<h4 className="font-medium mb-1">Location</h4>
											<p className="text-gray-500">
												South Africa, Polokwane Limpopo
											</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-[#3b82f6] rounded-full mr-4 mt-1">
											<Clock />
										</div>
										<div>
											<h4 className="font-medium mb-1">Availability</h4>
											<p className="text-gray-500">
												24/7
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
											className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-500 rounded-full hover:bg-[#3b82f6] hover:text-white transition-colors duration-300"
										>
											<i className="ri-github-fill" />
										</a>
										<a
											onClick={handleCopyEmail}
											className="w-10 h-10 flex items-center cursor-pointer justify-center bg-gray-100 text-gray-500 rounded-full hover:bg-[#3b82f6] hover:text-white transition-colors duration-300"
										>
											<Mail />
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
												className="block text-sm font-medium text-gray-400 mb-2"
											>
												Name
											</label>
											<input
												ref={nameInputRef}
												value={formData.name}
												onChange={(e) => handleValueChange(e, formData, setFormData, setError, error)}
												type="text"
												id="name"
												name="name"
												className={`w-full px-4 py-2 border ${error.name && 'border-red-500'} rounded focus:border-[#3b82f6] outline-0 transition-colors duration-300`}
												placeholder="Your name"
											/>
										</div>
										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-gray-400 mb-2"
											>
												Email
											</label>
											<input
												value={formData.email}
												onChange={(e) => handleValueChange(e, formData, setFormData, setError, error)}
												type="email"
												id="email"
												name="email"
												className={`w-full px-4 py-2 border ${error.email && 'border-red-500'} rounded focus:border-[#3b82f6] outline-0 transition-colors duration-300`} placeholder="Your email"
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="subject"
											className="block text-sm font-medium text-gray-400 mb-2"
										>
											Subject
										</label>

										<input
											value={formData.subject}
											onChange={(e) => handleValueChange(e, formData, setFormData, setError, error)}
											type="text"
											id="subject"
											name="subject"
											className="w-full px-4 py-2 border border-gray-700 rounded focus:border-[#3b82f6] outline-0 transition-colors duration-300"
											placeholder="Subject"
										/>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-400 mb-2"
										>
											Message
										</label>
										<textarea
											value={formData.message}
											onChange={(e) => handleValueChange(e, formData, setFormData, setError, error)}
											id="message"
											name="message"
											rows={5}
											className={`w-full px-4 py-2 border ${error.message && 'border-red-500'} rounded focus:border-[#3b82f6] outline-0 transition-colors duration-300`}
											placeholder="Your message"
										></textarea>
									</div>

									<div className="flex items-center">
										<input
											type="checkbox"
											id="newsletter"
											name="newsletter"
											className="checked:bg-[#3b82f6] mr-3"
										/>
										<label
											htmlFor="newsletter"
											className="text-sm checked:bg-[#3b82f6]"
										>
											Subscribe to my newsletter for updates on new projects
										</label>
									</div>

									<button
										disabled={isSubmiting}
										type="button"
										onClick={handleSubmit}
										className={`${isSubmiting
											? "cursor-not-allowed opacity-40"
											: "cursor-pointer hover:bg-blue-600"
											} px-6 py-3 bg-[#3b82f6] text-white font-medium whitespace-nowrap transition-all duration-300  shadow-md hover:shadow-lg flex items-center rounded-lg`}
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
