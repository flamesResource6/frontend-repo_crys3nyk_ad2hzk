import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import MenuPreview from './components/MenuPreview'
import HotelPreview from './components/HotelPreview'
import EventsPreview from './components/EventsPreview'
import InstagramFeed from './components/InstagramFeed'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0907]">
      <Navbar />

      <main className="relative">
        <Hero />
        <Story />
        <MenuPreview />
        <HotelPreview />
        <EventsPreview />
        <InstagramFeed />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[linear-gradient(to_top,#0a0806,#0b0907)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-amber-200/70 text-sm">The Bay Leaf • Inside Serendib Suites • Namiwawa, Blantyre</p>
            <p className="text-amber-200/60 text-xs">Breakfast • Lunch • Dinner • Walk-ins welcome</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
