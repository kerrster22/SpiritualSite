import Image from "next/image"

import img1 from "../public/1.jpg";
import img2 from "../public/2.jpg";
import img3 from "../public/3.jpg";
import img4 from "../public/4.jpg";
import img5 from "../public/5.jpg";
import img6 from "../public/6.jpg";
import img7 from "../public/7.jpg";
import img8 from "../public/8.jpg";
import img9 from "../public/9.jpg";
import img10 from "../public/10.jpg";
import img11 from "../public/11.jpg";
import img12 from "../public/12.jpg";
import img13 from "../public/13.jpg";
import img14 from "../public/14.jpg";

const galleryImages = [
  { src: img1, alt: "Image 1" },
  { src: img2, alt: "Image 2" },
  { src: img3, alt: "Image 3" },
  { src: img4, alt: "Image 4" },
  { src: img5, alt: "Image 5" },
  { src: img6, alt: "Image 6" },
  { src: img7, alt: "Image 7" },
  { src: img8, alt: "Image 8" },
  { src: img9, alt: "Image 9" },
  { src: img10, alt: "Image 10"},
  { src: img11, alt: "Image 11"},
  { src: img12, alt: "Image 12"},
  { src: img13, alt: "Image 13"},
  { src: img14, alt: "Image 14"}
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gradient">Our Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

