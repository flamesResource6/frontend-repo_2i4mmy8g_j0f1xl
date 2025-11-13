function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold">Galaxy Gigs</h4>
            <p className="text-white/70 text-sm mt-2">A cosmic destination for live music, pub vibes, and neon nights.</p>
          </div>
          <div>
            <h4 className="font-semibold">Venue</h4>
            <p className="text-white/70 text-sm mt-2">42 Orbit Lane, Nebula District, City 3000</p>
          </div>
          <div>
            <h4 className="font-semibold">Hours</h4>
            <p className="text-white/70 text-sm mt-2">Thu-Sun · 6 PM - 2 AM</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Galaxy Gigs. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
