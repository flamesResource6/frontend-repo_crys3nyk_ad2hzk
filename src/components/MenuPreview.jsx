function MenuPreview() {
  const highlights = [
    { title: 'French Onion Soup', desc: 'Deep, sweet onions, rich broth, golden cheese cap.' },
    { title: 'Wood‑Fired Pizzas', desc: 'Crackly crusts, smoky edges, seasonal toppings.' },
    { title: 'Stir‑Fried Bowls', desc: 'Quick‑seared veggies, fragrant sauces, lively textures.' },
    { title: 'Friday African‑Fusion Buffet', desc: 'A tour across the continent — vibrant, generous, festive.' },
  ]

  const lanes = [
    { name: 'African', color: 'from-amber-600/40' },
    { name: 'Asian', color: 'from-rose-600/40' },
    { name: 'Indian', color: 'from-orange-600/40' },
    { name: 'Continental', color: 'from-yellow-600/40' },
    { name: 'Grill', color: 'from-emerald-600/40' },
  ]

  return (
    <section id="menu" className="relative py-20 bg-[linear-gradient(to_bottom,#120e0a,#0e0b09)]">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(700px_300px_at_20%_10%,#f59e0b,transparent),radial-gradient(600px_400px_at_90%_90%,#b45309,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-amber-200/70">Menu</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-amber-50">Fresh ingredients. Warm flavors.</h2>
            <p className="mt-4 text-amber-100/80 max-w-2xl">African dishes, Asian meals, Indian favorites, continental plates, and grill items — guided by fresh produce and calm, confident cooking.</p>
          </div>
          
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-amber-500 hover:bg-amber-400 text-brown-950 px-5 py-3 text-sm font-semibold shadow-sm transition-colors">Call to Reserve</a>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="grid gap-4">
            {highlights.map((h) => (
              <div key={h.title} className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 p-5">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-amber-500/60 to-transparent" />
                <h3 className="text-amber-50 font-medium">{h.title}</h3>
                <p className="text-amber-100/80 text-sm mt-1">{h.desc}</p>
                <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-amber-400/10 blur-2xl transition-transform group-hover:translate-x-4 group-hover:-translate-y-2" />
              </div>
            ))}
          </div>

          <div className="grid gap-3">
            {lanes.map((lane) => (
              <div key={lane.name} className={`relative overflow-hidden rounded-2xl ring-1 ring-white/10 p-5 bg-gradient-to-r ${lane.color} to-transparent`}> 
                <div className="flex items-center justify-between">
                  <p className="text-amber-50 font-medium">{lane.name}</p>
                  <a href="#menu-full" className="text-amber-200/80 text-xs underline underline-offset-4">See sample</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuPreview
