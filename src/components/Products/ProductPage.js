// src/components/ProductGrid.js
import React from "react";

import product1 from "assets/img/product-bjls.jpg";
import product2 from "assets/img/square-duct.jpg";
import product3 from "assets/img/air-grillie.jpg";
import product4 from "assets/img/airdamper.jpg";


const products = [
	{
		id: 1,
		name: "BJLS DUCT",
		description: "Ducting BJLS atau baja lapis seng isolasi luar salah satunya menggunakan material glass wool.Jenis glass wool digunakan sebagai isolasi luar untuk menyelimuti ducting Isolasi ini dapat disesuaikan dengan suhu udara yang akan disalurkan.Semakin kecil temperatur udara (dingin) maka, semakin tebal pula isolasi glass wool yang diperlukan. Umumnya, jenis glass wool yang kerap digunakan ialah ukuran 24Kg/m3 dengan ketebalan 25 mm.",
		image: product1,
	},
	{
		id: 2,
		name: "SQUARE GALVANIZED IRON DUCT",
		description: "Square ducting digunakan untuk memindahkan material atau limbah produksi, terutama debu halus, dari mesin produksi ke tahap produksi selanjutnya. Ducting ini dapat dibuat dari berbagai bahan seperti BJLS, Stainless Steel, Zincalume, galvalum, dan poliuretan, dengan ketebalan yang bervariasi tergantung pada ukuran ducting dan kebutuhan penggunaan. Bala bantuan dipasang pada ducting persegi besar untuk kekuatan dan stabilitas.",
		image: product2,
	},
	{
		id: 3,
		name: "AIR GRILLIE",
		description: "Return Air Grille terhubung ke saluran ducting memungkinkan udara kembali ke sistem pendinginan atau pemanas. Bukaan menuju saluran dan ruang lain biasanya ditutup dengan grille. Sistem akan mendorong udara ke ruangan melalui saluran, meningkatkan tekanan udara di area yang dikondisikan. Saluran balik memungkinkan udara disirkulasi ulang atau dibuang ke luar, dengan filter untuk menjaga kebersihan udara.",
		image: product3,
	},
	{
		id: 4,
		name: "AIR DAMPER",
		description: "Air damper adalah komponen dalam sistem ventilasi yang mengontrol aliran udara melalui pintu atau pelat yang dapat dibuka dan ditutup. Fungsinya adalah mengatur suhu, kelembaban, dan sirkulasi udara dalam bangunan atau ruangan. Damper dapat dioperasikan secara manual atau otomatis dengan sensor-sensor untuk pengaturan yang lebih efisien.",
		image: product4,
	},
	// Tambahkan produk lebih lanjut sesuai kebutuhan
];

const ProductPage = () => {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				{/* Grid Layout */}
				<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
					{products.map((product) => (
						<div
							key={product.id}
							className="bg-white shadow-lg rounded-lg overflow-hidden"
						>
							<img
								src={product.image}
								alt={product.name}
								className="w-full h-56 object-cover"
							/>
							<div className="p-6">
								<h5 className="text-xl font-bold mb-2">{product.name}</h5>
								<p className="text-blueGray-700 text-base">
									{product.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductPage;
