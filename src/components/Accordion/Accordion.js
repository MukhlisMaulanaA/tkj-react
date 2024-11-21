import React, { useState } from "react";

const AccordionMenu = ({ menuItems }) => {
	const [selectedMenu, setSelectedMenu] = useState(menuItems[0]);

	return (
		<div className="flex flex-col md:flex-row items-start mt-4 lg:w-8/12 w-full">
			<div className="w-full lg:w-4/12 md:w-4/12 p-6 bg-blueGray-700 rounded-lg shadow-lg">
				<ul className="flex xl:flex-col md:flex-col sm:flex-row gap-4 space-x-4 md:space-x-0 overflow-x-auto md:overflow-visible">
					{menuItems.map((item) => (
						<li
							key={item.id}
							className={`cursor-pointer text-left ${
								selectedMenu.id === item.id
									? "font-bold text-blueGray-200 border-b-2 md:border-l-4 md:border-b-0 border-lightBlue-200 pl-2"
									: "text-blueGray-100"
							}`}
							onClick={() => setSelectedMenu(item)}>
							{item.title}
						</li>
					))}
				</ul>
			</div>
			<div className="w-full lg:w-10/12 md:w-12/12 px-4 mt-4">
				<h1 className="text-2xl font-bold text-gray-700">
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
        'Elevator Installation Work', 
        'Pump Supply and Installation'
      ]
		},
		{
			id: 2,
			title: "Electrical",
			content: [
        'Light Supply and Installation', 
        'Supply and Installation of PJU Poles', 
        'Cable Supply and Cable Pulling',
        'Panel Supply and Setting',
        'Transformer Supply and Setup',
        'Lightning rod supply and installation'
      ]
		},
		{
			id: 3,
			title: "Plumbing",
			content: [
        'Hydrant Pipe Work, Sprinkle (Fire Fighter)',
        'Clean and Dirty Water Pipe Work', 
        'Gas Pipeline Work'
      ]
		},
		{
			id: 4,
			title: "HVAC Work",
			content: [
        'BJLS Ducting Work', 
        'V.U Ducting Work', 
        'Supply and Install AC',
        'Supply and Install AHU',
        'Supply and Install Cooling Tower',
        'Supply and Install Fan'
      ]
		},
		{
			id: 5,
			title: "Electronics Work",
			content: [
        'CCTV Supply and Install', 
        'Supply and Install Audio System', 
        'Supply and Install BMS System',
        'Telephone and Data Cabling Work',
        'Fire Alarm Supply and Install'
      ]
		},
	];

	return <AccordionMenu menuItems={menuItems} />;
};

export default App;
