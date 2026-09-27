export interface CareerJob {
  id: string;
  slug: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  salary: string;
  status: "Active" | "Closed" | "Draft" | "Urgent";
  openings?: number;
  postedDate?: string;
  tags: string[];
  description: string;
  aboutTeam?: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  whatWeOffer?: string[];
  techStackDetails?: { name: string; role: string }[];
  hiringLead?: {
    name: string;
    role: string;
    department: string;
    initials: string;
    avatarBg: string;
  };
}

export const defaultCareers: CareerJob[] = [
  {
    id: "senior-frontend-engineer",
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    type: "Full-Time",
    location: "Gurugram, HQ / Remote Eligible",
    experience: "2–4 Years",
    salary: "₹12L – ₹20L PA",
    status: "Active",
    openings: 3,
    postedDate: "Just now",
    tags: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Redux / Zustand", "Web Vitals"],
    description:
      "Architect and ship mission-critical enterprise web applications, micro-frontends, and interactive learner dashboards. You will drive front-end performance, component accessibility, and seamless design system integration.",
    aboutTeam:
      "Our Core Engineering Squad powers the official enterprise portals and dynamic learning platforms at GoTechEdu. We value clean architectural boundaries, zero-compromise page speed metrics, and intuitive UI micro-interactions.",
    responsibilities: [
      "Architect, develop, and maintain high-performance frontend interfaces using Next.js 15 (App Router), React 19, and TypeScript.",
      "Spearhead Core Web Vitals optimization, targeting sub-second LCP (Largest Contentful Paint) and zero layout shifts across desktop and mobile devices.",
      "Collaborate closely with UI/UX product designers and backend engineers to integrate RESTful and GraphQL endpoints seamlessly.",
      "Build reusable component libraries, interactive data tables, and rich charting interfaces within our Tailwind CSS design token system.",
      "Conduct thorough code reviews, write automated unit/integration tests with Vitest / Playwright, and mentor junior developers on clean code principles.",
      "Participate actively in sprint planning, architectural RFC discussions, and technical roadmap grooming.",
    ],
    requirements: [
      "2 to 4 years of proven production experience engineering modern web applications using React.js and Next.js.",
      "Deep mastery of TypeScript, asynchronous JavaScript, browser rendering internals, and memory profiling.",
      "Solid proficiency in modern CSS, utility-first styling with Tailwind CSS, and CSS animations/glassmorphism design.",
      "Hands-on experience with modern state management solutions (Zustand, Redux Toolkit, React Query / SWR).",
      "Demonstrated ability to consume, cache, and validate REST APIs with robust error boundaries and optimistic UI updates.",
      "Strong command of Git workflows, CI/CD automated deployments (Vercel, GitHub Actions), and semantic versioning.",
    ],
    niceToHave: [
      "Experience with Next.js Server Components (RSC), Server Actions, and Turbopack.",
      "Familiarity with WebSockets, real-time presence indicators, or collaborative canvases.",
      "Prior experience working in fast-scaling EdTech, HRMS, or B2B SaaS product ecosystems.",
      "Active open-source contributions or technical blog publications.",
    ],
    whatWeOffer: [
      "Competitive annual CTC benchmarked against top-tier tech firms plus annual appraisal cycles.",
      "Latest top-spec Apple MacBook Pro (M-Series) with dual-monitor home setup allowance.",
      "Comprehensive medical, accidental, and family healthcare insurance coverage.",
      "Sponsored access to all GoTechEdu Academy bootcamps, masterclasses, and global cloud certifications.",
      "Flexible hybrid/remote policy with generous paid time off (PTO) and wellness breaks.",
      "Daily gourmet lunch and snacks at our Gurugram engineering hub.",
    ],
    techStackDetails: [
      { name: "Next.js 15", role: "SSR & Hybrid Framework" },
      { name: "React 19", role: "Component Architecture" },
      { name: "TypeScript", role: "Type Safety & Contracts" },
      { name: "Tailwind CSS", role: "Design Token Styling" },
      { name: "Zustand", role: "Lightweight State Store" },
      { name: "Playwright", role: "End-to-End Testing" },
    ],
    hiringLead: {
      name: "Aditya Verma",
      role: "Lead Frontend Architect",
      department: "Engineering Leadership",
      initials: "AV",
      avatarBg: "bg-blue-600",
    },
  },
  {
    id: "full-stack-mern-developer",
    slug: "full-stack-mern-developer",
    title: "Full-Stack MERN Developer",
    department: "Engineering",
    type: "Full-Time",
    location: "Gurugram / Hybrid",
    experience: "2–5 Years",
    salary: "₹12L – ₹22L PA",
    status: "Active",
    openings: 2,
    postedDate: "2 days ago",
    tags: ["Node.js", "Express", "MongoDB", "React", "Docker", "Redis", "REST APIs"],
    description:
      "Design, implement, and operate scalable backend services, asynchronous queues, and database architectures while building snappy administrative interfaces for enterprise customers.",
    aboutTeam:
      "The Platform Services team owns data ingest pipelines, authentication microservices, role-based access control engines, and database resilience across all GoTechEdu digital offerings.",
    responsibilities: [
      "Develop secure, modular REST and GraphQL APIs using Node.js, Express, and modern asynchronous patterns.",
      "Model, index, and optimize MongoDB schemas and aggregation pipelines to sustain high-throughput read/write operations.",
      "Implement multi-tenant authorization guards, JWT/session authentication, and granular RBAC permission middleware.",
      "Integrate Redis caching layers, background queue workers (BullMQ / RabbitMQ), and third-party webhook integrations.",
      "Containerize microservices with Docker and deploy resilient workloads onto cloud clusters (AWS ECS / EKS).",
      "Collaborate with frontend engineers to construct unified API contracts and interactive administrative dashboards.",
    ],
    requirements: [
      "2 to 5 years of solid full-stack development experience specializing in Node.js, Express, and React.",
      "Strong database design acumen with MongoDB, Mongoose ORM, transaction management, and indexing strategies.",
      "Experience engineering production-grade RESTful APIs with input sanitization, rate limiting, and structured logging.",
      "Solid understanding of Docker containers, environment secret management, and microservice communication.",
      "Familiarity with automated API testing (Jest, Supertest, Postman collections).",
      "Degree in Computer Science, Information Technology, or equivalent practical software engineering experience.",
    ],
    niceToHave: [
      "Experience with PostgreSQL / Prisma ORM in addition to MongoDB.",
      "Working knowledge of AWS services (S3, SQS, CloudWatch, Lambda).",
      "Prior work on enterprise ERP, HRMS, or student lifecycle management software.",
    ],
    whatWeOffer: [
      "Top-tier compensation package with performance-linked annual bonuses.",
      "Apple MacBook or high-powered Linux developer workstation of your choice.",
      "Annual education stipend for technical certifications (AWS Solutions Architect, CKA, etc.).",
      "Zero-micromanagement culture with autonomous project delivery ownership.",
      "Premium family healthcare cover and comprehensive health checkups.",
    ],
    techStackDetails: [
      { name: "Node.js", role: "Backend Runtime" },
      { name: "Express.js", role: "REST Microframework" },
      { name: "MongoDB", role: "Document Database" },
      { name: "Redis", role: "High-Speed Cache & Queues" },
      { name: "Docker", role: "Containerization" },
      { name: "AWS", role: "Cloud Infrastructure" },
    ],
    hiringLead: {
      name: "Rohit Kulkarni",
      role: "Principal Backend Architect",
      department: "Platform Engineering",
      initials: "RK",
      avatarBg: "bg-indigo-600",
    },
  },
  {
    id: "ai-machine-learning-engineer",
    slug: "ai-machine-learning-engineer",
    title: "AI & Machine Learning Engineer",
    department: "AI & Data",
    type: "Full-Time",
    location: "Gurugram, HQ / Remote Eligible",
    experience: "2–5 Years",
    salary: "₹14L – ₹26L PA",
    status: "Urgent",
    openings: 2,
    postedDate: "1 day ago",
    tags: ["Python", "PyTorch", "LLMs", "LangChain", "RAG", "ChromaDB", "FastAPI"],
    description:
      "Pioneer production-grade agentic AI systems, enterprise RAG search engines, and domain-tuned generative models for real-world enterprise automation and intelligent curriculum adaptation.",
    aboutTeam:
      "The Applied AI Research Lab at GoTechEdu translates cutting-edge research in foundation models, autonomous tool-use swarms, and dense vector retrieval into dependable enterprise software.",
    responsibilities: [
      "Design and deploy production Retrieval-Augmented Generation (RAG) architectures with hybrid sparse-dense vector search.",
      "Build autonomous multi-agent systems using LangChain, LangGraph, and custom tool-calling function interfaces.",
      "Fine-tune open-source models (Llama 3, Mistral, Qwen) using parameter-efficient fine-tuning (PEFT / LoRA / QLoRA).",
      "Develop high-throughput asynchronous inference APIs utilizing FastAPI, vLLM, and Triton Inference Server.",
      "Implement comprehensive LLM evaluation frameworks (faithfulness, hallucination detection, latency profiling, and guardrails).",
      "Partner with product teams to embed generative intelligence directly into HRMS, automated assessment, and code mentorship tools.",
    ],
    requirements: [
      "2 to 5 years hands-on experience developing ML/AI software with Python, PyTorch, or TensorFlow.",
      "Demonstrated track record building production LLM applications, agent workflows, or semantic search systems.",
      "Strong understanding of vector databases (ChromaDB, Pinecone, Milvus, Qdrant) and embedding models.",
      "Proficiency writing clean, asynchronous Python code with FastAPI, Pydantic, and Docker.",
      "Familiarity with prompt engineering techniques, structured JSON outputs, and guardrails frameworks.",
      "Strong foundation in linear algebra, probability, NLP tokenization, and transformer architectures.",
    ],
    niceToHave: [
      "Published research or open-source packages in the AI/ML domain.",
      "Experience with GPU cluster management, CUDA profiling, and tensor parallelism.",
      "Hands-on experience fine-tuning models on multi-GPU AWS EC2 (p4d/g5) instances.",
    ],
    whatWeOffer: [
      "Industry-leading salary with lucrative equity incentives in our AI venture division.",
      "Unlimited GPU cloud compute budget on AWS, RunPod, and Lambda Labs.",
      "Top-tier Apple MacBook Pro Max or Linux dual-RTX 4090 workstation.",
      "Fully sponsored attendance at leading global AI conferences (NeurIPS, ICML, CVPR).",
      "Flexible remote working setup with global collaboration.",
    ],
    techStackDetails: [
      { name: "Python 3.12", role: "Core Language" },
      { name: "FastAPI", role: "Asynchronous APIs" },
      { name: "PyTorch", role: "Deep Learning" },
      { name: "LangGraph", role: "Multi-Agent Orchestration" },
      { name: "ChromaDB", role: "Vector Store" },
      { name: "vLLM", role: "High-Throughput Inference" },
    ],
    hiringLead: {
      name: "Dr. Vikram Sharma",
      role: "Head of AI Research",
      department: "AI Innovation Lab",
      initials: "VS",
      avatarBg: "bg-emerald-600",
    },
  },
  {
    id: "cloud-devops-infrastructure-lead",
    slug: "cloud-devops-infrastructure-lead",
    title: "Cloud & DevOps Infrastructure Lead",
    department: "Cloud & DevOps",
    type: "Full-Time",
    location: "Gurugram / Hybrid",
    experience: "3–6 Years",
    salary: "₹15L – ₹28L PA",
    status: "Active",
    openings: 1,
    postedDate: "3 days ago",
    tags: ["AWS", "Kubernetes", "Terraform", "Docker", "CI/CD", "Prometheus", "Linux"],
    description:
      "Take ownership of our multi-cloud infrastructure, automated GitOps pipelines, container orchestration, and 99.99% high-availability SLA architectures across global server fleets.",
    aboutTeam:
      "The Infrastructure & Reliability Engineering team ensures our customer-facing applications and training sandboxes remain resilient, auto-scaling, and impervious to outages.",
    responsibilities: [
      "Architect, provision, and maintain multi-region cloud environments across AWS and Azure using Terraform (IaC).",
      "Manage production Kubernetes (EKS) clusters, configuring ingress controllers, network policies, and horizontal pod autoscalers.",
      "Build zero-downtime blue/green and canary deployment pipelines with GitHub Actions, ArgoCD, and Docker.",
      "Establish observability, alerting, and distributed tracing stacks using Prometheus, Grafana, and OpenTelemetry.",
      "Enforce cloud security guardrails, IAM least-privilege policies, secret management (Vault), and compliance audits.",
      "Collaborate with software engineers to optimize database backups, disaster recovery drills, and FinOps cloud spend.",
    ],
    requirements: [
      "3 to 6 years of experience in DevOps, Site Reliability Engineering, or Cloud Architecture roles.",
      "Deep expertise with AWS cloud services (VPC, EKS, RDS, S3, CloudFront, IAM, Route 53).",
      "Proficiency in Terraform / OpenTofu for modular Infrastructure as Code management.",
      "Strong command of Linux administration, shell scripting, and container internals.",
      "Solid experience configuring CI/CD pipelines with automated security linting and test execution.",
    ],
    niceToHave: [
      "AWS Certified Solutions Architect – Professional or CKA (Certified Kubernetes Administrator) credentials.",
      "Hands-on experience with Red Hat Enterprise Linux (RHEL) systems administration.",
      "Familiarity with multi-cloud egress cost optimization and FinOps tooling.",
    ],
    whatWeOffer: [
      "Competitive executive compensation package with bi-annual performance perks.",
      "Complete freedom to choose your workstation hardware and ergonomic setup.",
      "Annual sponsorship for advanced certifications and international DevOps summits.",
      "Premium health, dental, and personal accident cover for you and your dependents.",
    ],
    techStackDetails: [
      { name: "AWS", role: "Primary Cloud Provider" },
      { name: "Kubernetes (EKS)", role: "Container Orchestration" },
      { name: "Terraform", role: "Infrastructure as Code" },
      { name: "ArgoCD", role: "GitOps Continuous Delivery" },
      { name: "Prometheus", role: "Metrics & Alerting" },
      { name: "Linux / RHEL", role: "Operating System" },
    ],
    hiringLead: {
      name: "Sarah Jenkins",
      role: "Principal Cloud Architect",
      department: "DevOps & SRE",
      initials: "SJ",
      avatarBg: "bg-purple-600",
    },
  },
  {
    id: "lead-ui-ux-product-designer",
    slug: "lead-ui-ux-product-designer",
    title: "Lead UI/UX Product Designer",
    department: "Design & UX",
    type: "Full-Time",
    location: "Gurugram, HQ / Remote Eligible",
    experience: "3–6 Years",
    salary: "₹12L – ₹22L PA",
    status: "Active",
    openings: 1,
    postedDate: "4 days ago",
    tags: ["Figma", "Design Systems", "User Research", "Prototyping", "Micro-Interactions", "Wireframing"],
    description:
      "Craft world-class digital experiences, comprehensive design systems, and delightful enterprise workflows that elevate how learners and enterprises interact with our products.",
    aboutTeam:
      "The Product Design team is obsessive about craft, user empathy, accessibility, and pixel-perfection. We partner directly with executive leadership to define the visual signature of GoTechEdu.",
    responsibilities: [
      "Own the end-to-end product design lifecycle: user discovery, wireframing, high-fidelity UI design, and interactive prototyping in Figma.",
      "Maintain, evolve, and document our comprehensive design token system across web, mobile, and responsive touchpoints.",
      "Conduct qualitative user interviews, usability testing sessions, and translate behavioral insights into actionable UI improvements.",
      "Collaborate tightly with frontend engineers to ensure design implementation fidelity, responsive behavior, and smooth animations.",
      "Create marketing assets, interactive course preview visualizers, and polished dashboard templates.",
    ],
    requirements: [
      "3 to 6 years of experience designing complex web applications, B2B SaaS, or EdTech products.",
      "A standout design portfolio showcasing user-centered problem solving, modern visual aesthetics, and structured design systems.",
      "Expert-level proficiency with Figma, auto-layout, interactive component variants, and design token libraries.",
      "Strong understanding of web accessibility standards (WCAG 2.1 AA) and modern frontend constraints.",
      "Clear communication skills with the ability to articulate design rationale to cross-functional stakeholders.",
    ],
    niceToHave: [
      "Basic understanding of HTML, CSS, and Tailwind CSS classes.",
      "Experience with motion design tools (Framer, After Effects, Lottie animations).",
    ],
    whatWeOffer: [
      "Top-tier compensation package with comprehensive healthcare coverage.",
      "Latest Apple MacBook Pro 16\" with calibrated 4K external display setup.",
      "Unlimited Figma, Adobe Creative Cloud, and generative design tool subscriptions.",
      "Flexible schedule with hybrid autonomy and creative freedom.",
    ],
    techStackDetails: [
      { name: "Figma", role: "Primary Design & Prototyping" },
      { name: "Design Tokens", role: "Cross-Platform Consistency" },
      { name: "Framer", role: "High-Fidelity Motion Prototypes" },
      { name: "FigJam", role: "User Journey & Architecture Mapping" },
    ],
    hiringLead: {
      name: "Pooja Malhotra",
      role: "Head of Product Experience",
      department: "Product & Design",
      initials: "PM",
      avatarBg: "bg-pink-600",
    },
  },
  {
    id: "technical-mentor-fullstack-devops",
    slug: "technical-mentor-fullstack-devops",
    title: "Senior Technical Mentor & EdTech Lead",
    department: "Education & Mentorship",
    type: "Full-Time",
    location: "Gurugram, HQ / Remote Eligible",
    experience: "3–7 Years",
    salary: "₹10L – ₹18L PA",
    status: "Active",
    openings: 2,
    postedDate: "5 days ago",
    tags: ["Full-Stack", "Mentorship", "Curriculum", "MERN", "DevOps", "Code Review"],
    description:
      "Inspire and shape the next generation of software engineers through live coding masterclasses, real-world project mentorship, and curriculum architecture at GoTechEdu Academy.",
    aboutTeam:
      "The Academic & Mentorship Squad bridges the gap between college curricula and real production software engineering. We believe in learning by shipping real software.",
    responsibilities: [
      "Lead interactive, hands-on live code walkthroughs and system architecture workshops for ambitious learners.",
      "Review learner project pull requests, providing constructive feedback on code structure, security, and best practices.",
      "Design capstone project specifications mirroring real-world enterprise SaaS and microservice environments.",
      "Conduct 1-on-1 technical mock interviews, resume reviews, and career coaching sessions.",
      "Continuously refine and update course curricula to incorporate emerging technologies and industry best practices.",
    ],
    requirements: [
      "3+ years of professional software engineering experience in full-stack web development or cloud DevOps.",
      "Passion for teaching, public speaking, and breaking down complex technical concepts into intuitive explanations.",
      "Strong proficiency in JavaScript/TypeScript, React, Node.js, and relational or document databases.",
      "Patience, empathy, and excellent verbal communication in English and Hindi.",
    ],
    niceToHave: [
      "Prior experience as a technical trainer, bootcamp instructor, or tech conference speaker.",
      "Active YouTube channel, technical blog, or popular open-source tutorials.",
    ],
    whatWeOffer: [
      "Generous base salary plus lucrative performance incentives on student placement milestones.",
      "Latest MacBook and professional studio recording equipment (Shure mic, 4K camera, lighting).",
      "Great work-life balance with structured cohort schedules.",
      "Full family health insurance coverage and annual wellness allowances.",
    ],
    techStackDetails: [
      { name: "JavaScript / TS", role: "Primary Language" },
      { name: "React & Next.js", role: "Frontend Teaching" },
      { name: "Node.js & MongoDB", role: "Backend Teaching" },
      { name: "Git & GitHub", role: "Version Control Workflows" },
    ],
    hiringLead: {
      name: "Aman Gupta",
      role: "Dean of Engineering Mentorship",
      department: "GoTechEdu Academy",
      initials: "AG",
      avatarBg: "bg-amber-600",
    },
  },
];

/**
 * Helper to retrieve a job by slug or ID with fallback to sample data
 */
export function getFallbackJob(identifier: string): CareerJob | undefined {
  const clean = (identifier || "").trim().toLowerCase();
  return defaultCareers.find(
    (job) =>
      job.slug.toLowerCase() === clean ||
      job.id.toLowerCase() === clean ||
      job.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") === clean
  );
}
