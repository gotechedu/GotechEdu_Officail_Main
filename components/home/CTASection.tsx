import Link from "next/link";
import React from "react";

function CTASection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 py-20 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Text */}
          <div className="lg:col-span-8">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
              Ready to Accelerate Growth?
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Let's Build Your Next-Generation Technology Solution.
            </h2>

            <p className="mt-4 text-base text-blue-100 sm:text-lg max-w-2xl">
              Schedule a strategy call with our principal solution architects to discuss your software, AI automation, or infrastructure requirements.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-blue-700 shadow-xl transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Schedule Free Technical Consultation
                <span className="ml-2">→</span>
              </Link>

              <a
                href="mailto:gotecheduofficial@gmail.com"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition duration-200 hover:bg-white/20"
              >
                Contact Sales Team
              </a>
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="lg:col-span-4 rounded-2xl bg-white/10 p-7 backdrop-blur-xl border border-white/20 text-white">
            <h3 className="text-lg font-bold">What happens next?</h3>

            <ul className="mt-4 space-y-3 text-sm text-blue-50">
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-cyan-300">1.</span>
                <span>30-minute initial discovery call to review requirements.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-cyan-300">2.</span>
                <span>Custom architecture overview & cost estimation proposal.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-cyan-300">3.</span>
                <span>Rapid kickoff with dedicated project team.</span>
              </li>
            </ul>

            <div className="mt-6 border-t border-white/20 pt-4 text-xs text-blue-100 flex items-center justify-between">
              <span>NDA Protected</span>
              <span>24h Response Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
