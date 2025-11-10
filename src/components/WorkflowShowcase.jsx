import React from 'react';
import { ArrowRight, Phone, Database, Bot } from 'lucide-react';

const Step = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:border-emerald-300/40 transition">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-sm text-white/70">{desc}</p>
      </div>
    </div>
  </div>
);

export default function WorkflowShowcase() {
  return (
    <section id="workflow" className="relative z-10 mx-auto -mt-20 w-full max-w-6xl px-6">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">How the n8n workflow runs</h3>
          <a href="#get-started" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
            Build your flow <ArrowRight size={18} />
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Step icon={Phone} title="Inbound call" desc="Your number rings — voice captured and transcribed." />
          <Step icon={Bot} title="AI receptionist" desc="LLM greets, qualifies, and collects context." />
          <Step icon={Database} title="Trigger workflows" desc="n8n nodes push data into your tools." />
          <Step icon={ArrowRight} title="Smart follow-ups" desc="Create tickets, send emails, and update CRM." />
        </div>
      </div>
    </section>
  );
}
