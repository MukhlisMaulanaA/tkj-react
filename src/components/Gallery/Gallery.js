import React from "react";

import image1 from "assets/img/gallery1-resize.png";
import image2 from "assets/img/gallery2.png";
import image3 from "assets/img/gallery3.png";
import image4 from "assets/img/gallery4.png";
import image5 from "assets/img/gallery5-resize.png";

const MasonryGridGallery = () => {
	return (
		<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
			<div className="flex flex-col justify-between">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image1}
							alt="gallery-photo"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full text-sm absolute text-white bottom-0 p-4">
							<h3 className="font-bold bottom-0 text-left">PT. Honda Precision Parts Manufacturing</h3>
              <p>Pembuatan Akrilik</p>
            </div>
						</div>
					</div>
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
						src={image5}
						alt="gallery-photo"
					/>
				</div>
			</div>
			<div className="flex flex-col justify-between">
				<div>
					<img
						className="h-auto max-w-full rounded-lg object-cover object-center"
						src={image4}
						alt="gallery-photo"
					/>
				</div>
				<div>
					<img
						className="h-auto max-w-full rounded-lg object-cover object-center"
						src={image3}
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
