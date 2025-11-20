function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#1a140e,transparent_30%),linear-gradient(to_top_left,#0b0907,transparent_40%)]" />
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(800px_300px_at_10%_10%,#f59e0b,transparent),radial-gradient(600px_400px_at_90%_10%,#f97316,transparent),radial-gradient(600px_500px_at_50%_90%,#a16207,transparent)]" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-amber-50 drop-shadow-[0_2px_20px_rgba(245,158,11,0.15)]">
              Calm, warm dining at The Bay Leaf
            </h1>
            <p className="mt-5 text-amber-100/80 leading-relaxed max-w-xl">
              Inside Serendib Suites, tucked among trees in Namiwawa, Blantyre. Gentle lighting, wood textures, and a relaxed rhythm fit for business meetings, quiet meals, and casual visits.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#menu" className="rounded-full bg-amber-500 hover:bg-amber-400 text-brown-950 px-5 py-3 text-sm font-semibold shadow-sm transition-colors">View Menu</a>
              <a href="#contact" className="rounded-full border border-amber-200/30 text-amber-50 hover:bg-white/5 px-5 py-3 text-sm font-semibold transition-colors">Reserve or Walk-in</a>
              <p className="text-xs text-amber-200/70">Breakfast • Lunch • Dinner • Walk-ins welcome</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-8 h-52 w-52 rounded-full bg-amber-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-8 h-52 w-52 rounded-full bg-rose-400/20 blur-3xl" />

            <div className="grid grid-cols-2 gap-4">
              <img className="rounded-2xl shadow-2xl ring-1 ring-white/10" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop" alt="Warm restaurant interior" />
              <img className="rounded-2xl shadow-2xl ring-1 ring-white/10 mt-8" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" alt="Close-up food" />
              <img className="rounded-2xl shadow-2xl ring-1 ring-white/10" src="https://images.unsplash.com/photo-1596086221164-c8a4cac55e27?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHYXJkZW4lMjBwYXRofGVufDB8MHx8fDE3NjM2MjQ2MzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Garden path" />
              <img className="rounded-2xl shadow-2xl ring-1 ring-white/10 mt-8" src="https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1600&auto=format&fit=crop" alt="Coffee lounge" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
