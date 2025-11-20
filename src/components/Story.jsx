function Story() {
  return (
    <section id="story" className="relative py-20 bg-[linear-gradient(to_bottom,#18120c,#120e0a)]">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(600px_200px_at_10%_20%,#ca8a04,transparent),radial-gradient(800px_400px_at_90%_80%,#f59e0b,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1600&auto=format&fit=crop" alt="Lodge-like hotel building" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-7 text-amber-50">
            <p className="uppercase tracking-[0.25em] text-xs text-amber-200/70">Our Story</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">A calm, private corner inside Serendib Suites</h2>
            <p className="mt-5 text-amber-100/80 leading-relaxed">
              The Bay Leaf sits among trees in Namiwawa, Blantyre. Gentle lighting, soft wood textures, and a relaxed atmosphere welcome hotel guests and walk-ins alike. It’s a place for quiet meals, business lunches, and unhurried evenings.
            </p>
            <p className="mt-4 text-amber-100/80 leading-relaxed">
              A small path links us to a coffee lounge and bar. Nearby, a spa and a garden-like courtyard add a retreat-like energy. The conference hall hosts events for up to a hundred guests — many dine with us before or after meetings.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-white/5 text-amber-100/80 text-xs ring-1 ring-white/10">Coffee lounge</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-amber-100/80 text-xs ring-1 ring-white/10">Bar nearby</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-amber-100/80 text-xs ring-1 ring-white/10">Spa & garden</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-amber-100/80 text-xs ring-1 ring-white/10">Conference hall</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
