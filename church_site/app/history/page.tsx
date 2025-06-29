import { Card, CardContent } from "@/components/ui/card"

export default function History() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gradient">Our History</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-xl mb-12 text-center">
          Sheringham Spiritualist Church has a rich history spanning six decades. We&apos;re proud of our journey and
          excited for our future.
        </p>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-deep-purple">The Founding</h2>
            <p>
              Our church was founded by Charlie Postle and Joyce, a medium, in a flat on Holway Road owned by Mrs.
              Earl. From these humble beginnings, we&apos;ve grown into the vibrant community we are today.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-deep-purple">Our Journey</h2>
            <p>Over the years, our church has moved to several locations:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Good Companions Hall, Creamer Drift</li>
              <li>Quaker Meeting House, Creamer Street</li>
              <li>St. John&apos;s Hall</li>
              <li>Odd Fellows Hall life boat plain</li>
              <li>Later Life Care, Cromer Rd (Current location)</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-deep-purple">Celebrating 60 Years</h2>
            <p>
              We&apos;re excited to announce that our church will be celebrating its 60th anniversary next year! This
              milestone is a testament to the strength of our community and the enduring nature of our spiritual
              practice.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

