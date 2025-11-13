import Spline from '@splinetool/react-spline'
import { ChevronRight, Music, Ticket, MapPin } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs backdrop-blur">
              <Music size={14} className="text-fuchsia-300" />
              <span className="text-white/90">Trippy galaxy gigs, every weekend</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
              Where live music meets a cosmic pub vibe
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Dive into a neon-futuristic rollercoaster of sound. Discover upcoming bands, craft brews, and immersive nights that bend reality.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#tickets" className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-6 py-3 shadow-lg">
                Get Tickets
                <ChevronRight size={18} className="ml-2" />
              </a>
              <a href="#events" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 border border-white/20">
                Explore Events
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2 text-white/80"><Ticket size={16} className="text-cyan-300" /><span>No booking fees</span></div>
              <div className="flex items-center space-x-2 text-white/80"><MapPin size={16} className="text-purple-300" /><span>Central venue</span></div>
              <div className="flex items-center space-x-2 text-white/80"><Music size={16} className="text-fuchsia-300" /><span>Indie + Electronic</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
