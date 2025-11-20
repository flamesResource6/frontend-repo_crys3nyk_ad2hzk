import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#story', label: 'Our Story' },
    { href: '#menu', label: 'Menu' },
    { href: '#hotel', label: 'Hotel' },
    { href: '#events', label: 'Events' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-[rgba(26,20,14,0.6)] shadow-lg' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-amber-500 to-rose-400 shadow-md ring-1 ring-white/20" />
            <div className="text-left">
              <p className="text-sm tracking-wide text-amber-100">The Bay Leaf</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-amber-200/80">Serendib Suites</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-amber-100/80 hover:text-amber-50 transition-colors text-sm">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="rounded-full bg-amber-500/90 hover:bg-amber-500 text-brown-950 px-4 py-2 text-sm font-semibold shadow-sm transition-colors">
              +265 993 400 400
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-amber-50 hover:bg-white/10">
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="grid gap-2 pt-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-amber-100/90 hover:text-amber-50 transition-colors py-2">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-amber-500/90 hover:bg-amber-500 text-brown-950 px-4 py-2 text-sm font-semibold shadow-sm transition-colors w-fit">
                Call +265 993 400 400
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
