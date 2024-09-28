import React, { useState } from "react";

const AccordionMenu = ({ menuItems }) => {
	const [selectedMenu, setSelectedMenu] = useState(menuItems[0]);

	return (
		<div className="flex flex-col md:flex-row items-start">
			<div className="w-full lg:w-4/12 p-6 flex">
				<ul className="flex md:block space-x-4 md:space-x-0 overflow-x-auto md:overflow-visible">
					{menuItems.map((item) => (
						<li
							key={item.id}
							className={`cursor-pointer ${
								selectedMenu.id === item.id
									? "font-bold text-lightBlue-500 border-b-2 md:border-l-4 md:border-b-0 border-blue-600 pl-2"
									: "text-gray-600"
							}`}
							onClick={() => setSelectedMenu(item)}
						>
							{item.title}
						</li>
					))}
				</ul>
			</div>
			<div className="w-full lg:w-10/12 px-4">
				<h1 className="text-2xl font-bold text-gray-800">
					{selectedMenu.title}
				</h1>
				<ul className="list-disc pl-10 mt-4">
          {selectedMenu.content.map((item, index) => (
            <li key={index} className="text-gray-600 mb-2">{item}</li>
          ))}
        </ul>           
			</div>
		</div>
	);
};

// Example usage
const App = () => {
	const menuItems = [
		{
			id: 1,
			title: "Mechanical Work",
			content: [
        'Pekerjaan Pemasangan Lift', 
        'Supplay dan Pemasangan Pompa'
      ]
		},
		{
			id: 2,
			title: "Privacy Policy",
			content: [
        'Lorem 1', 'Lorem 2', 'Lorem 3'
      ]
		},
		{
			id: 3,
			title: "Orders",
			content: [
        'Lorem 1', 'Lorem 2', 'Lorem 3'
      ]
		},
		{
			id: 4,
			title: "Product & Stock",
			content: [
        'Lorem 1', 'Lorem 2', 'Lorem 3'
      ]
		},
		{
			id: 5,
			title: "My Account",
			content: [
        'Lorem 1', 'Lorem 2', 'Lorem 3'
      ]
		},
		{
			id: 6,
			title: "Refund Policy",
			content: [
        'Lorem 1', 'Lorem 2', 'Lorem 3'
      ]
		},
	];

	return <AccordionMenu menuItems={menuItems} />;
};

export default App;
