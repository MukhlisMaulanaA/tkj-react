import React from "react";

import image1 from "assets/img/gallery1-resize.png";
import image2 from "assets/img/gallery2.png";
import image3 from "assets/img/gallery3.png";
import image4 from "assets/img/gallery4.png";
import image5 from "assets/img/gallery5-resize.png";
import image6 from "assets/img/gallery6.png";
import image7 from "assets/img/gallery7.png";
import image8 from "assets/img/gallery8.jpg";
import image10 from "assets/img/gallery10.jpg";
import image11 from "assets/img/gallery11.jpg";
import image12 from "assets/img/gallery12.jpg";
import image13 from "assets/img/gallery13.jpg";
import image14 from "assets/img/tower-protelindo1.jpg";
import image15 from "assets/img/tower-protelindo2.jpg";
import image16 from "assets/img/tower-protelindo3.jpg";
import image17 from "assets/img/tower-protelindo4.jpg";
import image18 from "assets/img/pipa-pt-kaneta1.jpg";
import image19 from "assets/img/pipa-pt-kaneta2.jpg";
import image20 from "assets/img/ducting-pt-sy-tech1.jpg";
import image21 from "assets/img/pipa-pt-kaneta3.jpg";
import image22 from "assets/img/pipa-pt-kaneta4.jpg";
import image23 from "assets/img/ducting-pt-sy-tech2.jpg";
import image24 from "assets/img/jacketing-pt-hppm1.jpg";
import image25 from "assets/img/jacketing-pt-hppm2.jpg";
import image26 from "assets/img/jacketing-pt-hppm3.jpg";
import image27 from "assets/img/jacketing-pt-hppm4.jpg";


const MasonryGridGallery = () => {
	return (
		<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
			<div className="flex flex-col justify-between">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image1}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									PT. Honda Precision Parts Manufacturing
								</h3>
								<p>Pembuatan Akrilik</p>
							</div>
						</div>
					</div>
				</div>
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image2}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									PT. Honda Precision Parts Manufacturing
								</h3>
								<p>Pembuatan Akrilik</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-4">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image5}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									PT. Daewong Biologic Indonesia
								</h3>
								<p>Pas Box</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image4}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									PT. Daewong Biologic Indonesia
								</h3>
								<p>AHU</p>
							</div>
						</div>
					</div>
				</div>
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image3}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									PT. Daewong Biologic Indonesia
								</h3>
								<p>Clean Booth</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-4">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image6}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									PT. Daewong Biologic Indonesia
								</h3>
								<p>Interlock</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid gap-4">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image11}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">Telkomsel</h3>
								<p>Pemasangan Baterai Lithium</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image12}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">Telkomsel</h3>
								<p>Pemasangan Baterai Lithium</p>
							</div>
						</div>
					</div>
				</div>
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image13}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">Telkomsel</h3>
								<p>Pemasangan Baterai Lithium</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid gap-4">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image7}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									Data Center Indonesia
								</h3>
								<p>Pemasangan dan Instalasi AHU LT - 8</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image8}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									Data Center Indonesia
								</h3>
								<p>Pemasangan dan Instalasi AHU LT - 8</p>
							</div>
						</div>
					</div>
				</div>
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image10}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									Data Center Indonesia
								</h3>
								<p>Pemasangan dan Instalasi AHU LT - 8</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-4">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image14}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									Tower Protelindo
								</h3>
								<p>Installasi Tower Communication</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-4">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image15}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									Tower Protelindo
								</h3>
								<p>Installasi Tower Communication</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-4">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image16}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									Tower Protelindo
								</h3>
								<p>Installasi Tower Communication</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-4">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image17}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									Tower Protelindo
								</h3>
								<p>Installasi Tower Communication</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-between gap-2">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image18}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">PT. Kaneta</h3>
								<p>Pipa</p>
							</div>
						</div>
					</div>
				</div>
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image19}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">PT. Kaneta</h3>
								<p>Pipa</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-4">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image20}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">PT. SY Tech</h3>
								<p>Ducting</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image21}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">PT. Kaneta</h3>
								<p>Pipa</p>
							</div>
						</div>
					</div>
				</div>
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image22}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">PT. Kaneta</h3>
								<p>Pipa</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-4">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image23}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									PT. SY Tech
								</h3>
								<p>Ducting</p>
							</div>
						</div>
					</div>
				</div>
			</div>

      <div className="grid gap-4">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image24}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									PT. HPPM
								</h3>
								<p>Jacketing</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-4">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image25}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									PT. HPPM
								</h3>
								<p>Jacketing</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-4">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image26}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									PT. HPPM
								</h3>
								<p>Jacketing</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-4">
				<div className="relative group">
					<div>
						<img
							className="h-auto max-w-full rounded-lg object-cover object-center"
							src={image27}
							alt="gallery"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-full text-sm absolute text-white bottom-0 p-4">
								<h3 className="font-bold bottom-0 text-left">
									PT. HPPM
								</h3>
								<p>Jacketing</p>
							</div>
						</div>
					</div>
				</div>
			</div>
      
		</div>
	);
};

export default MasonryGridGallery;
