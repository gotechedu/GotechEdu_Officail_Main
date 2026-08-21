import Link from "next/link";
import Image from "next/image";

const solutions = [
  { name: "Enterprise Software Solutions", href: "/solution" },
  { name: "AI & Intelligent Automation", href: "/solution" },
  { name: "Cloud & DevOps Engineering", href: "/solution" },
  { name: "Data-Driven Digital Marketing", href: "/solution" },
  { name: "Technology Education & Bootcamps", href: "/solution" },
];

const company = [
  { name: "About GotechEdu", href: "/solution" },
  { name: "Careers & Hiring", href: "/career" },
  { name: "Official Blog & Insights", href: "/blog" },
  { name: "Contact & Support", href: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/icons.png"
                alt="GotechEdu Logo"
                width={180}
                height={50}
                className="h-10 w-auto object-contain brightness-110 rounded-full"
              />
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Empowering enterprises, startups, and tech professionals through custom software development, AI solutions, multi-cloud infrastructure, digital growth, and expert education.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-800/50 text-xs font-bold text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                IN
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-800/50 text-xs font-bold text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                X
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-800/50 text-xs font-bold text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                GH
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Solutions & Services
            </h3>

            <ul className="mt-5 space-y-3">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Company & Ecosystem
            </h3>

            <ul className="mt-5 space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4 text-sm text-slate-400">
              <p className="leading-relaxed">
                Have a technology project or need enterprise consultation?
              </p>

              <a
                href="mailto:hello@gotechedu.com"
                className="block font-semibold text-blue-400 hover:underline"
              >
                hello@gotechedu.com
              </a>

              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-blue-700"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-14 border-t border-slate-800/80 pt-8 flex flex-col justify-between gap-4 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} GotechEdu Technologies Inc. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/" className="transition hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/" className="transition hover:text-slate-300">
              Terms of Service
            </Link>
            <Link href="/" className="transition hover:text-slate-300">
              Security & Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
