import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const volunteerOpportunities = [
  { name: "Greeter", description: "Welcome visitors and help them feel at home in our community." },
  { name: "Meditation Assistant", description: "Help set up and guide participants during meditation sessions." },
  { name: "Community Outreach", description: "Spread our message of peace and harmony in the local community." },
]

export default function GetInvolved() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Get Involved</h1>
      <div className="max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="mb-4">
            There are many ways to get involved with Harmony Grove. Whether you're looking to deepen your spiritual
            practice, serve others, or connect with like-minded individuals, we have opportunities for you.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Volunteer Opportunities</h2>
          <div className="space-y-4">
            {volunteerOpportunities.map((opportunity) => (
              <div key={opportunity.name} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{opportunity.name}</h3>
                <p>{opportunity.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button>Apply to Volunteer</Button>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Spiritual Groups</h2>
          <p className="mb-4">
            Join one of our spiritual groups to deepen your practice and connect with others on the path:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Meditation Circle</li>
            <li>Book Study Group</li>
            <li>Healing Prayer Group</li>
          </ul>
          <div className="text-center">
            <Button>Join a Group</Button>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
          <p className="mb-4">
            Your generous contributions help us maintain our spiritual center and expand our programs. Every gift, no
            matter the size, makes a difference in our community.
          </p>
          <div className="text-center">
            <Button>Donate Now</Button>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Request a Healing Service or Mediumship</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" />
            </div>
            <div>
              <Label>Service Type</Label>
              <RadioGroup defaultValue="healing">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="healing" id="healing" />
                  <Label htmlFor="healing">Healing Service</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mediumship" id="mediumship" />
                  <Label htmlFor="mediumship">Mediumship</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="message">Additional Information</Label>
              <Textarea id="message" name="message" />
            </div>
            <Button type="submit">Submit Request</Button>
          </form>
        </section>
      </div>
    </div>
  )
}

