import { Shield, TrendingUp, Smartphone, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: CreditCard,
    title: 'Smart Cards',
    desc: 'Virtual and physical cards with spending controls, instant freeze, and dynamic limits.',
  },
  {
    icon: Shield,
    title: 'Bank‑grade Security',
    desc: 'Biometric login, 3D Secure, and real-time fraud detection keep your funds safe.',
  },
  {
    icon: TrendingUp,
    title: 'Insights & Growth',
    desc: 'Actionable analytics and automated saves help you reach goals faster.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    desc: 'A lightning-fast app built for modern life — pay, track, and manage on the go.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_10%_10%,rgba(16,185,129,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Powerful features, simple design</h2>
            <p className="mt-3 max-w-2xl text-white/70">Everything you need to spend smarter, save more, and stay in control — wrapped in a clean, modern experience.</p>
          </div>
          <div className="hidden sm:block text-right text-sm text-white/60">Green, white, and black theme with smooth transitions.</div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-emerald-400/40"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-500/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
