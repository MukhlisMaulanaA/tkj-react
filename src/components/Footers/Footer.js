import React from "react";

export default function Footer() {
	return (
		<>
			<footer className="relative bg-blueGray-200 pt-8 pb-6">
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
							className="text-blueGray-200 fill-current"
							points="2560 0 2560 100 0 100"
						></polygon>
					</svg>
				</div>
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap text-center lg:text-left">
						<div className="w-full lg:w-6/12 px-4">
							<a href="#home" className="flex items-center">
								<img
									src={require("assets/img/logo-tkj.png")}
									height={55}
									width={55}
									alt="logo-tkj"
                  className="hidden md:block"
								/>
								{/* Teks hanya muncul di layar besar */}
								<span className="hidden md:block ml-2 text-2xl font-bold">
									PT. Tanjung Karya Jaya
								</span>
							</a>
							<h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Innovation for Optimal Environment. Leading solutions in airflow and smart electrical technology for comfort and efficiency.
							</h5>
							<div className="mt-6 lg:mb-0 mb-6">
                <a href="https://wa.me/6282146279008" target="_blank">
                  <button
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button">
                      <i class="fab fa-whatsapp-square"></i>
                  </button>
                </a>
                <a href="mailto:tanjungkaryajaya@yahoo.com" target="_blank">
                  <button
                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button">
                    <i class="fas fa-envelope"></i>
                  </button>
                </a>
							</div>
						</div>
						<div className="w-full lg:w-6/12 px-4">
							<div className="flex flex-wrap items-top mb-6 justify-end">
								<div className="w-full lg:w-4/12 px-4">
									<span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
										Useful Links
									</span>
									<ul className="list-unstyled">
										<li>
											<a
												className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
												href="/profile"
											>
												Profile
											</a>
										</li>
										<li>
											<a
												className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
												href="/products"
											>
												Products
											</a>
										</li>
										<li>
											<a
												className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
												href="/#contact"
											>
												Contact
											</a>
										</li>
									</ul>
								</div>
								<div className="w-full lg:w-4/12 px-4 flex flex-col items-center">
									<span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
										Location
									</span>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.9095184674659!2d107.03085235320026!3d-6.190609839415325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6989faa19c4b9f%3A0x7e8fcebbc346f3d0!2sTKJ!5e0!3m2!1sid!2sid!4v1693321684679!5m2!1sid!2sid" width="250" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
								</div>
							</div>
						</div>
					</div>
					<hr className="my-6 border-blueGray-300" />
					<div className="flex flex-wrap items-center md:justify-between justify-center">
						<div className="w-full md:w-4/12 px-4 mx-auto text-center">
							<div className="text-sm text-blueGray-500 font-semibold py-1">
								Copyright © {new Date().getFullYear()}{" "}
								<a
									href="/"
									className="text-blueGray-500 hover:text-blueGray-800"
								>
									PT. Tanjung Karya Jaya
								</a>
								.
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
