import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    tagline: 'For everyday banking',
    features: ['No monthly fees', 'Instant transfers', 'Budget & insights'],
    highlight: false,
  },
  {
    name: 'Plus',
    price: '$9',
    tagline: 'For power users',
    features: ['All Starter features', 'Premium support', 'Higher limits'],
    highlight: true,
  },
  {
    name: 'Business',
    price: '$29',
    tagline: 'For teams and companies',
    features: ['Team cards', 'Bulk payouts', 'Advanced controls'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black py-24 text-white">
      <div id="security" className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_90%_10%,rgba(16,185,129,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Fair pricing for every stage</h2>
          <p className="mt-3 text-white/70">Start free and upgrade as you grow. Cancel anytime.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className={`relative rounded-2xl border p-6 transition ${
                plan.highlight
                  ? 'border-emerald-500/40 bg-emerald-500/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {plan.highlight && (
                <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-medium text-black">
                  Popular
                </span>
              )}
              <div className="mb-4 text-2xl font-semibold">{plan.name}</div>
              <div className="mb-1 text-4xl font-bold">{plan.price}<span className="text-base font-medium text-white/60">/mo</span></div>
              <div className="mb-6 text-white/70">{plan.tagline}</div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle2 className="text-emerald-400" size={18} /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 font-medium transition ${
                  plan.highlight
                    ? 'bg-emerald-500 text-black hover:bg-emerald-400'
                    : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Choose {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
