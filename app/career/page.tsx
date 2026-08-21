import Link from "next/link";

const jobs = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Gurugram / Remote",
    experience: "1–3 Years",
    description:
      "Build modern, responsive and high-performance web applications using React and Next.js.",
  },
  {
    title: "MERN Stack Developer",
    type: "Full Time",
    location: "Gurugram / Remote",
    experience: "1–3 Years",
    description:
      "Develop scalable full-stack applications using MongoDB, Express.js, React and Node.js.",
  },
  {
    title: "AI Engineer",
    type: "Full Time",
    location: "Gurugram / Remote",
    experience: "1–3 Years",
    description:
      "Build AI-powered applications and integrate modern AI and LLM technologies into business solutions.",
  },
  {
    title: "Digital Marketing Executive",
    type: "Full Time",
    location: "Gurugram",
    experience: "0–2 Years",
    description:
      "Create and execute digital marketing strategies across SEO, content, social media and paid campaigns.",
  },
];

export default function CareerPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />

      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Why GotechEdu?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Grow with a team that values innovation.
            </h2>

            <p className="mt-4 text-slate-600">
              We believe great products are built by curious people who keep
              learning, experimenting and solving real-world problems.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Learn & Grow",
                description:
                  "Continuous learning through real projects and modern technologies.",
                icon: "01",
              },
              {
                title: "Real Impact",
                description:
                  "Work on products and solutions that solve meaningful problems.",
                icon: "02",
              },
              {
                title: "Modern Tech",
                description:
                  "Work with AI, cloud, web technologies and modern development practices.",
                icon: "03",
              },
              {
                title: "Great Culture",
                description:
                  "Collaborate with people who value ideas, ownership and teamwork.",
                icon: "04",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-blue-600">
                  {item.icon}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Careers
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Open positions
              </h2>

              <p className="mt-4 text-slate-600">
                Find a role where you can learn, contribute and grow.
              </p>
            </div>

            <span className="text-sm text-slate-500">
              {jobs.length} positions available
            </span>
          </div>

          <div className="mt-10 space-y-5">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-md md:p-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                        {job.type}
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        {job.location}
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        {job.experience}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-slate-900">
                      {job.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {job.description}
                    </p>
                  </div>

                  <Link
                    href={`/career/${job.title
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                    className="shrink-0 rounded-lg bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
                  >
                    View Position
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Role */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 px-6 py-14 sm:px-12">
            <h2 className="text-3xl font-bold text-white">
              Don't see the right role?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              We are always interested in meeting talented and passionate
              people. Send us your resume and tell us how you can contribute to
              GotechEdu.
            </p>

            <a
              href="mailto:careers@gotechedu.com"
              className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
