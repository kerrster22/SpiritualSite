import React from "react"

const events = [
  { date: "Jan 7", title: "Healing" },
  { date: "Jan 14", title: "Tania Fiorentini" },
  { date: "Jan 21", title: "Melinda Bassett" },
  { date: "Jan 28", title: "Healing" },
  { date: "Feb 4", title: "Terri Lake" },
  { date: "Feb 11", title: "Cancelled" },
  { date: "Feb 18", title: "Cancelled" },
  { date: "Feb 25", title: "Ashley George" },
  { date: "Mar 4", title: "Melanie Kerr" },
  { date: "Mar 11", title: "Healing" },
  { date: "Mar 18", title: "Poppy Bowling" },
  { date: "Mar 25", title: "Healing & A.G.M." },
  { date: "Apr 1", title: "Melinda Bassett" },
  { date: "Apr 8", title: "Healing" },
  { date: "Apr 15", title: "Gloria Brown" },
  { date: "Apr 22", title: "Healing" },
  { date: "Apr 29", title: "Paul Malachowski" },
  { date: "May 6", title: "Healing + Talk by Albert & Rea Sains" },
  { date: "May 13", title: "Melanie Kerr" },
  { date: "May 20", title: "Healing Talk on Reflexology" },
  { date: "May 27", title: "Terri Lake - Evening of Clairvoyance" },
  { date: "Jun 3", title: "Healing" },
  { date: "Jun 10", title: "Pauline Simpson" },
  { date: "Jun 17", title: "Healing" },
  { date: "Jun 24", title: "Ashley George" },
  { date: "Jul 1", title: "Healing" },
  { date: "Jul 8", title: "Melinda Bassett" },
  { date: "Jul 15", title: "Healing" },
  { date: "Jul 22", title: "Gaynor garforth" },
  { date: "Jul 29", title: "Healing" },
  { date: "Aug", title: "Closed" },
  { date: "Sep 2", title: "Gloria Brown" },
  { date: "Sep 9", title: "Healing" },
  { date: "Sep 16", title: "Melanie Grundy - Evening of Clairvoyance" },
  { date: "Sep 23", title: "Healing" },
  { date: "Sep 30", title: "Melanie Kerr - Harvest Service" },
  { date: "Oct 7", title: "Healing" },
  { date: "Oct 14", title: "Terri Lake - Evening of Clairvoyance" },
  { date: "Oct 21", title: "Healing" },
  { date: "Oct 28", title: "Poppy Bowling" },
  { date: "Nov 4", title: "Healing" },
  { date: "Nov 11", title: "Melinda Bassett - Service of Remembrance" },
  { date: "Nov 18", title: "Gwen Smith and Philip Waters" },
  { date: "Nov 25", title: "Healing" },
  { date: "Dec 2", title: "Paul Malachowski" },
  { date: "Dec 9", title: "Healing" },
  { date: "Dec 16", title: "Christmas Service with Ashley George" },
  { date: "Dec 23", title: "Candle Service and Healing" },
]

const CalendarPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Sheringham Spiritualist Church Calendar 2025</h1>
      <p className="text-center mb-8">All services start at 7:30pm</p>
      <ul className="space-y-4 max-w-2xl mx-auto">
        {events.map((event, index) => (
          <li key={index} className="flex justify-between border-b pb-2">
            <span className="font-medium">{event.date}</span>
            <span>{event.title}</span>
          </li>
        ))}
      </ul>
      <p className="text-center mt-12 text-sm">
        For further information please phone 01263 513067 or 01263 513727
      </p>
    </div>
  )
}

export default CalendarPage
