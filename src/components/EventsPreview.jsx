function EventsPreview() {
  const items = [
    { title: 'Work Lunches', desc: 'Calm tables, quick service, honest food.' },
    { title: 'Group Dinners', desc: 'Call ahead for set menus and shared plates.' },
    { title: 'Buffet Nights', desc: 'Fridays — African‑fusion spread, lively and warm.' },
    { title: 'Hotel Conferences', desc: 'Seamless dining before or after sessions.' },
  ]

  return (
    <section id="events" className="relative py-20 bg-[linear-gradient(to_bottom,#0b0907,#0a0806)]">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(700px_400px_at_80%_50%,#f59e0b,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-amber-200/70">Events</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-amber-50">Easy to plan, easy to enjoy</h2>
            <p className="mt-4 text-amber-100/80 max-w-2xl">From quick work lunches to buffet nights and conference dining, we keep things smooth and welcoming.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full border border-amber-200/30 text-amber-50 hover:bg-white/5 px-5 py-3 text-sm font-semibold transition-colors">Plan with us</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-5">
              <h3 className="text-amber-50 font-medium">{it.title}</h3>
              <p className="text-amber-100/80 text-sm mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsPreview
