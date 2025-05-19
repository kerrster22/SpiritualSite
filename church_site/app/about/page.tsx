import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const leaders = [
  { name: "Sarah Johnson", role: "Spiritual Guide", image: "/placeholder.svg?height=400&width=400" },
  { name: "Michael Chen", role: "Meditation Instructor", image: "/placeholder.svg?height=400&width=400" },
]

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
        About Harmony Grove
      </h1>
      <div className="max-w-4xl mx-auto">
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-sage-dark">Our History</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Founded in 1985, Harmony Grove began as a small gathering of spiritual seekers in a local park. Over the
            years, we've grown into a vibrant community dedicated to fostering inner peace and universal understanding.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-sage-dark">Our Mission</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Harmony Grove is committed to providing a welcoming space for all individuals to explore their spiritual
            path, cultivate mindfulness, and contribute to the healing of our world.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-sage-dark">Our Core Values</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Compassion for all beings",
              "Respect for diverse spiritual paths",
              "Commitment to personal and collective growth",
              "Stewardship of the Earth",
              "Service to our community",
            ].map((value, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-lavender">•</span>
                <span className="text-lg">{value}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-sage-dark text-center">Our Spiritual Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {leaders.map((leader) => (
              <Card key={leader.name} className="overflow-hidden bg-cream">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                  <p className="text-sage-dark">{leader.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

