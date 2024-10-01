import React from "react";

import image1 from "assets/img/google.png";
import image2 from "assets/img/tensorflow.png";
import image3 from "assets/img/asus.png";
import image4 from "assets/img/yahoo.png";
import image5 from "assets/img/google-ai.png";

const Customers = () => {
	return (
		<div className="grid grid-cols-5 grid-rows-2 items-center gap-2">
			<div>
				<img
					alt="Reform"
					src={image1}
					width={200}
					height={100}
					className=""
				/>
			</div>
			<div>
				<img
					alt="Reform"
					src={image2}
					width={200}
					height={100}
					className=""
				/>
			</div>
			<div>
				<img
					alt="Reform"
					src={image3}
					width={200}
					height={100}
					className=""
				/>
			</div>
			<div>
				<img
					alt="Reform"
					src={image4}
					width={200}
					height={100}
					className=""
				/>
			</div>
			<div>
				<img
					alt="Reform"
					src={image5}
					width={200}
					height={100}
					className=""
				/>
			</div>
		</div>
	);
};

export default Customers;
