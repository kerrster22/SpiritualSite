import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Sparkles } from "lucide-react"
import Image from "next/image"
import img1 from "../public/6.jpg"
import img2 from "../public/7.jpg"
import img3 from "../public/12.jpg"

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gradient">Our Services</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-xl mb-12 text-center">
          Join us for our regular spiritual services and healing sessions. All are welcome, regardless of background or
          belief.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-sage mb-4" />
              <h3 className="text-xl font-semibold mb-2">When We Meet</h3>
              <p>Tuesdays at 7:30 PM (excluding August)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-sage mb-4" />
              <h3 className="text-xl font-semibold mb-2">Service Types</h3>
              <p>Alternating weekly between Healing and Divine Services</p>
            </CardContent>
          </Card>
        </div>
        <Card className="mb-16">
          <CardContent className="p-6">
            <Sparkles className="w-12 h-12 text-sage mb-4" />
            <h3 className="text-xl font-semibold mb-2">Healing Services</h3>
            <p>
              Our healing services are led by qualified Norfolk Healers, many of whom are members of the Norfolk Healers
              Association. The Healing Leader of our church is the Chairperson of the Norfolk Healers Association.
            </p>
          </CardContent>
        </Card>
        <div className="text-center">
          <p className="text-xl mb-8">
            After each service, we invite you to stay for refreshments and a friendly chat. It&apos;s a great opportunity to
            connect with our community and share experiences.
          </p>
        </div>
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-deep-purple">Service Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <Image
                src={img2}
                alt="Divine Service"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="mt-2 text-center">Divine Service</p>
            </div>
            <div>
              <Image
                src={img1}
                alt="Healing Service"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="mt-2 text-center">Healing Service</p>
            </div>
            <div>
              <Image
                src={img3}
                alt="Meditation Session"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="mt-2 text-center">Meditation Session</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

