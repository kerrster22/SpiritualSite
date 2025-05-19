"use client"

import { useState } from "react"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
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
]

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const selectedDateEvents = events.filter((event) => event.date.toDateString() === selectedDate?.toDateString())

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <CalendarComponent
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="rounded-md border shadow"
      />
      <Card className="flex-grow">
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-2">Events on {selectedDate?.toLocaleDateString()}</h3>
          {selectedDateEvents.length > 0 ? (
            <ul className="space-y-2">
              {selectedDateEvents.map((event, index) => (
                <li key={index}>
                  <h4 className="font-medium">{event.title}</h4>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No events scheduled for this date.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

