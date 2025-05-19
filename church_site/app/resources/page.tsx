import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Globe, FileText } from "lucide-react"

const resources = [
  {
    title: "Introduction to Spiritualism",
    description: "A comprehensive guide to the basics of Spiritualism and its principles.",
    icon: BookOpen,
    link: "#",
  },
  {
    title: "Meditation Techniques",
    description: "Learn various meditation techniques to enhance your spiritual practice.",
    icon: FileText,
    link: "#",
  },
  {
    title: "Spiritual Healing",
    description: "Understand the concepts and practices of spiritual healing.",
    icon: Globe,
    link: "#",
  },
]

export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gradient">Learning Resources</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-xl mb-12 text-center">
          Explore our curated collection of resources to deepen your understanding of Spiritualism and spiritual
          practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <resource.icon className="w-12 h-12 text-sage mb-4" />
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="mb-4">{resource.description}</p>
                <Link href={resource.link} className="text-deep-purple hover:underline">
                  Learn more
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

