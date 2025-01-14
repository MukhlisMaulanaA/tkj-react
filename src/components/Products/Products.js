import React, { useState } from "react";
import { Link } from "react-router-dom";

import product1a from "assets/img/products/product-bjls.jpg";
import product1b from "assets/img/products/product-bjls2.jpg";

import product2a from "assets/img/products/square-duct.jpg";
import product2b from "assets/img/products/square-duct2.jpg";

import product3a from "assets/img/products/air-grillie.jpg";
import product3b from "assets/img/products/air-grillie2.jpg";
import product3c from "assets/img/products/air-grillie3.jpg";
import product3d from "assets/img/products/air-grillie4.jpg";
import product3e from "assets/img/products/air-grillie-fancape.jpg";
import product3f from "assets/img/products/air-grillie-jetdufsser-transformed.jpg";

// Data produk dengan beberapa gambar
const products = [
  {
    id: 1,
    name: "BJLS DUCT",
    shortDescription: "Ducting BJLS or zinc-coated steel outer insulation...",
    fullDescription:
      "Ducting BJLS or zinc coated steel outer insulation one of which uses glass wool material. This type of glass wool is used as an outer insulation to cover the ducting. This insulation can be adjusted to the temperature of the air to be channeled. The smaller the air temperature (cold), the thicker the glass wool insulation required. Generally, the type of glass wool that is often used is 24kg/m3 with a thickness of 25mm.",
    images: [product1a, product1b],
  },
  {
    id: 2,
    name: "SQUARE GALVANIZED IRON DUCT",
    shortDescription: "Square ducting is used to move materials...",
    fullDescription:
      "Square ducting is used to move materials or production waste, especially fine dust, from production machines to the next stage of production. This ducting can be made of various materials such as BJLS, Stainless Steel, Zincalume, Galvalume and Polyurethane, with varying thicknesses depending on the ducting size and usage requirements. Reinforcements are installed on large square ducting for strength and stability.",
    images: [product2a, product2b],
  },
  {
    id: 3,
    name: "AIR GRILLIE",
    shortDescription: "The Return Air Grille is connected to the ducting...",
    fullDescription:
      "Return Air Grille connected to ducting allows air to return to the cooling or heating system. Openings to ducts and other spaces are usually covered with a grille. The system will push air into the room through the duct, increasing the air pressure in the conditioned area. Return ducts allow air to be recirculated or exhausted to the outside, with filters to keep the air clean.",
      images: [product3a, product3b, product3c, product3d, product3e, product3f],
    },
];

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Fungsi untuk membuka modal dan mengatur gambar awal
  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImage(0); // Reset ke gambar pertama
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setSelectedProduct(null);
    setCurrentImage(0);
  };

  // Fungsi untuk berpindah ke gambar berikutnya
  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === selectedProduct.images.length - 1 ? 0 : prevImage + 1
    );
  };

  // Fungsi untuk berpindah ke gambar sebelumnya
  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? selectedProduct.images.length - 1 : prevImage - 1
    );
  };

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
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={product.images[0]} // Tampilkan gambar pertama di card
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h5 className="text-xl font-bold mb-2">{product.name}</h5>
                <p className="text-blueGray-700 text-base">
                  {product.shortDescription}
                </p>
                <button
                  onClick={() => openModal(product)}
                  className="text-lightBlue-500 font-semibold mt-4"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <Link
            to="/products"
            className="bg-blueGray-800 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 my-4 ease-linear transition-all duration-200 text-center"
            type="button"
          >
            Explore Our Products
          </Link>
        </div>
      </div>

      {/* Modal untuk menampilkan gambar carousel */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black-opacity flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto relative">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>

            {/* Carousel untuk gambar produk */}
            <div className="relative">
              <img
                src={selectedProduct.images[currentImage]}
                alt={`Product Image ${currentImage + 1}`}
                className="w-full h-64 object-cover mb-4"
              />
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
              >
                ❮
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
              >
                ❯
              </button>
            </div>

            {/* Deskripsi lengkap produk */}
            <p className="text-blueGray-700 mb-4">
              {selectedProduct.fullDescription}
            </p>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
