import React, { useState, useEffect } from "react";

const Navbar = () => {
	const [navbarSolid, setNavbarSolid] = useState(false);
	const [colorTxt, setColorTxt] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false); // State untuk burger menu

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setNavbarSolid(true); // Jika scroll lebih dari 50px, ubah navbar jadi solid
				setColorTxt(true);
			} else {
				setNavbarSolid(false); // Jika di atas 50px, tetap transparan
				setColorTxt(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup listener on unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
				navbarSolid ? "bg-white shadow-lg" : "bg-transparent"
			}`}
		>
			<div
				className={`container mx-auto flex justify-between items-center py-4 px-6 ${
					colorTxt ? "text-blueGray-800" : "text-white"
				}`}
			>
				{/* Logo */}
				<div className="text-2xl font-bold">
					<a href="#home" className="flex items-center">
						<img
							src={require("assets/img/logo-tkj.png")}
							height={55}
							width={55}
							alt="logo-tkj"
						/>
						{/* Teks hanya muncul di layar besar */}
						<span className="hidden md:block ml-2">PT. Tanjung Karya Jaya</span>
					</a>
				</div>

				{/* Menu Items for desktop */}
				<div
					className={`hidden md:flex justify-between text-lg ${
						colorTxt ? "text-blueGray-800" : "text-white"
					}`}
				>
					<a
						href="#home"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						Home
					</a>
					<a
						href="#about"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						About
					</a>
					<a
						href="#services"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						Services
					</a>
					<a
						href="#contact"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						Contact
					</a>
				</div>

				{/* Burger Menu Button */}
				<button
					className={`md:hidden flex items-center p-2 ${
						colorTxt ? "text-blueGray-800" : "text-white"
					}`}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<i class="fas fa-bars"></i>
				</button>
			</div>

			{/* Dropdown menu for mobile */}
			{menuOpen && (
				<div className="md:hidden flex flex-col items-center bg-white text-blueGray-800 shadow-lg">
					<a
						href="#home"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						Home
					</a>
					<a
						href="#about"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						About
					</a>
					<a
						href="#services"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						Services
					</a>
					<a
						href="#contact"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						Contact
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;