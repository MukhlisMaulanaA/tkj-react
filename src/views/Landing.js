import React from "react";
import { Link } from "react-router-dom";

// components
import Navbar from "components/Navbars/CustomNavbar.js";
import Footer from "components/Footers/Footer.js";
import ImageCarousel from "components/Carousel/Carousel.js";
import Products from "components/Products/Products.js";
import AccordionMenu from "components/Accordion/Accordion.js";
import Gallery from "components/Gallery/Gallery.js";
import Customer from "components/Customers/Customer.js";
import ContactForm from "components/ContactForm/ContactForm.js";
import Video from "components/Video/Video.js";

export default function Landing() {
	return (
		<>
			<Navbar />
			<main>
				<div
					className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
					id="home">
					<ImageCarousel />
					<div className="container relative mx-auto">
						<div className="items-center flex flex-wrap">
							<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
								<div className="">
									<h1 className="text-white font-semibold text-5xl">
										Building Credibility
									</h1>
									<p className="mt-4 text-lg text-blueGray-200">
                    PT. Tanjung Karya Jaya, Your Partner in Mechanical, Electrical, Plumbing, and HVAC.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
						style={{ transform: "translateZ(0)", marginBottom: "-1px" }}
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
				</div>

				<section className="pb-20 bg-blueGray-200 -mt-24">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap">
							<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
									<div className="px-4 py-5 flex-auto">
										<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
											<i class="fas fa-lightbulb"></i>
										</div>
										<h6 className="text-xl font-semibold">Inovation</h6>
										<p className="mt-2 mb-4 text-blueGray-500">
                    We are always at the forefront of change, pioneering innovative solutions that transform challenges into opportunities.
										</p>
									</div>
								</div>
							</div>

							<div className="w-full md:w-4/12 px-4 text-center">
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
									<div className="px-4 py-5 flex-auto">
										<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
											<i class="fas fa-cogs"></i>
										</div>
										<h6 className="text-xl font-semibold">Optimization</h6>
										<p className="mt-2 mb-4 text-blueGray-500">
                    With our expertise and dedication, we consistently deliver optimal solutions to every challenge, ensuring the best possible outcomes for each project.
										</p>
									</div>
								</div>
							</div>

							<div className="pt-6 w-full md:w-4/12 px-4 text-center">
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
									<div className="px-4 py-5 flex-auto">
										<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
											<i class="fas fa-magic"></i>
										</div>
										<h6 className="text-xl font-semibold">Efficiency</h6>
										<p className="mt-2 mb-4 text-blueGray-500">
                    By strategically managing our resources, we ensure that we deliver maximum value to our clients while upholding the highest standards of quality.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="pb-20 bg-blueGray-200" id="about">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap items-center pt-32">
							<div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
								<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
									<i class="fas fa-info"></i>
								</div>
								<h3 className="text-4xl mb-2 font-semibold leading-normal">
									About Us
								</h3>
								<p className="text-lg font-medium leading-relaxed mt-4 mb-4 text-blueGray-600">
                  PT. Tanjung Karya Jaya (TKJ) is a leading provider of Mechanical, Electrical, Plumbing, and HVAC (MEP) construction services. Since our establishment in 2019, we have consistently delivered exceptional projects, built on a foundation of quality, reliability, and customer satisfaction.
								</p>
								<p className="text-lg font-medium leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Thanks to the trust of our clients, we have consistently delivered exceptional results in a variety of construction projects, spanning office buildings, commercial properties, and industrial facilities.
								</p>
								<Link
									to="/profile"
									className="bg-blueGray-800 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 my-4 ease-linear transition-all duration-200"
									type="button"
								>
									Read More..
								</Link>
							</div>

							<div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
								<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
									<img
										alt="..."
										src={require("assets/img/about.jpg")}
										className="w-full align-middle rounded-t-lg"
									/>
									<blockquote className="relative p-8 mb-4">
										<svg
											preserveAspectRatio="none"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 583 95"
											className="absolute left-0 w-full block h-95-px -top-94-px"
										>
											<polygon
												points="-30,95 583,95 583,65"
												className="text-lightBlue-500 fill-current"
											></polygon>
										</svg>
										<h4 className="text-xl font-bold text-white">
											PT. Tanjung Karya Jaya
										</h4>
										<p className="text-md font-light mt-2 text-white">
                      Innovation for Optimal Environments. Leading solutions in smart airflow and electrical technology for comfort and efficiency.
										</p>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="relative py-20">
					<div
						className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
						style={{ transform: "translateZ(0)" }}>
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
								className="text-white fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
				</section>

				<section className="pb-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="flex justify-start items-center gap-5">
							<div className="text-blueGray-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-lightBlue-300">
								<i class="fas fa-users-cog text-xl"></i>
							</div>
							<h3 className="text-4xl font-semibold ml-2">Our Division</h3>
						</div>
					</div>
					<div className="container mx-auto -px-4">
						<div className="flex flex-wrap items-center">
							<div className="w-full lg:w-4/12 px-4 flex justify-center">
								<img
									alt="..."
									src={require("assets/img/division.png")}
									className="max-w-full rounded-lg shadow-lg bg-cover"
								/>
							</div>

							<div className="w-full lg:w-8/12 px-4">
								<div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 pt-12 p-4">
									<div className="rounded-lg bg-blueGray-700 p-6 text-center shadow-xl mb-4">
										<div className="absolute mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-lightBlue-400 shadow-lg shadow-lightBlue-500/40">
											<i class="fas fa-box text-xl"></i>
										</div>
										<h1 className="text-darken mb-3 text-2xl font-semibold lg:px-14 text-white">
											Production
										</h1>
										<p className="px-4 text-white font-light">
                      Our commitment to quality is reflected in our premium products, which are the result of rigorous quality assurance, rapid innovation, advanced technology, and a highly skilled team.
										</p>
									</div>

									<div className="rounded-lg bg-blueGray-700 p-6 text-center shadow-xl mb-4">
										<div className="absolute mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-lightBlue-400 shadow-lg shadow-lightBlue-500/50">
											<i class="fas fa-tools text-xl"></i>
										</div>
										<h1 className="text-darken mb-3 text-xl font-semibold lg:px-14 text-white">
											Engineering
										</h1>
										<p className="px-4 text-white font-light">
                      Our creative team is skilled at turning our customers' unique requirements into products that meet exact specifications, are precisely constructed, cost-effective, and prioritize safety.
										</p>
									</div>
									<div className="rounded-lg bg-blueGray-700 p-6 text-center shadow-xl mb-4">
										<div className="absolute mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-lightBlue-400 shadow-lg shadow-lightBlue-500/40">
											<i class="fas fa-first-aid text-xl"></i>
										</div>
										<h1 className="text-darken mb-3 text-xl font-semibold lg:px-14 text-white">
											HSE <br /> (Health, Safety, and Environment)
										</h1>
										<p className="px-4 text-white font-light">
                      We are dedicated to implementing best practices in health, safety, and environmental management to ensure zero harm to our employees, the environment, and assets.
										</p>
									</div>
									<div className="rounded-lg bg-blueGray-700 p-6 text-center shadow-xl mb-4">
										<div className="absolute mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-lightBlue-400 shadow-lg shadow-lightBlue-500/40">
											<i class="fas fa-file-invoice-dollar text-xl"></i>
										</div>
										<h1 className="text-darken mb-3 text-xl font-semibold lg:px-14 text-white">
											Financial
										</h1>
										<p className="px-4 text-white font-light">
                      Providing exceptional financial services to the company and its customers by conducting business with integrity, accuracy, and sustainability, safeguarding assets, and establishing robust accounting policies and procedures.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-30 mt-20" id="services">
					<div className="container mx-auto px-4">
						<div className="flex justify-start items-center gap-5 my-6">
							<div className="text-blueGray-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-lightBlue-300">
								<i class="fas fa-wrench text-xl"></i>
							</div>
							<h3 className="text-4xl font-semibold ml-2">Our Services</h3>
						</div>
					</div>
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap items-start">
							<div className="w-full lg:w-4/12 px-4 flex justify-center">
								<img
									alt="..."
									src={require("assets/img/division.png")}
									className="max-w-full rounded-lg shadow-lg bg-cover"
								/>
							</div>
							<AccordionMenu />
						</div>
					</div>
				</section>

				<Products />

				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="flex justify-start items-center gap-5 mb-8">
							<div className="text-blueGray-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-lightBlue-300">
								<i class="fas fa-images text-xl"></i>
							</div>
							<h3 className="text-4xl font-semibold ml-2">Gallery</h3>
						</div>
						<Gallery />
            <Video />
					</div>
				</section>

				<section className="py-16 relative block bg-blueGray-800">
					<div
						className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
						style={{ transform: "translateZ(0)", marginBottom: "-1px" }}
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

					<div className="container mx-auto px-4">
						<div className="flex flex-wrap text-center justify-center">
							<div className="w-full lg:w-6/12 px-4">
								<h2 className="text-4xl font-semibold text-white">
									Our Customers
								</h2>
								<p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
									Has completed projects in several companies including large
									companies and various industries.
								</p>
							</div>
						</div>
					</div>
					<div className="container mx-auto px-4">
						<Customer />
					</div>
				</section>

				<section className="py-6 bg-blueGray-800 pb-48">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap text-center justify-center">
							<div className="w-full lg:w-6/12 px-4">
								<h2 className="text-4xl font-semibold text-white">
									Performance Index
								</h2>
								<p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
									Has completed projects in several companies including large
									companies and various industries.
								</p>
							</div>
							<div className="w-full flex flex-wrap lg:flex-row gap-4 justify-center">
								<div className="bg-white p-2 rounded-lg shadow-lg h-150-px w-200 flex justify-center items-center">
									<div>
										<div className="flex flex-row items-center gap-2 text-4xl md:text-2xl">
											<i class="fas fa-check-circle text-blueGray-800"></i>
											<h3 className="font-semibold">123+</h3>
										</div>
										<p className="font-regular mt-2">Total Projects</p>
									</div>
								</div>
								<div className="bg-white p-2 rounded-lg shadow-lg h-150-px w-200 flex justify-center items-center">
									<div>
										<div className="flex flex-row items-center gap-2 text-4xl md:text-2xl">
											<i class="fas fa-map-marker-alt text-blueGray-800"></i>
											<h3 className="font-semibold">30+</h3>
										</div>
										<p className="font-regular mt-2">Location Coverage</p>
									</div>
								</div>
								<div className="bg-white p-2 rounded-lg shadow-lg h-150-px w-200 flex justify-center items-center">
									<div>
										<div className="flex flex-row items-center gap-2 text-4xl md:text-2xl">
											<i class="fas fa-handshake text-blueGray-800"></i>
											<h3 className="font-semibold">43+ </h3>
										</div>
										<p className="font-regular mt-2">Total Clients</p>
									</div>
								</div>
								<div className="bg-white p-2 rounded-lg shadow-lg h-150-px w-200 flex justify-center items-center">
									<div>
										<div className="flex flex-row items-center gap-2 text-4xl md:text-2xl">
											<i class="fas fa-dolly-flatbed text-blueGray-800"></i>
											<h3 className="font-semibold">34+</h3>
										</div>
										<p className="font-regular mt-2">Products Sold</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="bg-blueGray-800 py-16" id="contact">
					<div className="container mx-auto px-4">
						<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
							<div class="mb-4">
								<div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
									<h2 class="font-heading mb-4 font-bold tracking-tight text-white dark:text-white text-4xl sm:text-5xl">
										Contact
									</h2>
									<p class="mx-auto mt-4 max-w-3xl text-xl text-white">
										We're Here to Help
									</p>
								</div>
							</div>
							<div class="flex items-stretch justify-center">
								<div class="grid md:grid-cols-2">
									<div class="h-full pr-6">
										<p class="mt-3 mb-12 text-lg text-white">
                      Thank you for visiting our website! We value your feedback and are here to assist you. Whether you have questions, need support, or wish to share your thoughts, please don’t hesitate to reach out.
										</p>
										<ul class="mb-6 md:mb-0">
											<li class="flex ">
												<div class="flex h-10 w-10 items-center justify-center rounded text-blueGray-50">
													<i class="fas fa-map-marker-alt text-white text-2xl"></i>
												</div>
												<div class="ml-4 mb-4">
													<h3 class="mb-2 text-lg font-medium leading-6 text-white">
														Our Address
													</h3>
													<p class="text-white">
														Perumahan Bumi Anugrah Sejahtera Blok B4 No.3, RT:
														09 RW: 013
													</p>
													<p class="text-white">
														Kelurahan Kebalen, Kecamatan Babelan, Kabupaten
														Bekasi, Jawa Barat
													</p>
												</div>
											</li>
											<li class="flex">
												<div class="flex h-10 w-10 items-center justify-center rounded  text-blueGray-50">
													<i class="fas fa-phone-alt text-2xl text-white"></i>
												</div>
												<div class="ml-4 mb-4">
													<h3 class="mb-2 text-lg font-medium leading-6 text-white">
														Contact
													</h3>
													<p class="text-white dark:text-slate-400">
														Mobile:{" "}
														<a href="https://wa.me/6282146279008" target="_blank">
															{" "}
															+62 821-4627-9008
														</a>
													</p>
													<p class="text-white dark:text-slate-400">
														Mail:
														<a href="mailto:Tanjungkaryajaya@yahoo.com" target="_blank">
                              {" "}
															Tanjungkaryajaya@yahoo.com
														</a>
													</p>
												</div>
											</li>
											<li class="flex">
												<div class="flex h-10 w-10 items-center justify-center rounded">
													<i class="fas fa-clock text-2xl text-white"></i>
												</div>
												<div class="ml-4 mb-4">
													<h3 class="mb-2 text-lg font-medium leading-6 text-white">
														Working hours
													</h3>
													<p class="text-white dark:text-slate-400">
														Monday - Friday: 08:00 - 17:00
													</p>
													<p class="text-white dark:text-slate-400">
														Saturday &amp; Sunday: 08:00 - 12:00
													</p>
												</div>
											</li>
										</ul>
									</div>
									<ContactForm />
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
