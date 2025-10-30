import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top navigation with glassy backdrop */}
      <Navbar />

      {/* Hero with Spline background */}
      <Hero />

      {/* Features grid */}
      <Features />

      {/* Pricing plans */}
      <Pricing />

      {/* Simple footer */}
      <footer className="border-t border-white/10 bg-black/80 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Flare Finance. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <a href="#features" className="transition hover:text-white">Features</a>
              <a href="#pricing" className="transition hover:text-white">Pricing</a>
              <a href="#security" className="transition hover:text-white">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
