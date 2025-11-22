import React, { useState } from "react";

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
    shortDescription: "Ducting BJLS atau baja lapis seng isolasi luar...",
    fullDescription:
      "Ducting BJLS atau baja lapis seng isolasi luar salah satunya menggunakan material glass wool. Jenis glass wool digunakan sebagai isolasi luar untuk menyelimuti ducting. Isolasi ini dapat disesuaikan dengan suhu udara yang akan disalurkan. Semakin kecil temperatur udara (dingin) maka, semakin tebal pula isolasi glass wool yang diperlukan. Umumnya, jenis glass wool yang kerap digunakan ialah ukuran 24kg/m3 dengan ketebalan 25mm.",
    images: [product1a, product1b],
  },
  {
    id: 2,
    name: "SQUARE GALVANIZED IRON DUCT",
    shortDescription: "Square ducting digunakan untuk memindahkan material...",
    fullDescription:
      "Square ducting digunakan untuk memindahkan material atau limbah produksi, terutama debu halus, dari mesin produksi ke tahap produksi selanjutnya. Ducting ini dapat dibuat dari berbagai bahan seperti BJLS, Stainless Steel, Zincalume, Galvalum dan Poliuretan, dengan ketebalan yang bervariasi tergantung pada ukuran ducting dan kebutuhan penggunaan. Bala bantuan dipasang pada ducting persegi besar untuk kekuatan dan stabilitas.",
    images: [product2a, product2b],
  },
  {
    id: 3,
    name: "AIR GRILLIE",
    shortDescription: "Return Air Grille terhubung ke saluran ducting...",
    fullDescription:
      "Return Air Grille terhubung ke saluran ducting memungkinkan udara kembali ke sistem pendinginan atau pemanas. Bukaan menuju saluran dan ruang lain biasanya ditutup dengan grille. Sistem akan mendorong udara ke ruangan melalui saluran, meningkatkan tekanan udara di area yang dikondisikan. Saluran balik memungkinkan udara disirkulasikan ulang atau di buang ke luar, dengan filter untuk menjaga kebersihan udara.",
      images: [product3a, product3b, product3c, product3d, product3e, product3f],
    },
  {
    id: 4,
    name: "Air Damper",
    shortDescription: "Air Damper adalah komponen dalam sistem ventilasi...",
    fullDescription:
      "Air Damper adalah komponen dalam sistem ventilasi yang mengontrol aliran udara melalui pintu atau pelat yang dapat dibuka dan ditutup. Fungsinya adalah mengatur suhu, kelambaban dan sirkulasi udara dalam bangunan atau ruangan. Damper dapat dioperasikan secara manual atau otomatis dengan sensor-sensor untuk pengaturan yang lebih efisien.",
    images: [product4a, product4b, product4c, product4d],
  },
  {
    id: 5,
    name: "BJLS Duct Insulation",
    shortDescription: "BJLS DUCT INSULATION adalah solusi isolasi berkualitas tinggi...",
    fullDescription:
      "BJLS DUCT INSULATION adalah solusi isolasi berkualitas tinggi yang dirancang khusus untuk sistem saluran udara (ducting) dalam berbagai aplikasi HVAC. Produk ini menawarkan performa termal yang unggul, membantu mencegah kondensasi, dan mengurangi kehilangan energi secara signifikan. Dengan kemampuan meredam suara yang efektif, BJLS DUCT INSULATION juga berkontribusi pada pengurangan kebisingan sistem. Terbuat dari bahan yang tahan api dan mudah dipasang, produk ini menjadi pilihan ideal untuk proyek-proyek komersial, industri, maupun residensial yang mengedepankan efisiensi energi dan kenyamanan.",
    images: [product5a, product5b, product5c, product5d],
  },
  {
    id: 6,
    name: "Equipment HVAC",
    shortDescription: "Equipment HVAC merupakan serangkaian peralatan dan sistem yang...",
    fullDescription:
      "Equipment HVAC (Heating, Ventilation, and Air Conditioning) merupakan serangkaian peralatan dan sistem yang dirancang untuk mengatur suhu, kelembaban, dan kualitas udara di dalam ruangan atau bangunan. Sistem ini mencakup berbagai komponen seperti unit pengkondisi udara, pemanas, ventilasi, filter udara, dan kontrol otomatis yang bekerja bersama untuk menciptakan lingkungan dalam ruangan yang nyaman dan sehat.",
    images: [product6a, product6b, product6c],
  },
  {
    id: 7,
    name: "PU Duct",
    shortDescription: "PU Duct adalah sistem saluran udara inovatif yang terbuat dari bahan...",
    fullDescription:
      "PU Duct, atau Polyurethane Duct, adalah sistem saluran udara inovatif yang terbuat dari bahan polyurethane berkualitas tinggi. Produk ini menawarkan kombinasi unik antara bobot ringan dan kekuatan struktural yang luar biasa, menjadikannya pilihan ideal untuk berbagai aplikasi HVAC modern. PU Duct memiliki sifat isolasi termal yang sangat baik, membantu meminimalkan kehilangan energi dan meningkatkan efisiensi sistem secara keseluruhan.",
    images: [product7a, product7b, product7c],
  },
  {
    id: 8,
    name: "Spiral Duct",
    shortDescription: "Spiral Duct adalah siste msaluran udara yang dirancang dengan bentuk..",
    fullDescription:
      "Spiral Duct adalah sistem saluran udara yang dirancang dengan bentuk spiral atau heliks, terbuat dari logam berkualitas tinggi seperti baja galvanis atau aluminium. Konstruksi uniknya memberikan kekuatan struktural yang superior dengan bobot yang relatif ringan, memungkinkan penggunaan material yang lebih tipis tanpa mengorbankan kinerja. Desain spiral ini menciptakan aliran udara yang lebih efisien dan mengurangi turbulensi, menghasilkan operasi yang lebih senyap dan hemat energi dibandingkan dengan saluran udara konvensional.",
    images: [product8a, product8b, product8c, product8d],
  },
  {
    id: 9,
    name: "ROUND Duct",
    shortDescription: "RPUND Duct adalah komponen penting dalam sistem HVAC yang dirancang dengan...",
    fullDescription:
      "RPUND Duct, atau saluran udara berbentuk bulat, adalah komponen penting dalam sistem HVAC yang dirancang dengan penampang melintang berbentuk lingkaran. Desain ini menawarkan efisiensi aliran udara yang optimal, memungkinkan distribusi udara yang merata dengan resistensi minimal. RPUND Duct umumnya terbuat dari baja galvanis, aluminium, atau bahan tahan karat lainnya, menjamin ketahanan dan umur pakai yang panjang. Bentuknya yang aerodinamis tidak hanya mengurangi kebisingan aliran udara tetapi juga memudahkan perawatan dan pembersihan.",
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
