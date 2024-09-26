import React from "react";

// components

import Navbar from "components/Navbars/CustomNavbar.js";
import Footer from "components/Footers/Footer.js";
import ImageCarousel from "components/Carousel/Carousel.js";

export default function Landing() {
	return (
		<>
			<Navbar />
			<main>
				<div
					className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
					id="home"
				>
					<ImageCarousel />
					<div className="container relative mx-auto">
						<div className="items-center flex flex-wrap">
							<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
								<div className="">
									<h1 className="text-white font-semibold text-5xl">
										PT. Tanjung Karya Jaya
									</h1>
									<p className="mt-4 text-lg text-blueGray-200">
										Konstruksi Berkualitas, Masa Depan Terpercaya: PT. Tanjung
										Karya Jaya, Mitra Anda dalam Mekanikal, Elektrikal,
										Plumbing, dan HVAC.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
						style={{ transform: "translateZ(0)", marginBottom: "-1px" }}>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0">
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
											Kami selalu berada di garis depan perubahan, menciptakan
											solusi baru yang mengubah tantangan menjadi peluang.
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
											Dengan keahlian dan dedikasi, kami menghadirkan solusi
											terbaik dalam setiap tantangan, memastikan hasil yang
											optimal bagi setiap proyek.
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
											Kami memaksimalkan hasil dengan mengelola sumber daya
											secara cerdas, menghadirkan nilai tertinggi bagi klien
											tanpa kompromi pada kualitas.
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
								<h3 className="text-3xl mb-2 font-semibold leading-normal">
									About Us
								</h3>
								<p className="text-lg font-medium leading-relaxed mt-4 mb-4 text-blueGray-600">
									PT. Tanjung Karya Jaya (TKJ) adalah perusahaan yang bergerak
									di bidang jasa konstruksi, khususnya di bidang Mekanikal
									Elektrikal Plumbing dan HVAC. Kami merupakan perusahaan jasa
									swasta yang berdiri pada tahun 2019, PT. TKJ telah memiliki
									banyak pengalaman dan pelajaran berharga sehingga tangguh dan
									dipercaya.
								</p>
								<p className="text-lg font-medium leading-relaxed mt-0 mb-4 text-blueGray-600">
									Kepercayaan yang diberikan oleh customer kami telah
									menghasilkan karya-karya konstruksi dan hasil yang memuaskan
									diberbagai sektor seperti gedung perkantoran, gedung
									komersial, dan pabrik di kawasan industri.
								</p>
								<p className="text-lg font-medium leading-relaxed mt-0 mb-4 text-blueGray-600">
									Berkembangnya perusahaan kami tidak luput juga dari kerja sama
									dan baik dengan seluruh mitra kerja perusahaan mulai dari
									vendor material, sub-kontraktor dan pihak lainnya.
								</p>
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
											Inovasi untuk Lingkungan Optimal. Solusi terdepan dalam
											aliran udara dan teknologi listrik pintar untuk kenyamanan
											dan efisiensi.
										</p>
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mt-4 ease-linear transition-all duration-200"
                      type="button">
                      Read More..
                    </button>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="relative py-20">
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
								className="text-white fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>

					<div className="container mx-auto px-4">
						<div className="items-center flex flex-wrap">
							<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
								<img
									alt="..."
									className="max-w-full rounded-lg shadow-lg"
									src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
								/>
							</div>
							<div className="w-full md:w-5/12 ml-auto mr-auto px-4">
								<div className="md:pr-12">
									<div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
										<i className="fas fa-rocket text-xl"></i>
									</div>
									<h3 className="text-3xl font-semibold">A growing company</h3>
									<p className="mt-4 text-lg leading-relaxed text-blueGray-500">
										The extension comes with three pre-built pages to help you
										get started faster. You can change the text and images and
										you're good to go.
									</p>
									<ul className="list-none mt-6">
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
														<i className="fas fa-fingerprint"></i>
													</span>
												</div>
												<div>
													<h4 className="text-blueGray-500">
														Carefully crafted components
													</h4>
												</div>
											</div>
										</li>
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
														<i className="fab fa-html5"></i>
													</span>
												</div>
												<div>
													<h4 className="text-blueGray-500">
														Amazing page examples
													</h4>
												</div>
											</div>
										</li>
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
														<i className="far fa-paper-plane"></i>
													</span>
												</div>
												<div>
													<h4 className="text-blueGray-500">
														Dynamic components
													</h4>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="pt-20 pb-48">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap justify-center text-center mb-24">
							<div className="w-full lg:w-6/12 px-4">
								<h2 className="text-4xl font-semibold">Here are our heroes</h2>
								<p className="text-lg leading-relaxed m-4 text-blueGray-500">
									According to the National Oceanic and Atmospheric
									Administration, Ted, Scambos, NSIDClead scentist, puts the
									potentially record maximum.
								</p>
							</div>
						</div>
						<div className="flex flex-wrap">
							<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
								<div className="px-6">
									<img
										alt="..."
										src={require("assets/img/team-1-800x800.jpg").default}
										className="shadow-lg rounded-full mx-auto max-w-120-px"
									/>
									<div className="pt-6 text-center">
										<h5 className="text-xl font-bold">Ryan Tompson</h5>
										<p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
											Web Developer
										</p>
										<div className="mt-6">
											<button
												className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<i className="fab fa-twitter"></i>
											</button>
											<button
												className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<i className="fab fa-facebook-f"></i>
											</button>
											<button
												className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<i className="fab fa-dribbble"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
								<div className="px-6">
									<img
										alt="..."
										src={require("assets/img/team-2-800x800.jpg").default}
										className="shadow-lg rounded-full mx-auto max-w-120-px"
									/>
									<div className="pt-6 text-center">
										<h5 className="text-xl font-bold">Romina Hadid</h5>
										<p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
											Marketing Specialist
										</p>
										<div className="mt-6">
											<button
												className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<i className="fab fa-google"></i>
											</button>
											<button
												className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<i className="fab fa-facebook-f"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
								<div className="px-6">
									<img
										alt="..."
										src={require("assets/img/team-3-800x800.jpg").default}
										className="shadow-lg rounded-full mx-auto max-w-120-px"
									/>
									<div className="pt-6 text-center">
										<h5 className="text-xl font-bold">Alexa Smith</h5>
										<p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
											UI/UX Designer
										</p>
										<div className="mt-6">
											<button
												className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<i className="fab fa-google"></i>
											</button>
											<button
												className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<i className="fab fa-twitter"></i>
											</button>
											<button
												className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<i className="fab fa-instagram"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
								<div className="px-6">
									<img
										alt="..."
										src={require("assets/img/team-4-470x470.png").default}
										className="shadow-lg rounded-full mx-auto max-w-120-px"
									/>
									<div className="pt-6 text-center">
										<h5 className="text-xl font-bold">Jenna Kardi</h5>
										<p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
											Founder and CEO
										</p>
										<div className="mt-6">
											<button
												className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<i className="fab fa-dribbble"></i>
											</button>
											<button
												className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<i className="fab fa-google"></i>
											</button>
											<button
												className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<i className="fab fa-twitter"></i>
											</button>
											<button
												className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<i className="fab fa-instagram"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="pb-20 relative block bg-blueGray-800">
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

					<div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
						<div className="flex flex-wrap text-center justify-center">
							<div className="w-full lg:w-6/12 px-4">
								<h2 className="text-4xl font-semibold text-white">
									Build something
								</h2>
								<p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
									Put the potentially record low maximum sea ice extent tihs
									year down to low ice. According to the National Oceanic and
									Atmospheric Administration, Ted, Scambos.
								</p>
							</div>
						</div>
						<div className="flex flex-wrap mt-12 justify-center">
							<div className="w-full lg:w-3/12 px-4 text-center">
								<div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
									<i className="fas fa-medal text-xl"></i>
								</div>
								<h6 className="text-xl mt-5 font-semibold text-white">
									Excelent Services
								</h6>
								<p className="mt-2 mb-4 text-blueGray-400">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
							<div className="w-full lg:w-3/12 px-4 text-center">
								<div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
									<i className="fas fa-poll text-xl"></i>
								</div>
								<h5 className="text-xl mt-5 font-semibold text-white">
									Grow your market
								</h5>
								<p className="mt-2 mb-4 text-blueGray-400">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
							<div className="w-full lg:w-3/12 px-4 text-center">
								<div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
									<i className="fas fa-lightbulb text-xl"></i>
								</div>
								<h5 className="text-xl mt-5 font-semibold text-white">
									Launch time
								</h5>
								<p className="mt-2 mb-4 text-blueGray-400">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="relative block py-24 lg:pt-0 bg-blueGray-800">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
							<div className="w-full lg:w-6/12 px-4">
								<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
									<div className="flex-auto p-5 lg:p-10">
										<h4 className="text-2xl font-semibold">
											Want to work with us?
										</h4>
										<p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
											Complete this form and we will get back to you in 24
											hours.
										</p>
										<div className="relative w-full mb-3 mt-8">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="full-name"
											>
												Full Name
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												placeholder="Full Name"
											/>
										</div>

										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="email"
											>
												Email
											</label>
											<input
												type="email"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												placeholder="Email"
											/>
										</div>

										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="message"
											>
												Message
											</label>
											<textarea
												rows="4"
												cols="80"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
												placeholder="Type a message..."
											/>
										</div>
										<div className="text-center mt-6">
											<button
												className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
												type="button"
											>
												Send Message
											</button>
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
