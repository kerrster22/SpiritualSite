"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

type Event = {
  date: Date
  title: string
  description: string
}

const events: Event[] = [
  {
    date: new Date(2023, 5, 15),
    title: "Sunday Gathering",
    description: "Weekly spiritual service",
  },
  {
    date: new Date(2023, 5, 18),
    title: "Midweek Meditation",
    description: "Guided meditation session",
  },
  {
    date: new Date(2023, 5, 22),
    title: "Full Moon Ceremony",
    description: "Special ceremony for the full moon",
  },
  {
    date: new Date(2023, 5, 25),
    title: "Sunday Gathering",
    description: "Weekly spiritual service",
  },
  {
    date: new Date(2023, 5, 29),
    title: "Midweek Meditation",
    description: "Guided meditation session",
  },
]

export function UpcomingServices() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([])

  useEffect(() => {
    const now = new Date()
    const sortedEvents = events
      .filter((event) => event.date > now)
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(0, 3)
    setUpcomingEvents(sortedEvents)
  }, [])

  return (
    <Card className="bg-sage/20 backdrop-blur-sm">
      <CardContent className="p-4">
        <h4 className="text-xl font-semibold mb-2">Upcoming Services</h4>
        <ul className="space-y-2">
          {upcomingEvents.map((event, index) => (
            <li key={index} className="text-sm">
              <span className="font-medium">{event.title}</span>
              <br />
              {event.date.toLocaleDateString()} - {event.description}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

