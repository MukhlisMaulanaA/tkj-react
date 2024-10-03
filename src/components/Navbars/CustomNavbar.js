import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

const NavLink = withRouter(({ history, location, to, children, className }) => {
  const handleClick = (event) => {
    event.preventDefault();
    
    if (location.pathname !== '/') {
      // Jika tidak di halaman utama, navigasi ke halaman utama
      history.push('/');
      // Setelah navigasi, scroll ke elemen dengan id 'home'
      setTimeout(() => {
        const element = document.getElementById('home');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Jika sudah di halaman utama, langsung scroll ke elemen dengan id 'home'
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link
      to={to}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
});

const NavLinkAbout = withRouter(({ history, location, to, children, className }) => {
  const handleClick = (event) => {
    event.preventDefault();
    
    if (location.pathname !== '/') {
      // Jika tidak di halaman utama, navigasi ke halaman utama
      history.push('/');
      // Setelah navigasi, scroll ke elemen dengan id 'about'
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Jika sudah di halaman utama, langsung scroll ke elemen dengan id 'about'
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link
      to={to}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
});

const NavLinkProduct = withRouter(({ history, location, to, children, className }) => {
  const handleClick = (event) => {
    event.preventDefault();
    
    if (location.pathname !== '/') {
      // Jika tidak di halaman utama, navigasi ke halaman utama
      history.push('/');
      // Setelah navigasi, scroll ke elemen dengan id 'products'
      setTimeout(() => {
        const element = document.getElementById('products');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Jika sudah di halaman utama, langsung scroll ke elemen dengan id 'products'
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link
      to={to}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
});

const NavLinkService = withRouter(({ history, location, to, children, className }) => {
  const handleClick = (event) => {
    event.preventDefault();
    
    if (location.pathname !== '/') {
      // Jika tidak di halaman utama, navigasi ke halaman utama
      history.push('/');
      // Setelah navigasi, scroll ke elemen dengan id 'products'
      setTimeout(() => {
        const element = document.getElementById('services');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Jika sudah di halaman utama, langsung scroll ke elemen dengan id 'products'
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link
      to={to}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
});

const NavLinkContact = withRouter(({ history, location, to, children, className }) => {
  const handleClick = (event) => {
    event.preventDefault();
    
    if (location.pathname !== '/') {
      // Jika tidak di halaman utama, navigasi ke halaman utama
      history.push('/');
      // Setelah navigasi, scroll ke elemen dengan id 'products'
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Jika sudah di halaman utama, langsung scroll ke elemen dengan id 'products'
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link
      to={to}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
});

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
      window.scrollTo(0, 0);
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
					<a href="/" className="flex items-center">
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
					<NavLink
						to="/"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200">
						Home
					</NavLink>
					<NavLinkAbout
						to="/profile"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						About
					</NavLinkAbout>
					<NavLinkService
						href="#services"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						Services
					</NavLinkService>
					<NavLinkProduct
						to="/products"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200">
						Products
					</NavLinkProduct>
					<NavLinkContact
						href="#contact"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						Contact
					</NavLinkContact>
				</div>

				{/* Burger Menu Button */}
				<button
					className={`md:hidden flex items-center p-2 focus:outline-none ${
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
					<NavLink
						to="/"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						Home
					</NavLink>
					<NavLinkAbout
						to="/profile"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						About
					</NavLinkAbout>
					<NavLinkService
						to="#services"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						Services
					</NavLinkService>
					<NavLinkProduct
						to="/products"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						Services
					</NavLinkProduct>
					<NavLinkContact
						to="#contact"
						className="m-2 font-semibold hover:text-lightBlue-500 transition-colors duration-200"
					>
						Contact
					</NavLinkContact>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
