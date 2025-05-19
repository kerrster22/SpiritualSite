import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function History() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gradient">Our History</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-xl mb-12 text-center">
          Sheringham Spiritualist Church has a rich history spanning over six decades. We're proud of our journey and
          excited for our future.
        </p>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-deep-purple">The Founding</h2>
            <p>
              Our church was founded by Charlie Pussel and Joyce, a medium, in a flat on Hallway Road owned by Mrs.
              Earl. From these humble beginnings, we've grown into the vibrant community we are today.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-deep-purple">Our Journey</h2>
            <p>Over the years, our church has moved to several locations:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Good Companions Hall, Creamers Drift</li>
              <li>Quaker Meeting House, Creamers Street</li>
              <li>St. John's Hall</li>
              <li>Odd Fellows Hall (our current location)</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-deep-purple">Celebrating 60 Years</h2>
            <p>
              We're excited to announce that our church will be celebrating its 60th anniversary next year! This
              milestone is a testament to the strength of our community and the enduring nature of our spiritual
              practice.
            </p>
          </CardContent>
        </Card>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-deep-purple">Our Church Through the Years</h2>
          <Image
            src="/church-history.jpg"
            alt="Sheringham Spiritualist Church through the years"
            width={800}
            height={400}
            className="rounded-lg shadow-md mx-auto"
          />
          <p className="mt-4 text-gray-700">A collection of images showing our church's journey over the decades.</p>
        </div>
      </div>
    </div>
  )
}

