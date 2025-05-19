import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gradient">Contact Us</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-xl mb-12 text-center">
          We're here to answer any questions you may have about our spiritual community. Reach out to us for more
          information or to join our services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <Input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <Input type="email" id="email" name="email" required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <Textarea id="message" name="message" required rows={5} />
                </div>
                <Button type="submit" className="w-full bg-sage hover:bg-sage/80 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-6">
              <h2 className="text-2xl font-semibold mb-4 text-deep-purple">Visit Us</h2>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Sheringham Spiritualist Church</p>
                  <p>Odd Fellows Hall</p>
                  <p>Sheringham, Norfolk</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-sage flex-shrink-0" />
                <p>
                  <a href="mailto:info@sheringhamspiritualistchurch.org" className="hover:underline">
                    info@sheringhamspiritualistchurch.org
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-deep-purple">Everyone is Welcome!</h2>
          <p className="text-xl">
            No matter your experience with Spiritualism, we invite you to join us for our services and community
            gatherings.
          </p>
        </div>
      </div>
    </div>
  )
}

