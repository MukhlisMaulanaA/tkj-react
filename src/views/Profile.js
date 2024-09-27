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
									<div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
										<div className="py-6 px-3 mt-32 sm:mt-0">
											<button
												className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
												type="button"
											>
												Connect
											</button>
										</div>
									</div>
									<div className="w-full lg:w-4/12 px-4 lg:order-1">
										<div className="flex justify-center py-4 lg:pt-4 pt-8">
											<div className="mr-4 p-3 text-center">
												<span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
													22
												</span>
												<span className="text-sm text-blueGray-400">
													Friends
												</span>
											</div>
											<div className="mr-4 p-3 text-center">
												<span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
													10
												</span>
												<span className="text-sm text-blueGray-400">
													Photos
												</span>
											</div>
											<div className="lg:mr-4 p-3 text-center">
												<span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
													89
												</span>
												<span className="text-sm text-blueGray-400">
													Comments
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="text-center mt-12">
									<h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
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
									<div className="mb-2 text-blueGray-600">
										<i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
										<a href="mailto:Tanjungkaryajaya@yahoo.com">
											Tanjungkaryajaya@yahoo.com
										</a>
									</div>
									<div className="mb-2 text-blueGray-600">
										<i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
										<a href="mailto:Office.tkj@yahoo.com">
											Office.tkj@yahoo.com
										</a>
									</div>
									<div className="mb-2 text-blueGray-600">
										<i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
										<a href="https://wa.me/628561539431">08561539431</a>
									</div>
								</div>
								<div className="mt-10 py-10 border-t border-blueGray-200 text-center">
									<div className="flex flex-wrap justify-center">
										<div className="w-full lg:w-9/12 px-4">
											<p className="mb-4 text-lg leading-relaxed text-blueGray-700">
												PT. Tanjung Karya Jaya (TKJ) adalah perusahaan yang
												bergerak di bidang jasa konstruksi, khususnya di bidang
												Mekanikal Elektrikal Plumbing dan HVAC. Kami merupakan
												perusahaan jasa swasta yang berdiri pada tahun 2019, PT.
												TKJ telah memiliki banyak pengalaman dan pelajaran
												berharga sehingga tangguh dan dipercaya.
											</p>
											<p className="mb-4 text-lg leading-relaxed text-blueGray-700">
												Kepercayaan yang diberikan oleh customer kami telah
												menghasilkan karya-karya konstruksi dan hasil yang
												memuaskan diberbagai sektor seperti gedung perkantoran,
												gedung komersial, dan pabrik di kawasan industri.
											</p>
											<p className="mb-4 text-lg leading-relaxed text-blueGray-700">
												Berkembangnya perusahaan kami tidak luput juga dari
												kerja sama dan baik dengan seluruh mitra kerja
												perusahaan mulai dari vendor material, sub-kontraktor
												dan pihak lainnya.
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
											src={require("assets/img/vision-mission.jpg")}
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
                          Menjadi perusahaan kontruksi terbaik di Indonesia yang  menekan pada perkembangan yang berkesinambungan, kepuasan  pelanggan dan kesejahteraan pada pemangku kepentingan  melalui penerapan tata kelola yang baik dan komitmen   terhadap tanggungjawab sosial.
												</p>
											</div>

											<div className="rounded-lg p-2 mb-4">
												<h1 className="text-darken mb-3 text-2xl font-semibold text-blueGray-800">
													Mission
												</h1>
                        <ul className="px-4 list-disc">
                          <li className="text-blueGray-800 text-lg font-regular">
                            Menyeragamkan pandangan antara pihak manajemen dan  karyawan dalam mempertahankan nilai perusahaan dan   mencapai tujuan bersama.
                          </li>
                          <li className="text-blueGray-800 text-lg font-regular">
                            Memberikan pelatihan dan melaksanakan proses recruitment  sumber daya manusia yang tepat untuk menghasilkan tenaga   kerja yang kompeten dibidangnya, berdedikasi dan  bersemangat tinggi sesuai budaya perusahaan guna   mencapai tujuan bersama.
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
