import React from "react";

import image1 from "assets/img/gallery1-resize.png";
import image2 from "assets/img/gallery2.png";
import image3 from "assets/img/carousel3.jpg";


const MasonryGridGallery = () => {
	return (
		<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
			<div className="flex flex-col justify-between">
				<div className="">
					<img
						className="h-auto max-w-full rounded-lg object-cover object-center"
						src={image1}
						alt="gallery-photo"
					/>
				</div>
				<div>
					<img
						className="h-auto max-w-full rounded-lg object-cover object-center "
						src={image2}
						alt="gallery-photo"
					/>
				</div>
			</div>
			<div className="grid gap-4">
				<div>
					<img
						className="h-auto max-w-full rounded-lg object-cover object-center"
						src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
						alt="gallery-photo"
					/>
				</div>
			</div>
			<div className="flex flex-col justify-between">
				<div>
					<img
						className="h-auto max-w-full rounded-lg object-cover object-center"
						src={image2}
						alt="gallery-photo"
					/>
				</div>
				<div>
					<img
						className="h-auto max-w-full rounded-lg object-cover object-center"
						src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
						alt="gallery-photo"
					/>
				</div>
			</div>
			<div className="grid gap-4">
				<div>
					<img
						className="h-auto max-w-full rounded-lg object-cover object-center"
						src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
						alt="gallery-photo"
					/>
				</div>
			</div>
		</div>
	);
};

export default MasonryGridGallery;
