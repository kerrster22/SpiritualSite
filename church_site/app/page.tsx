import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Sparkles } from "lucide-react"
import church from "../app/public/church.png"

export default function Home() {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src={church}
          alt="Sheringham Spiritualist Church Exterior"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Welcome to Sheringham Spiritualist Church</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            A welcoming community that explores spirituality and healing.
          </p>
          <Button asChild size="lg" className="bg-lavender hover:bg-lavender/80 text-deep-purple">
            <Link href="/services">View Our Services</Link>
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-deep-purple">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-sage mb-4" />
                <h3 className="text-xl font-semibold mb-2">When We Meet</h3>
                <p>Tuesdays at 7:00 PM (excluding August)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-sage mb-4" />
                <h3 className="text-xl font-semibold mb-2">Service Types</h3>
                <p>Alternating weekly between Healing and Divine Services</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Sparkles className="w-12 h-12 text-sage mb-4" />
                <h3 className="text-xl font-semibold mb-2">After Service</h3>
                <p>Stay for refreshments and a friendly chat</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-deep-purple">Our Community</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Image src="/community-1.jpg" alt="Community gathering" width={400} height={300} className="rounded-lg" />
            <Image src="/community-2.jpg" alt="Healing session" width={400} height={300} className="rounded-lg" />
            <Image src="/community-3.jpg" alt="Meditation group" width={400} height={300} className="rounded-lg" />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-deep-purple">Everyone is Welcome!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            No matter your experience with Spiritualism, we invite you to join us for our services and community
            gatherings.
          </p>
          <Button asChild size="lg" className="bg-sage hover:bg-sage/80 text-white">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}

