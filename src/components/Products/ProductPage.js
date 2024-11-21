import React, { useState } from "react";

import product1a from "assets/img/products/product-bjls.jpg";
import product1b from "assets/img/products/product-bjls2.jpg";

import product2a from "assets/img/products/square-duct.jpg";
import product2b from "assets/img/products/square-duct2.jpg";
import product2c from "assets/img/products/square-duct3.jpg";

import product3a from "assets/img/products/air-grillie.jpg";
import product3b from "assets/img/products/air-grillie2.jpg";
import product3c from "assets/img/products/air-grillie3.jpg";
import product3d from "assets/img/products/air-grillie4.jpg";
import product3e from "assets/img/products/air-grillie-fancape.jpg";
import product3f from "assets/img/products/air-grillie-jetdufsser-transformed.jpg";

import product4a from "assets/img/products/airdamper.jpg";
import product4b from "assets/img/products/airdamper2.jpg";
import product4c from "assets/img/products/airdamper-kotak.jpg";
import product4d from "assets/img/products/airdamper-tertutup.jpg";

import product5a from "assets/img/products/product-bjls-duct-insulation.jpg";
import product5b from "assets/img/products/product-bjls-duct-insulation2.jpg";
import product5c from "assets/img/products/product-bjls-duct-insulation3.jpg";
import product5d from "assets/img/products/product-bjls-duct-insulation4.jpg";

import product6a from "assets/img/products/product-equipment-hvac.jpg";
import product6b from "assets/img/products/product-equipment-hvac2.jpg";
import product6c from "assets/img/products/product-equipment-hvac3.jpg";

import product7a from "assets/img/products/product-pu-duct.jpg";
import product7b from "assets/img/products/product-pu-duct2.jpg";
import product7c from "assets/img/products/product-pu-duct3.jpg";

import product8a from "assets/img/products/product-spiral-duct.jpg";
import product8b from "assets/img/products/product-spiral-duct2.jpg";
import product8c from "assets/img/products/product-spiral-duct3.jpg";
import product8d from "assets/img/products/product-spiral-duct4.jpg";

import product9a from "assets/img/products/product-rpund-duct.jpg";
import product9b from "assets/img/products/product-rpund-duct2.jpg";
import product9c from "assets/img/products/product-rpund-duct3.jpg";
import product9d from "assets/img/products/product-rpund-duct4.jpg";
import product9e from "assets/img/products/product-rpund-duct5.jpg";
import product9f from "assets/img/products/product-rpund-duct6.jpg";


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
  {
    id: 4,
    name: "Air Damper",
    shortDescription: "Air Damper is a component in the ventilation system...",
    fullDescription:
      "Air Damper adalah komponen dalam sistem ventilasi yang mengontrol aliran udara melalui pintu atau pelat yang dapat dibuka dan ditutup. Fungsinya adalah mengatur suhu, kelambaban dan sirkulasi udara dalam bangunan atau ruangan. Damper dapat dioperasikan secara manual atau otomatis dengan sensor-sensor untuk pengaturan yang lebih efisien.",
    images: [product4a, product4b, product4c, product4d],
  },
  {
    id: 5,
    name: "BJLS Duct Insulation",
    shortDescription: "BJLS DUCT INSULATION is a high quality insulation solution...",
    fullDescription:
      "BJLS DUCT INSULATION is a high-quality insulation solution specifically designed for ducting systems in various HVAC applications. It offers superior thermal performance, helps prevent condensation, and significantly reduces energy loss. With effective sound dampening capabilities, BJLS DUCT INSULATION also contributes to system noise reduction. Made of fire-resistant materials and easy to install, this product is an ideal choice for commercial, industrial, and residential projects that emphasize energy efficiency and comfort.",
    images: [product5a, product5b, product5c, product5d],
  },
  {
    id: 6,
    name: "Equipment HVAC",
    shortDescription: "HVAC equipment is a series of equipment and systems that...",
    fullDescription:
      "HVAC (Heating, Ventilation, and Air Conditioning) equipment is a series of equipment and systems designed to regulate the temperature, humidity, and air quality inside a room or building. The system includes various components such as air conditioning units, heaters, ventilation, air filters, and automated controls that work together to create a comfortable and healthy indoor environment.",
    images: [product6a, product6b, product6c],
  },
  {
    id: 7,
    name: "PU Duct",
    shortDescription: "PU Duct is an innovative air duct system made of...",
    fullDescription:
      "PU Duct, or Polyurethane Duct, is an innovative air duct system made from high-quality polyurethane material. It offers a unique combination of light weight and exceptional structural strength, making it an ideal choice for a wide range of modern HVAC applications. PU Duct has excellent thermal insulation properties, helping to minimize energy loss and improve overall system efficiency.",
    images: [product7a, product7b, product7c],
  },
  {
    id: 8,
    name: "Spiral Duct",
    shortDescription: "Spiral Duct is an air duct system designed with the shape of...",
    fullDescription:
      "Spiral Duct is an air duct system designed with a spiral or helical shape, made of high quality metals such as galvanized steel or aluminum. Its unique construction provides superior structural strength with relatively light weight, allowing the use of thinner materials without compromising performance. This spiral design creates more efficient airflow and reduces turbulence, resulting in quieter and more energy-efficient operation compared to conventional air ducts.",
    images: [product8a, product8b, product8c, product8d],
  },
  {
    id: 9,
    name: "ROUND Duct",
    shortDescription: "ROUND Duct is a critical component in HVAC systems that is designed with...",
    fullDescription:
      "ROUND Duct, or round air duct, is an essential component in HVAC systems designed with a circular cross-section. This design offers optimal airflow efficiency, allowing for even air distribution with minimal resistance. RPUND Duct is generally made of galvanized steel, aluminum, or other rust-resistant materials, guaranteeing durability and long service life. Its aerodynamic shape not only reduces airflow noise but also facilitates maintenance and cleaning.",
    images: [product9a, product9b, product9c, product9d, product9e, product9f],
  },
];

const ProductPage = () => {
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

export default ProductPage;
