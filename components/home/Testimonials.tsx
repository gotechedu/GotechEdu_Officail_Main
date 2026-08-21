import React from "react";

const testimonials = [
  {
    quote:
      "GotechEdu transformed our legacy ERP into a high-speed microservices architecture. Their team delivered on time with zero downtime during migration.",
    author: "Vikram Sharma",
    role: "CTO, FinTech Global Enterprise",
    rating: 5,
    metrics: "3.5x Performance Boost",
    initials: "VS",
    avatarBg: "bg-blue-600 text-white",
  },
  {
    quote:
      "The custom AI agent pipeline built by GotechEdu reduced our customer support triage time by 75%. Their AI expertise is world-class.",
    author: "Elena Rostova",
    role: "VP of Product, HealthTech Solutions",
    rating: 5,
    metrics: "75% Faster Resolution",
    initials: "ER",
    avatarBg: "bg-indigo-600 text-white",
  },
  {
    quote:
      "Our team completed GotechEdu's corporate Cloud & DevOps bootcamp. The practical skills learned directly empowered our internal dev teams.",
    author: "Rajesh Kumar",
    role: "Head of Engineering, EduCorp",
    rating: 5,
    metrics: "120 Developers Upskilled",
    initials: "RK",
    avatarBg: "bg-cyan-600 text-white",
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
            Client Success
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted by Engineering & Executive Leaders.
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            See how our software solutions, AI automation, and training programs drive real enterprise impact.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl"
            >
              <div>
                {/* Rating & Metric pill */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-100">
                    {t.metrics}
                  </span>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-slate-700 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-200/60 pt-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full font-bold text-sm shadow-sm ${t.avatarBg}`}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
