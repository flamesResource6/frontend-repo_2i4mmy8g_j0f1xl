import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventCard from './components/EventCard'
import Footer from './components/Footer'

function App() {
  const events = [
    {
      title: 'Neon Waves x Hyperloop',
      date: 'Fri, Nov 22',
      time: '9:00 PM',
      location: 'Main Hall',
      genre: 'Electronic',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Indie Skyline: Live',
      date: 'Sat, Nov 23',
      time: '8:30 PM',
      location: 'Sky Stage',
      genre: 'Indie Rock',
      image: 'https://images.unsplash.com/photo-1646065139132-0b8183681d32?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbmRpZSUyMFNreWxpbmUlM0ElMjBMaXZlfGVufDB8MHx8fDE3NjMwNTk0ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Cosmic Jazz Sessions',
      date: 'Sun, Nov 24',
      time: '7:00 PM',
      location: 'Lounge',
      genre: 'Nu Jazz',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Retro Synth Night',
      date: 'Thu, Nov 28',
      time: '9:30 PM',
      location: 'Main Hall',
      genre: 'Synthwave',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <section id="events" className="relative py-16 sm:py-24 bg-gradient-to-b from-black via-[#07070b] to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Upcoming Gigs</h2>
              <p className="mt-2 text-white/70 max-w-xl">Hand-picked nights of indie, electronic, and experimental sound. Limited-capacity sessions. Book early.</p>
            </div>
            <a href="#tickets" className="hidden sm:inline-flex items-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 px-4 py-2 text-sm">See all</a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((e, idx) => (
              <EventCard key={idx} {...e} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-black">A pub, but make it cosmic</h3>
            <p className="mt-4 text-white/70">
              Our venue blends craft brews with a futuristic soundscape. Think neon, holographic gradients, and a dance floor that glows with the beat. From intimate indie sets to late-night DJ voyages.
            </p>
            <ul className="mt-6 space-y-3 text-white/80 text-sm">
              <li>• Curated lineups every Thu–Sun</li>
              <li>• 14 taps: local and limited-release</li>
              <li>• Immersive light + projection shows</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-fuchsia-500/30 via-purple-500/20 to-cyan-400/30 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop"
                alt="Venue vibe"
                className="relative rounded-3xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black">Host a band or book a table</h3>
                <p className="mt-3 text-white/70">DM us on socials or drop your email—we’ll get back within 24 hours.</p>
                <div className="mt-6 flex gap-3">
                  <input type="email" placeholder="your@email.com" className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
                  <button className="rounded-xl bg-white text-black font-semibold px-5">Notify me</button>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-white/70">
                <p><span className="text-white">Venue:</span> 42 Orbit Lane, Nebula District</p>
                <p className="mt-2"><span className="text-white">Hours:</span> Thu–Sun · 6 PM – 2 AM</p>
                <p className="mt-2"><span className="text-white">Bookings:</span> booking@galaxygigs.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
