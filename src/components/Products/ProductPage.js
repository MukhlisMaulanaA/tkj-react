import React, { useState } from "react";
import { Link } from "react-router-dom";
import product1a from "assets/img/product-bjls.jpg";
import product1b from "assets/img/product-bjls2.jpg";
import product2a from "assets/img/square-duct.jpg";
import product2b from "assets/img/square-duct2.jpg";
import product3a from "assets/img/air-grillie.jpg";
import product3b from "assets/img/air-grillie2.jpg";

// Data produk dengan beberapa gambar
const products = [
  {
    id: 1,
    name: "BJLS DUCT",
    shortDescription: "Ducting BJLS atau baja lapis seng isolasi luar...",
    fullDescription:
      "Ducting BJLS atau baja lapis seng isolasi luar salah satunya menggunakan material glass wool. Jenis glass wool digunakan sebagai isolasi luar untuk menyelimuti ducting. Isolasi ini dapat disesuaikan dengan suhu udara yang akan disalurkan. Semakin kecil temperatur udara (dingin) maka, semakin tebal pula isolasi glass wool yang diperlukan. Umumnya, jenis glass wool yang kerap digunakan ialah ukuran 24kg/m3 dengan ketebalan 25mm.",
    images: [product1a, product1b], // Hanya satu gambar untuk produk ini
  },
  {
    id: 2,
    name: "SQUARE GALVANIZED IRON DUCT",
    shortDescription: "Square ducting digunakan untuk memindahkan material...",
    fullDescription:
      "Square ducting digunakan untuk memindahkan material atau limbah produksi, terutama debu halus, dari mesin produksi ke tahap produksi selanjutnya. Ducting ini dapat dibuat dari berbagai bahan seperti BJLS, Stainless Steel, Zincalume, Galvalum dan Poliuretan, dengan ketebalan yang bervariasi tergantung pada ukuran ducting dan kebutuhan penggunaan. Bala bantuan dipasang pada ducting persegi besar untuk kekuatan dan stabilitas.",
    images: [product2a, product2b], // Dua gambar untuk produk ini
  },
  {
    id: 3,
    name: "AIR GRILLIE",
    shortDescription: "Return Air Grille terhubung ke saluran ducting...",
    fullDescription:
      "Return Air Grille terhubung ke saluran ducting memungkinkan udara kembali ke sistem pendinginan atau pemanas. Bukaan menuju saluran dan ruang lain biasanya ditutup dengan grille. Sistem akan mendorong udara ke ruangan melalui saluran, meningkatkan tekanan udara di area yang dikondisikan. Saluran balik memungkinkan udara disirkulasikan ulang atau di buang ke luar, dengan filter untuk menjaga kebersihan udara.",
    images: [product3a, product3b], // Dua gambar untuk produk ini
  },
  {
    id: 4,
    name: "AIR DAMPER",
    shortDescription: "Air Damper adalah komponen dalam sistem ventilasi...",
    fullDescription:
      "Air Damper adalah komponen dalam sistem ventilasi yang mengontrol aliran udara melalui pintu atau pelat yang dapat dibuka dan ditutup. Fungsinya adalah mengatur suhu, kelambaban dan sirkulasi udara dalam bangunan atau ruangan. Damper dapat dioperasikan secara manual atau otomatis dengan sensor-sensor untuk pengaturan yang lebih efisien.",
    images: [product3a, product3b], // Dua gambar untuk produk ini
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
