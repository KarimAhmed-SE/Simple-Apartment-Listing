"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// import Image1 from "../../assets/images/Image1.jpg";
// import Image3 from "../../assets/images/Image3.jpg";
// import Image4 from "../../assets/images/Image4.jpg";
// import Image6 from "../../assets/images/Image6.jpg";
// import Image7 from "../../assets/images/Image7.jpg";

const images = [
  { src: "../../assets/images/Image1.jpg", alt: "Picture of a house" },

  { src: "../../assets/images/Image3.jpg", alt: "Picture of a house" },

  { src: "../../assets/images/Image4.jpg", alt: "Picture of a house" },

  { src: "../../assets/images/Image6.jpg", alt: "Picture of a house" },

  { src: "../../assets/images/image7.jpg", alt: "Picture of a house" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full border-2 border-slate-700 rounded-md">
      <img
        src={images[currentImageIndex].src.src}
        alt={images[currentImageIndex].alt}
        className="top-0 left-0 w-full h-full object-cover rounded-md transition-opacity duration-1000 opacity-100"
      />
    </div>
  );
}
