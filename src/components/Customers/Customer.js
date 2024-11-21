import React from 'react';

import image1 from "assets/img/client/daewoong-remake.png";
import image2 from "assets/img/client/district8-landscape.png";
import image3 from "assets/img/client/yptt.png";
import image4 from "assets/img/client/trimitra-jayapersada.png";
import image5 from "assets/img/client/pakuwon-group.png";
import image6 from "assets/img/client/rspi.png";
import image7 from "assets/img/client/koyorad.png";
import image8 from "assets/img/client/siloam-hospital.png";
import image9 from "assets/img/client/maison-dekorindo.png";
import image10 from "assets/img/client/sy-tech.png";
import image11 from "assets/img/client/dci-indo.png";
import image12 from "assets/img/client/haier.png";

const logos = [
  { id: 1, src: image1, type: 'landscape', alt: 'Daewoong Indonesia'},
  { id: 2, src: image2, type: 'landscape', alt: 'District8'},
  { id: 3, src: image3, type: 'landscape', alt: 'PT. YPTT Solutions Indonesia'},
  { id: 4, src: image4, type: 'landscape', alt: 'Trimitra Jaya Persada'},
  { id: 5, src: image5, type: 'landscape', alt: 'Pakuwon Group'},
  { id: 6, src: image6, type: 'landscape', alt: 'RSPI'},
  { id: 7, src: image7, type: 'landscape', alt: 'Koyorad'},
  { id: 8, src: image8, type: 'landscape', alt: 'Siloam Hospital'},
  { id: 9, src: image9, type: 'landscape', alt: 'Maison Dekorindo'},
  { id: 10, src: image10, type: 'landscape', alt: 'SY Technology'},
  { id: 11, src: image11, type: 'landscape', alt: 'DCI Indonesia'},
  { id: 12, src: image12, type: 'landscape', alt: 'HAIER'},
];

const Customer = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className={` hover:scale-125 flex items-center justify-center p-4 bg-white rounded-lg shadow-md ${
            logo.type === 'landscape' ? 'aspect-landscape' : 'aspect-square'
          }`}>
          <img
            src={logo.src}
            alt={`Logo ${logo.alt}`}
            className="h-full w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Customer;
