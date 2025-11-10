import React from 'react';

export default function CTA() {
  return (
    <section id="get-started" className="relative z-10 mx-auto my-20 w-full max-w-6xl px-6">
      <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white shadow-xl">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Spin up your AI Receptionist in minutes</h3>
            <p className="mt-1 text-white/90">Connect n8n, map a few nodes, and start capturing qualified leads today.</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md items-center gap-2"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-md px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none"
            />
            <button type="submit" className="whitespace-nowrap rounded-md bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800">
              Get Invite
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
