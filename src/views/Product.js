import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/CustomNavbar.js";
import Footer from "components/Footers/Footer.js";
import ProductCarousel from "components/Products/Products";
import ProductPage from "components/Products/ProductPage";

export default function Product() {
	return (
		<>
			<Navbar />
			<main>
				<section className="lg:pt-20 md:pt-32 pb-20 relative content-center items-center justify-center bg-blueGray-800">
					<div
						className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
						style={{ transform: "translateZ(0)" }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="text-blueGray-800 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>

					<div className="container mx-auto px-4 lg:pt-24 pt-32">
						<div className="flex flex-wrap text-center justify-center">
							<div className="w-full lg:w-6/12 px-4">
								<h2 className="text-4xl font-semibold text-white">
									Our Products
								</h2>
								<p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
									Build with better quality.
								</p>
							</div>
						</div>
					</div>
				</section>
        <ProductPage />
			</main>
			<Footer />
		</>
	);
}
