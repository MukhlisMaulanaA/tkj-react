// src/components/ProductGrid.js
import React from "react";
import {Link} from 'react-router-dom';

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
	// Tambahkan produk lebih lanjut sesuai kebutuhan
];

const ProductGrid = () => {
	return (
		<section className="py-40 bg-white" id="products">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="flex justify-end items-center gap-5 mb-12">
					<h3 className="text-4xl font-semibold ml-2">Products</h3>
					<div className="text-blueGray-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-lightBlue-300">
						<i className="fas fa-shopping-cart text-xl"></i>
					</div>
				</div>

				{/* Grid Layout */}
				<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
					{products.map((product) => (
						<div
							key={product.id}
							className="bg-white shadow-lg rounded-lg overflow-hidden">
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
				<div className="flex justify-center mt-4">
					<Link
            to="/products"
						className="bg-blueGray-800 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 my-4 ease-linear transition-all duration-200"
						type="button">
						Explore Our Products
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ProductGrid;
