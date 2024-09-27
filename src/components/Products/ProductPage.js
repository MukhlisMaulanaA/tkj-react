// src/components/ProductGrid.js
import React from "react";

const products = [
	{
		id: 1,
		name: "Product 1",
		description: "This is a brief description of Product 1.",
		image: "https://via.placeholder.com/400x300",
	},
	{
		id: 2,
		name: "Product 2",
		description: "This is a brief description of Product 2.",
		image: "https://via.placeholder.com/400x300",
	},
	{
		id: 3,
		name: "Product 3",
		description: "This is a brief description of Product 3.",
		image: "https://via.placeholder.com/400x300",
	},
	{
		id: 4,
		name: "Product 4",
		description: "This is a brief description of Product 4.",
		image: "https://via.placeholder.com/400x300",
	},
	{
		id: 5,
		name: "Product 5",
		description: "This is a brief description of Product 5.",
		image: "https://via.placeholder.com/400x300",
	},
	{
		id: 6,
		name: "Product 6",
		description: "This is a brief description of Product 6.",
		image: "https://via.placeholder.com/400x300",
	},
	{
		id: 7,
		name: "Product 7",
		description: "This is a brief description of Product 7.",
		image: "https://via.placeholder.com/400x300",
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
