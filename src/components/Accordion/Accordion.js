import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
			<div className="max-w-md mx-auto px-6 pt-2">
				{/* Accordion Header */}
				<div
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center text-gray-600 w-full border-b overflow-hidden mb-5 mx-auto cursor-pointer"
				>
					<div
						className={`w-10 border-r px-2 transform transition duration-300 ease-in-out ${
							isOpen ? "rotate-90" : "-translate-y-0.0"
						}`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</div>
					<div className="flex items-center px-2 py-3">
						<div className="mx-3">
							<button className="hover:text-underline">
								<span className="text-xl font-semibold">{title}</span>
							</button>
						</div>
					</div>
				</div>

				{/* Accordion Content */}
				{isOpen && (
					<div className="flex px-6 md:p-0 w-full transform transition duration-300 ease-in-out border-b pb-6">
						<ul className="list-disc">
							{content.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

const Accordion = ({ data }) => {
	return (
		<div className="grid lg:grid-cols-3 md:grid-cols-1 gap-2">
			{data.map((item, index) => (
				<AccordionItem key={index} title={item.title} content={item.content} />
			))}
		</div>
	);
};

export default Accordion;
