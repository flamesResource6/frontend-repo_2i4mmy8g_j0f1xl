import { Calendar, MapPin, Clock } from 'lucide-react'

function EventCard({ title, date, time, location, image, genre }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition duration-500" />
      </div>
      <div className="p-4 text-white">
        <div className="flex items-center justify-between">
          <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{genre}</span>
          <div className="flex items-center space-x-2 text-white/70 text-xs">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="mt-2 text-lg font-semibold leading-tight">{title}</h3>
        <div className="mt-2 flex items-center space-x-4 text-white/70 text-sm">
          <span className="inline-flex items-center space-x-1"><Clock size={14} /><span>{time}</span></span>
          <span className="inline-flex items-center space-x-1"><MapPin size={14} /><span>{location}</span></span>
        </div>
        <button className="mt-4 w-full rounded-xl bg-white text-black font-semibold py-2">Book</button>
      </div>
    </div>
  )
}

export default EventCard
