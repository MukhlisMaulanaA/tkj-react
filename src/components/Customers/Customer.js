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
  { id: 1, src: image1, type: 'landscape' },
  { id: 2, src: image2, type: 'landscape' },
  { id: 3, src: image3, type: 'landscape' },
  { id: 4, src: image4, type: 'landscape' },
  { id: 5, src: image5, type: 'landscape' },
  { id: 6, src: image6, type: 'landscape' },
  { id: 7, src: image7, type: 'landscape' },
  { id: 8, src: image8, type: 'landscape' },
  { id: 9, src: image9, type: 'landscape' },
  { id: 10, src: image10, type: 'landscape' },
  { id: 11, src: image11, type: 'landscape' },
  { id: 12, src: image12, type: 'landscape' },
];

const Customer = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className={`flex items-center justify-center p-4 bg-white rounded-lg shadow-md ${
            logo.type === 'landscape' ? 'aspect-landscape' : 'aspect-square'
          } hover:scale-125`}
        >
          <img
            src={logo.src}
            alt={`Logo ${logo.id}`}
            className="h-full w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Customer;
