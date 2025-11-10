import React from 'react';
import { Sparkles, Shield, PlugZap } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl border border-slate-200/10 bg-white/5 p-6 text-white backdrop-blur">
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
      <Icon size={20} />
    </div>
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="mt-1 text-sm text-white/70">{desc}</p>
  </div>
);

export default function FeatureGrid() {
  const features = [
    {
      icon: Sparkles,
      title: 'Natural conversations',
      desc: 'Delight callers with fast, human-like voice and memory-aware responses.'
    },
    {
      icon: PlugZap,
      title: 'Plug into your stack',
      desc: 'Connect CRM, helpdesk, calendars, and data sources using n8n nodes.'
    },
    {
      icon: Shield,
      title: 'Secure by default',
      desc: 'Role-based access, audit trails, and data encryption in transit and at rest.'
    },
  ];

  return (
    <section className="relative z-10 mx-auto mt-16 w-full max-w-6xl px-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((f, i) => (
          <Feature key={i} {...f} />
        ))}
      </div>
    </section>
  );
}
