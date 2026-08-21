import Link from "next/link";

const softwareSolutions = [
  {
    title: "CRM",
    description:
      "Manage leads, customers, sales pipelines, communication and relationships from one platform.",
    href: "/solutions/software/crm",
  },
  {
    title: "ERP",
    description:
      "Connect finance, HR, inventory, operations and business processes in one integrated system.",
    href: "/solutions/software/erp",
  },
  {
    title: "HRMS",
    description:
      "Manage employees, attendance, payroll, recruitment, leave and HR operations.",
    href: "/solutions/software/hrms",
  },
  {
    title: "POS",
    description:
      "Modern point-of-sale solutions for billing, inventory, customers and retail operations.",
    href: "/solutions/software/pos",
  },
  {
    title: "Inventory Management",
    description:
      "Track products, stock, warehouses, purchases, transfers and inventory movement.",
    href: "/solutions/software/inventory",
  },
  {
    title: "LMS",
    description:
      "Build powerful learning platforms for courses, students, instructors, exams and certifications.",
    href: "/solutions/software/lms",
  },
  {
    title: "Project Management",
    description:
      "Manage projects, tasks, teams, deadlines and productivity from one centralized platform.",
    href: "/solutions/software/project-management",
  },
  {
    title: "E-commerce",
    description:
      "Create scalable online stores and marketplaces with products, payments, orders and analytics.",
    href: "/solutions/software/ecommerce",
  },
];

const aiSolutions = [
  {
    title: "AI Agents",
    description:
      "Build intelligent agents capable of performing business tasks.",
  },
  {
    title: "AI Chatbots",
    description: "Create intelligent customer support and business assistants.",
  },
  {
    title: "Generative AI",
    description: "Integrate modern AI models into products and workflows.",
  },
  {
    title: "RAG Solutions",
    description:
      "Build AI systems that answer questions using your business data.",
  },
  {
    title: "Computer Vision",
    description: "Use AI to analyze images, video and visual information.",
  },
  {
    title: "AI Automation",
    description: "Automate repetitive business processes using AI.",
  },
];

const cloudSolutions = [
  "Cloud Migration",
  "Cloud Architecture",
  "AWS Solutions",
  "Azure Solutions",
  "DevOps",
  "CI/CD",
  "Kubernetes",
  "Cloud Security",
];

const developmentSolutions = [
  "Web Development",
  "Mobile App Development",
  "SaaS Development",
  "API Development",
  "Enterprise Software",
  "E-commerce Development",
  "Microservices",
  "Real-time Applications",
];

const industries = [
  "Education",
  "Healthcare",
  "Retail",
  "E-commerce",
  "Real Estate",
  "Logistics",
  "Hospitality",
  "Finance",
];

export default function SolutionPage() {
  return (
    <main className="bg-white">

      {/* =====================================================
          BUSINESS SOFTWARE
      ====================================================== */}
      <section id="software" className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Business Software
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Software that powers your business
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Purpose-built software to simplify operations, improve
              productivity and give your business better control over its
              processes.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {softwareSolutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                  {solution.title.slice(0, 2).toUpperCase()}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900 group-hover:text-blue-600">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {solution.description}
                </p>

                <span className="mt-5 inline-block text-sm font-semibold text-blue-600">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          AI
      ====================================================== */}
      <section id="ai" className="bg-slate-950 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Artificial Intelligence
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Build smarter products with AI
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                From intelligent automation to AI-powered applications,
                GotechEdu helps businesses use modern AI technologies to solve
                real-world problems.
              </p>

              <Link
                href="/solutions/ai"
                className="mt-8 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Explore AI Solutions
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aiSolutions.map((solution) => (
                <div
                  key={solution.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                >
                  <h3 className="font-semibold text-white">{solution.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOUD
      ====================================================== */}
      <section id="cloud" className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Cloud & DevOps
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Scale confidently with cloud
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Build reliable infrastructure, automate deployments and
                modernize your applications with cloud and DevOps solutions.
              </p>

              <Link
                href="/solutions/cloud"
                className="mt-8 inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Explore Cloud Solutions
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {cloudSolutions.map((solution) => (
                <div
                  key={solution}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5 font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  {solution}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOFTWARE DEVELOPMENT
      ====================================================== */}
      <section id="development" className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Software Development
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Turn your idea into a digital product
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              From MVPs to enterprise applications, we design and build scalable
              digital products using modern technologies.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {developmentSolutions.map((solution) => (
              <span
                key={solution}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm"
              >
                {solution}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}
      <section id="industries" className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Industry Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Solutions built around your industry
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Technology works best when it understands the industry it is built
              for. We create solutions around specific business workflows and
              challenges.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {industries.map((industry) => (
              <Link
                key={industry}
                href={`/solutions/industries/${industry
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                  {industry}
                </h3>

                <span className="mt-4 block text-sm font-medium text-slate-400 group-hover:text-blue-600">
                  View solutions →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-14 text-center sm:px-12 lg:py-20">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Have a business challenge?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Tell us what you are trying to solve. Our team can help you choose
              the right technology and build a solution around it.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
