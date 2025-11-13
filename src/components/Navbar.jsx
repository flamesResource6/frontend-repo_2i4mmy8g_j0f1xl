import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-b-2xl backdrop-blur-md bg-black/30 border border-white/10 px-4">
          <a href="/" className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500" />
            <span className="text-white font-semibold tracking-wide">Galaxy Gigs</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#events" className="text-white/80 hover:text-white transition">Events</a>
            <a href="#about" className="text-white/80 hover:text-white transition">About</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            <a href="/test" className="text-white/80 hover:text-white transition">Test</a>
            <a href="#tickets" className="inline-flex items-center rounded-full bg-white/90 hover:bg-white text-black font-medium px-4 py-2 transition">Get Tickets</a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white/80">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
