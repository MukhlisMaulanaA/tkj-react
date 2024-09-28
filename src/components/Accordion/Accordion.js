import React, { useState } from "react";

const AccordionMenu = ({ menuItems }) => {
	const [selectedMenu, setSelectedMenu] = useState(menuItems[0]);

	return (
		<div className="flex flex-col md:flex-row items-start">
			<div className="w-full lg:w-4/12 md:w-6/12 p-6">
				<ul className="flex xl:flex-col md:flex-col sm:flex-row gap-4 space-x-4 md:space-x-0 overflow-x-auto md:overflow-visible">
					{menuItems.map((item) => (
						<li
							key={item.id}
							className={`cursor-pointer text-left ${
								selectedMenu.id === item.id
									? "font-bold text-blueGray-700 border-b-2 md:border-l-4 md:border-b-0 border-lightBlue-600 pl-2"
									: "text-gray-600"
							}`}
							onClick={() => setSelectedMenu(item)}>
							{item.title}
						</li>
					))}
				</ul>
			</div>
			<div className="w-full lg:w-10/12 md:w-12/12 px-4">
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
			title: "Electrical",
			content: [
        'Supplay dan Pemasangan Lampu', 
        'Supplay dan Pemasangan Tiang PJU', 
        'Supplay Kabel dan Penarikan Kabel',
        'Supplay Panel dan Setting',
        'Supplay Trafo dan Setting',
        'Supplay dan Pemasangan Penangkal Petir'
      ]
		},
		{
			id: 3,
			title: "Plumbing",
			content: [
        'Pekerjaan Pipa Hidrant, Sprinkle (Fire Fighter)',
        'Pekerjaan Pipa Air Bersih dan Air Kotor', 
        'Pekerjaan Pipa Gas'
      ]
		},
		{
			id: 4,
			title: "Pekerjaan HVAC",
			content: [
        'Pekerjaan Ducting BJLS', 
        'Pekerjaan Ducting V.U', 
        'Supplay dan Install AC',
        'Supplay dan Install AHU',
        'Supplay dan Install Cooling Tower',
        'Supplay dan Install Fan'
      ]
		},
		{
			id: 5,
			title: "Electronics Work",
			content: [
        'Supplay dan Install CCTV', 
        'Supplay dan Install Audio System', 
        'Supplay dan Install System BMS',
        'Pekerjaan Telephone dan Kabel Data',
        'Supplay dan Install Fire Alarm'
      ]
		},
	];

	return <AccordionMenu menuItems={menuItems} />;
};

export default App;
