function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-[linear-gradient(to_bottom,#090705,#080604)]">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(700px_300px_at_80%_70%,#f59e0b,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-amber-50 text-3xl sm:text-4xl font-semibold">Contact & Hours</h2>
            <p className="mt-3 text-amber-100/80">Walk-ins welcome. For groups and events, call ahead — we’ll keep it smooth.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-5">
                <p className="text-amber-200/80 text-xs uppercase tracking-[0.25em]">Phone</p>
                <a href="tel:+265993400400" className="mt-1 block text-amber-50 text-lg font-medium">+265 993 400 400</a>
              </div>
              <div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-5">
                <p className="text-amber-200/80 text-xs uppercase tracking-[0.25em]">Hours</p>
                <p className="mt-1 text-amber-50 text-sm">Breakfast — morning</p>
                <p className="text-amber-50 text-sm">Lunch — midday</p>
                <p className="text-amber-50 text-sm">Dinner — evening</p>
              </div>
            </div>
            <p className="mt-6 text-amber-200/70 text-sm">Inside Serendib Suites, Namiwawa, Blantyre • Trees all around • Peaceful and private</p>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-5">
              <p className="text-amber-200/80 text-xs uppercase tracking-[0.25em]">Quick Note</p>
              <p className="mt-2 text-amber-100/80 text-sm">Let us know if it’s a work lunch or a group meal — we’ll tailor the pace and the plates.</p>
              <a href="tel:+265993400400" className="mt-4 inline-flex rounded-full bg-amber-500 hover:bg-amber-400 text-brown-950 px-5 py-3 text-sm font-semibold shadow-sm transition-colors">Call Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
