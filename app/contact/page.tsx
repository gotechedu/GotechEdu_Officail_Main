"use client";

import React, { useState } from "react";
import Link from "next/link";

const servicesList = [
  "Enterprise Software (ERP/CRM/POS)",
  "AI Solutions & Autonomous Agents",
  "Cloud Infrastructure & DevOps",
  "Cybersecurity & Zero-Trust Defense",
  "Tech Training & Corporate Upskilling",
  "Digital Growth & Performance Marketing",
];

const budgetRanges = [
  "<$10,000",
  "$10,000 – $50,000",
  "$50,000 – $100,000+",
  "Enterprise Retainer",
];

const faqs = [
  {
    q: "How quickly can we initiate a new enterprise development sprint?",
    a: "Following our initial technical discovery call and requirement scoping, our engineering squads can typically onboard and initiate sprint zero within 5 to 7 business days.",
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs) prior to discovery calls?",
    a: "Yes, absolutely. We prioritize your proprietary intellectual property. We provide mutual NDAs before reviewing any proprietary architecture or business logic.",
  },
  {
    q: "Can GotechEdu engineers integrate with our existing in-house technical squads?",
    a: "Yes. We offer both dedicated autonomous product pods (Principal Architect + Senior Full-Stack + QA + DevOps) and staff augmentation models to embed directly into your Jira sprints.",
  },
  {
    q: "What post-launch SLA support and maintenance guarantees do you provide?",
    a: "We offer comprehensive 24/7 Tier-3 production support SLAs, automated uptime monitoring, security patch management, and continuous optimization retainers.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "Enterprise Software (ERP/CRM/POS)",
    budget: "$10,000 – $50,000",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                  Direct Executive Channels
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Reach our leadership and principal engineering team directly.
                </p>

                <div className="mt-5 space-y-3">
                  {/* Email */}
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-sm">
                      ✉️
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Consultation Email
                      </p>
                      <a
                        href="mailto:hello@gotechedu.com"
                        className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition"
                      >
                        hello@gotechedu.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 font-bold text-sm">
                      📞
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Direct Technical Line
                      </p>
                      <a
                        href="tel:+919876543210"
                        className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-600 transition"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 font-bold text-sm">
                      📍
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Headquarters
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Tech Enterprise Hub, Suite 400
                      </p>
                      <p className="text-[10px] text-slate-500">Gurugram, NCR, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-950 p-6 text-white shadow-md">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🛡️</span>
                  <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                    Engagement Guarantees
                  </h4>
                </div>

                <ul className="mt-3.5 space-y-2 text-xs text-blue-100">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-300 font-bold">✓</span>
                    <span><strong>Mutual NDA:</strong> Signed prior to reviewing proprietary logic.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-300 font-bold">✓</span>
                    <span><strong>Response SLA:</strong> Architecture review within 24 hours.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-300 font-bold">✓</span>
                    <span><strong>100% IP Rights:</strong> Code and models fully owned by you.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Clean Consultation Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
                {submitted ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600">
                      ✓
                    </div>
                    <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold text-slate-900">
                      Inquiry Received!
                    </h3>
                    <p className="mx-auto mt-2 max-w-sm text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. A Principal Solutions Architect will review your scope and get in touch with you at <strong className="text-slate-900">{formData.email}</strong> within 24 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-blue-700 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900">
                        Schedule a Technical Consultation
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Tell us about your project requirements and target objectives.
                      </p>
                    </div>

                    {/* Solution Area */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Primary Solution Area *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 bg-white"
                      >
                        {servicesList.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Full Name & Email */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          placeholder="e.g. Vikram Sharma"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          placeholder="vikram@enterprise.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                        />
                      </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          placeholder="e.g. Acme Corp"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                        />
                      </div>
                    </div>

                    {/* Budget Band */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Estimated Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 bg-white"
                      >
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Project Scope & Goals *
                      </label>
                      <textarea
                        rows={3}
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe what you want to build, existing stack, and timelines..."
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-blue-600 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-700"
                    >
                      Submit Consultation Request →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. FREQUENTLY ASKED QUESTIONS (FAQ)
      ====================================================== */}
      <section className="py-12 lg:py-16 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/70 overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-4 sm:p-5 text-left"
                  >
                    <span className="font-heading text-sm sm:text-base font-bold text-slate-900 pr-2">
                      {faq.q}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-slate-600 shadow-2xs font-bold text-xs">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
