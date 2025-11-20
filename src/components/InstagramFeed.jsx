import { useEffect, useState } from 'react'

function InstagramFeed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Placeholder mock feed — can be wired to backend later
    setPosts([
      { id: 1, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop', caption: 'Evening light at Bay Leaf' },
      { id: 2, url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop', caption: 'Warm details' },
      { id: 3, url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop', caption: 'Fresh plates' },
      { id: 4, url: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop', caption: 'Coffee moments' },
    ])
  }, [])

  return (
    <section className="relative py-20 bg-[linear-gradient(to_bottom,#0a0806,#090705)]">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(600px_300px_at_20%_30%,#f59e0b,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-amber-200/70">From Instagram</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-amber-50">A light, real‑time window</h2>
            <p className="mt-4 text-amber-100/80 max-w-2xl">Recent moments from our space. Customers and team, warm and unfiltered.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-full bg-amber-500 hover:bg-amber-400 text-brown-950 px-5 py-3 text-sm font-semibold shadow-sm transition-colors">Follow @bayleaf</a>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {posts.map((p) => (
            <a key={p.id} href="#" className="group relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5 aspect-square">
              <img src={p.url} alt={p.caption} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed
