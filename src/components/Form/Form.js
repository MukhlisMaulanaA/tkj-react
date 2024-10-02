import React from "react";


const Form = () => {
	return (
		<div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
			<h2 class="mb-4 text-2xl font-bold text-white">Ready to Get Started?</h2>
			<form>
				<div class="mb-6">
					<div class="mx-0 mb-1 sm:mb-4">
						<label
							for="name"
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
						for="email"
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
						for="textarea"
						class="pb-1 text-xs uppercase tracking-wider"
					></label>
					<textarea
						id="textarea"
						name="textarea"
						cols="30"
						rows="5"
						placeholder="Write your message..."
						class="mb-2 w-full rounded border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
					></textarea>
				</div>
        <button
          type="submit"
          class="w-full bg-white text-blueGray-800 font-semibold px-6 py-3 font-xl rounded sm:mb-0">
          Send Message
        </button>
			</form>
		</div>
	);
};

export default Form;
