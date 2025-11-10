import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex h-full min-h-[90vh] w-full max-w-7xl items-center px-6">
        <div className="ml-auto max-w-xl text-right text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            AI Receptionist • Workflow Automation
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Automate every conversation with an AI Receptionist powered by n8n
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Route calls, qualify leads, and trigger workflows across your stack — no code. Connect your tools and let the AI handle the busywork.
          </p>
          <div className="mt-6 flex items-center justify-end gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600"
            >
              Get Started Free
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              See Workflow
            </a>
          </div>
          <div className="mt-6 text-xs text-white/60">
            No credit card required • Try in minutes
          </div>
        </div>
      </div>
    </section>
  );
}
