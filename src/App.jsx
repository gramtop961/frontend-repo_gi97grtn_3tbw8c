import React from 'react';
import Hero from './components/Hero';
import WorkflowShowcase from './components/WorkflowShowcase';
import FeatureGrid from './components/FeatureGrid';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <WorkflowShowcase />
      <FeatureGrid />
      <CTA />
      <footer className="mx-auto my-10 w-full max-w-6xl px-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} FlowDesk AI — AI Receptionist powered by n8n
      </footer>
    </div>
  );
}

export default App;
