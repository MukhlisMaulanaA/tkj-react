import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_6d92m1n",
				"template_imj0ijw",
				form.current,
				"GkpEKzx1ndK0SURLa"
			)
			.then((result) => {
				console.log("Success!", result.status, result.text);
				form.current.reset();
				alert("Email sent successfully!");
			})
			.catch((error) => {
				console.error("Error:", error);
				alert("Failed to send email. Please try again.");
			});
	};

	return (
		<div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
			<h2 class="mb-4 text-2xl font-bold text-white">Ready to Get Started?</h2>
			<form ref={form} onSubmit={sendEmail} className="space-y-4">
				<div class="mb-6">
					<div class="mx-0 mb-1 sm:mb-4">
						<label
							htmlFor="name"
							class="pb-1 text-xs uppercase tracking-wider"
						></label>
						<input
							type="text"
							id="name"
							autocomplete="given-name"
							placeholder="Your name"
							class="mb-2 w-full rounded border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
							name="name"
						></input>
					</div>
				</div>
				<div class="mx-0 mb-1 sm:mb-4">
					<label
						htmlFor="email"
						class="pb-1 text-xs uppercase tracking-wider"
					></label>
					<input
						type="email"
						id="email"
						autocomplete="email"
						placeholder="Your email address"
						class="mb-2 w-full rounded border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
						name="email"
					></input>
				</div>
				<div class="mx-0 mb-1 sm:mb-4">
					<label
						htmlFor="textarea"
						class="pb-1 text-xs uppercase tracking-wider"
					></label>
					<textarea
						id="message"
						name="message"
						cols="30"
						rows="5"
						placeholder="Write your message..."
						class="mb-2 w-full rounded border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
					></textarea>
				</div>
				<button
					type="submit"
					class="w-full bg-white text-blueGray-800 font-semibold px-6 py-3 font-xl rounded sm:mb-0"
				>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
