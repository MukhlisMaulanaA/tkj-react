import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/CustomNavbar.js";
import Footer from "components/Footers/Footer.js";
import ImageCarousel from "components/Carousel/Carousel.js";
import Products from "components/Products/Products.js";
import AccordionMenu from "components/Accordion/Accordion.js";
import Gallery from "components/Gallery/Gallery.js";

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
                    Building Credibility
									</h1>
									<p className="mt-4 text-lg text-blueGray-200">
										PT. Tanjung Karya Jaya, Mitra Anda dalam Mekanikal, Elektrikal, Plumbing, dan HVAC.
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
											Inovasi untuk Lingkungan Optimal. Solusi terdepan dalam
											aliran udara dan teknologi listrik pintar untuk kenyamanan
											dan efisiensi.
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
				</section>

				<section className="pb-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="flex justify-start items-center gap-5">
							<div className="text-blueGray-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-lightBlue-300">
								<i class="fas fa-users-cog text-xl"></i>
							</div>
							<h3 className="text-3xl font-semibold ml-2">Our Division</h3>
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
											Kami hanya menyediakan produk premium melalui proses
											penjaminan mutu, percepatan inovasi, teknologi modern dan
											sumber daya manusia yang unggul.
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
											Tim kreatif yang mengubah kebutuhan pelanggan kami menjadi
											produk dengan spesifikasi sempurna, konstruksi presisi,
											ekonomis, dan fungsi keselamatan.
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
											Komitmen untuk mencapai nol bahaya bagi karyawan,
											lingkungan dan properti untuk praktik kesehatan,
											keselamatan, dan lingkungan kerja yang efektif dan
											ditingkatkan di setiap aktivitas.
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
											Menjalankan aktivitas keuangan Perusahaan dengan
											integritas, akurasi dan keberlanjutan, menjaga aset
											keuangan, menetapkan kebijakan dan prosedur akuntansi
											serta memberikan layanan terbaik kepada perusahaan dan
											pelanggan.
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
							<h3 className="text-3xl font-semibold ml-2">Our Services</h3>
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
							<h3 className="text-3xl font-semibold ml-2">Gallery</h3>
						</div>
						<Gallery />
					</div>
				</section>

				<section className="py-16 relative block bg-blueGray-800">
					<div
						className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
								className="text-blueGray-800 fill-current"
								points="2560 0 2560 100 0 100">
              </polygon>
						</svg>
					</div>

					<div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
						<div className="flex flex-wrap text-center justify-center">
							<div className="w-full lg:w-6/12 px-4">
								<h2 className="text-4xl font-semibold text-white">
									Our Customers
								</h2>
								<p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Has completed projects in several companies including large companies and various industries.
								</p>
							</div>
						</div>
            
						{/* <div className="flex flex-wrap mt-12 justify-center">
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
						</div> */}
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
