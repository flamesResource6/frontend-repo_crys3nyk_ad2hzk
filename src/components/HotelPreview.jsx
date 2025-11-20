function HotelPreview() {
  return (
    <section id="hotel" className="relative py-20 bg-[linear-gradient(to_bottom,#0e0b09,#0b0907)]">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(800px_300px_at_10%_90%,#f59e0b,transparent),radial-gradient(600px_400px_at_90%_10%,#f59e0b,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h2 className="text-amber-50 text-3xl sm:text-4xl font-semibold">A quiet link to Serendib Suites</h2>
            <p className="mt-4 text-amber-100/80 leading-relaxed max-w-2xl">A small path connects to the coffee lounge and bar. There’s a spa, a garden-like courtyard, and a conference hall for up to ~100 guests. Many dine with us around meetings.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 max-w-xl">
              <div className="rounded-xl ring-1 ring-white/10 p-4 bg-white/5">
                <p className="text-amber-50 font-medium">Coffee Lounge</p>
                <p className="text-amber-100/70 text-sm">Quiet corners, light bites.</p>
              </div>
              <div className="rounded-xl ring-1 ring-white/10 p-4 bg-white/5">
                <p className="text-amber-50 font-medium">Bar Nearby</p>
                <p className="text-amber-100/70 text-sm">Easy evenings, neat pours.</p>
              </div>
              <div className="rounded-xl ring-1 ring-white/10 p-4 bg-white/5">
                <p className="text-amber-50 font-medium">Spa & Garden</p>
                <p className="text-amber-100/70 text-sm">Calm, retreat-like energy.</p>
              </div>
              <div className="rounded-xl ring-1 ring-white/10 p-4 bg-white/5">
                <p className="text-amber-50 font-medium">Conference Hall</p>
                <p className="text-amber-100/70 text-sm">Meetings up to ~100 guests.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1600&auto=format&fit=crop" alt="Hotel courtyard" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HotelPreview
