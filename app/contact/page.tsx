"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Software Solutions",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-slate-50 min-h-screen py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
            Get In Touch
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Let's Talk About Your Next Technology Solution.
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Whether you need custom enterprise software, AI integration, cloud infrastructure, or corporate tech training—our solution engineering team is here to help.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Direct Contact Information
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Connect directly with our technology consultation specialists.
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 font-bold">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email Consultation
                    </h4>
                    <a
                      href="mailto:hello@gotechedu.com"
                      className="text-base font-semibold text-slate-900 hover:text-blue-600 transition"
                    >
                      hello@gotechedu.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 font-bold">
                    📍
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Headquarters
                    </h4>
                    <p className="text-base font-semibold text-slate-900">
                      Tech Enterprise Hub, Suite 400
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100 font-bold">
                    ⚡
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Response SLA
                    </h4>
                    <p className="text-base font-semibold text-slate-900">
                      Within 24 business hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
              <h3 className="text-lg font-bold">Looking for immediate consultation?</h3>
              <p className="mt-2 text-sm text-blue-100 leading-relaxed">
                Our principal solution architects are available for technical roadmap reviews and architecture audits.
              </p>
              <div className="mt-5 text-xs font-bold uppercase tracking-wider text-cyan-200">
                ✓ Non-Disclosure Agreement Guaranteed
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-8 shadow-xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-3xl">
                    ✓
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    Consultation Request Received!
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, {formData.name || "there"}. A GotechEdu solution architect will review your project details and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Schedule Your Technical Consultation
                  </h3>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Service Area of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 bg-white"
                      >
                        <option>Software Solutions</option>
                        <option>AI Solutions & Agents</option>
                        <option>Cloud Services & DevOps</option>
                        <option>Digital Marketing</option>
                        <option>Technology Education</option>
                        <option>Product Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Project Details / Requirements *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project requirements, timeline, and goals..."
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition"
                  >
                    Submit Consultation Request →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
