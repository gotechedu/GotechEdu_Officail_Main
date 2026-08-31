import Link from "next/link";
import React from "react";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 py-20 text-white shadow-inner">
      {/* Background ambient lighting orbs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-[30rem] w-[30rem] rounded-full bg-purple-500/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Text */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-md shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
              </span>
              <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-white">
                Ready to Accelerate Growth?
              </span>
            </div>

            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Let's Build Your Next-Generation Technology Solution.
            </h2>

            <p className="mt-4 text-base text-blue-100 sm:text-lg max-w-2xl font-medium">
              Schedule a strategy consultation with our principal solution architects to discuss software engineering, autonomous AI, multi-cloud, or upskilling requirements.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm sm:text-base font-extrabold text-blue-800 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:bg-cyan-50 hover:shadow-cyan-400/30 active:scale-100"
              >
                <span>Schedule Technical Consultation</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <a
                href="mailto:gotecheduofficial@gmail.com"
                className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-8 py-4 text-sm sm:text-base font-extrabold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-[1.03] active:scale-100"
              >
                Contact Sales Team
              </a>
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="lg:col-span-4 rounded-3xl bg-white/15 p-7 backdrop-blur-xl border border-white/25 text-white shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
            <h3 className="font-heading text-lg font-extrabold flex items-center gap-2">
              <span>⚡</span> What happens next?
            </h3>

            <ul className="mt-5 space-y-3.5 text-xs sm:text-sm text-blue-50 font-medium">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-slate-900 font-extrabold text-xs">
                  1
                </span>
                <span>30-minute initial discovery call to review requirements.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-slate-900 font-extrabold text-xs">
                  2
                </span>
                <span>Custom architecture overview & cost estimation proposal.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-slate-900 font-extrabold text-xs">
                  3
                </span>
                <span>Rapid kickoff with dedicated principal engineering team.</span>
              </li>
            </ul>

            <div className="mt-6 border-t border-white/20 pt-4 text-xs font-mono text-cyan-200 flex items-center justify-between font-bold">
              <span>🛡️ NDA Protected</span>
              <span>⚡ 24h Response Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
