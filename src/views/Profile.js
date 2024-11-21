import React from "react";

import background from "assets/img/carousel2.jpg";

import Navbar from "components/Navbars/CustomNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
	return (
		<>
			<Navbar />
			<main className="profile-page">
				<section className="relative block h-500-px">
					<div
						className="absolute top-0 w-full h-full bg-center bg-cover"
						style={{
							backgroundImage: `url(${background})`,
						}}
					>
						<span
							id="blackOverlay"
							className="w-full h-full absolute opacity-50 bg-black"
						></span>
					</div>
					<div
						className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
				</section>
				<section className="relative py-16 bg-blueGray-200">
					<div className="container mx-auto px-4">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
							<div className="px-6">
								<div className="flex flex-wrap justify-center">
									<div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
										<div className="relative">
											<img
												alt="..."
												src={require("assets/img/logo-tkj-circle.png")}
												className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
											/>
										</div>
									</div>
								</div>
								<div className="text-center mt-32">
									<h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
										PT. Tanjung Karya Jaya
									</h3>
									<div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
										<i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
										Kabupaten Bekasi, Jawa Barat
									</div>
									<div className="mb-2 text-blueGray-600 mt-10">
										<i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
										Kontraktor Mechanical - Electrical - Plumbing dan HVAC
									</div>
									<div className="flex flex-row flex-wrap justify-center gap-4">
										<div className="mb-2 text-blueGray-600 hover:text-blueGray-800">
											<i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
											<a href="mailto:Tanjungkaryajaya@yahoo.com" target="_blank">
												Tanjungkaryajaya@yahoo.com
											</a>
										</div>
										<div className="mb-2 text-blueGray-600 hover:text-blueGray-800">
											<i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
											<a href="mailto:pttanjungkaryajaya.office@gmail.com" target="_blank">
                      pttanjungkaryajaya.office@gmail.com
											</a>
										</div>
										<div className="mb-2 text-blueGray-600 hover:text-blueGray-800">
											<i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
											<a href="mailto:bagioh88@gmail.com" target="_blank">
												bagioh88@gmail.com
											</a>
										</div>
									</div>
									<div className="mb-2 text-blueGray-600 hover:text-blueGray-800">
										<i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
										<a href="https://wa.me/6282146279008" target="_blank">
                      +62 821-4627-9008
										</a>
									</div>
								</div>
								<div className="mt-10 py-10 border-t border-blueGray-200 text-center">
									<div className="flex flex-wrap justify-center">
										<div className="w-full lg:w-9/12 px-4">
											<p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        PT. Tanjung Karya Jaya (TKJ) is a leading provider of Mechanical, Electrical, Plumbing, and HVAC (MEP) construction services. Since our establishment in 2019, we have consistently delivered exceptional projects, built on a foundation of quality, reliability, and customer satisfaction.
											</p>
											<p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Thanks to the trust of our clients, we have consistently delivered exceptional results in a variety of construction projects, spanning office buildings, commercial properties, and industrial facilities.
											</p>
											<p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        We have achieved significant growth through successful collaborations with our material vendors, subcontractors, and other business partners.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="px-6">
								<div className="flex flex-wrap items-center border-t">
									<div className="w-full lg:w-4/12 px-4 flex justify-center">
										<img
											alt="..."
											src={require("assets/img/profile-visi-misi2.jpg")}
											className="max-w-full rounded-lg shadow-lg bg-cover"
										/>
									</div>

									<div className="w-full lg:w-8/12 px-4">
										<div className="grid md:grid-cols-1 pt-12 p-4">
											<div className="rounded-lg p-2 mb-4">
												<h1 className="text-darken mb-3 text-2xl font-semibold text-blueGray-800">
													Vision
												</h1>
												<p className="text-blueGray-800 text-lg font-regular">
                          Our vision is to be Indonesia's premier construction company, committed to sustainable growth, customer satisfaction, and the well-being of all stakeholders. We will achieve this through sound corporate governance and a strong commitment to social responsibility.
												</p>
											</div>

											<div className="rounded-lg p-2 mb-4">
												<h1 className="text-darken mb-3 text-2xl font-semibold text-blueGray-800">
													Mission
												</h1>
												<ul className="px-4 list-disc">
													<li className="text-blueGray-800 text-lg font-regular">
                            To foster synergy between management and employees in maintaining company values and pursuing common goals.
													</li>
													<li className="text-blueGray-800 text-lg font-regular">
                            By providing targeted training and implementing a robust recruitment process, we aim to build a high-performing workforce that is committed to our company's success.
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
