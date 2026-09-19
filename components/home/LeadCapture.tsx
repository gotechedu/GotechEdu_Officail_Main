"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { officialApi } from "@/lib/api";

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Full Stack Web Development",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage("Please provide your name, email, and phone number.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      await officialApi.submitCourseApplication({
        courseTitle: formData.course,
        studentName: formData.name,
        email: formData.email,
        phone: formData.phone,
        learningGoal: `Application from home page. Location/Note: ${formData.address || "Not specified"}`,
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="registration"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-slate-50/80 py-18 sm:py-24 text-slate-900 border-t border-slate-200/80"
    >
      {/* Background Subtle Mesh & Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#38bdf815_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
      <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-purple-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Limited Seats Copy matching Reference Page 2 & 3 */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Your Future Starts Here!
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-slate-950">
              Limited Seats.{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Big Opportunities.
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Don&apos;t wait! Register now to grab your spot in the most practical and affordable
              computer, cloud, and AI engineering courses in Lucknow &amp; online. Fill the form below
              and unlock access to career-focused courses, expert training, and real job opportunities.
            </p>

            {/* Value Checkpoints in Light Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
              <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm">
                <div className="text-blue-600 font-black text-xl">1-on-1</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Career Mentorship</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Free roadmap audit</p>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm">
                <div className="text-indigo-600 font-black text-xl">100%</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Practical Labs</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Zero outdated theory</p>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm">
                <div className="text-purple-600 font-black text-xl">150+</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Hiring Partners</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Placement support</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Light Registration Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 text-slate-900 shadow-xl shadow-blue-900/5">
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-black text-slate-950">
                  Fill Your Registration
                </h3>
                <p className="mt-1 text-xs text-slate-500 font-medium">
                  Instant response &amp; free counseling within 2 hours
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">
                    Application Submitted!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our academic counselor will call
                    you at <strong>{formData.phone}</strong> with the syllabus and scholarship details.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        course: "Full Stack Web Development",
                        address: "",
                      });
                    }}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800"
                  >
                    <span>Submit another registration</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="rounded-xl bg-red-50 p-3 text-xs font-semibold text-red-600 border border-red-200">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Aditya Rai"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  {/* Email & Phone side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 95541 11332"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Select Course */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Course of Interest
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none transition"
                    >
                      <option value="O Level (NIELIT) & ADCA">O Level (NIELIT) &amp; ADCA</option>
                      <option value="Full Stack Web Development">Full Stack Web Development</option>
                      <option value="Cloud & DevOps Architecture">Cloud &amp; DevOps Architecture</option>
                      <option value="Generative AI & Agentic Systems">Generative AI &amp; Agentic Systems</option>
                      <option value="Tally Prime & E-Taxation">Tally Prime &amp; E-Taxation</option>
                      <option value="Cybersecurity & SOC Defense">Cybersecurity &amp; SOC Defense</option>
                    </select>
                  </div>

                  {/* Address or Comment */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Address / City (Optional)
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="e.g. Balaganj, Lucknow"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  {/* Submit Button Matching Reference: "APPLY FOR IT" */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/35 active:scale-100 disabled:opacity-60 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>APPLY FOR IT</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[10px] text-slate-400">
                    🔒 We respect your privacy. No spam guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
