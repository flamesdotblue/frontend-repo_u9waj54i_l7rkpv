import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline background - finance themed credit cards */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient vignettes that don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(16,185,129,0.20),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-24 pt-40 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur"
        >
          Instant, secure payments — powered by smart cards
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-4xl font-semibold leading-tight sm:text-6xl"
        >
          The future of finance
          <span className="text-emerald-400"> in your pocket</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-2xl text-lg text-white/80"
        >
          Floating smart cards, real-time insights, and effortless control. Spend, save, and grow with a modern banking experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-medium text-black transition hover:bg-emerald-400"
          >
            Get started free
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Explore features
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {[
            { label: 'Active users', value: '500K+' },
            { label: 'Countries', value: '40+' },
            { label: 'Avg. rating', value: '4.9/5' },
            { label: 'CO2 offset', value: '100%+' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="text-2xl font-semibold text-white">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
