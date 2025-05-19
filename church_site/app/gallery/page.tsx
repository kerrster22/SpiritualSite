import Image from "next/image"

const galleryImages = [
  { src: "/service-1.jpg", alt: "Divine Service", caption: "Divine Service" },
  { src: "/service-2.jpg", alt: "Healing Service", caption: "Healing Service" },
  { src: "/meditation.jpg", alt: "Meditation Session", caption: "Meditation Session" },
  { src: "/community-event.jpg", alt: "Community Event", caption: "Community Event" },
  { src: "/church-interior.jpg", alt: "Church Interior", caption: "Our Church Interior" },
  { src: "/healing-room.jpg", alt: "Healing Room", caption: "Healing Room" },
]

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
            <p className="mt-2 text-center text-gray-700">{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

