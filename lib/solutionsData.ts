export interface SolutionDetail {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  desc: string;
  longOverview: string;
  coverImage: string;
  secondaryImage: string;
  accentColor: string;
  badgeBg: string;
  iconName: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  techStack: {
    category: string;
    items: string[];
  }[];
  deliverables: string[];
  businessImpact: {
    metric: string;
    label: string;
    detail: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const solutionsData: Record<string, SolutionDetail> = {
  software: {
    slug: "software",
    name: "Software & Application Development",
    badge: "Core Engineering",
    tagline: "Custom Enterprise Software, ERP/CRM Suites & Scalable Web/Mobile Apps",
    desc: "End-to-end custom business software, transactional web applications, and cross-platform mobile systems built for speed and long-term maintainability.",
    longOverview:
      "We design, build, and maintain mission-critical enterprise applications that automate core business workflows, replace fragmented legacy tools, and provide seamless experiences across desktop and mobile devices. From high-concurrency transactional databases to intuitive executive portals, our engineering adheres to clean architecture, automated testing, and zero-compromise security.",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    accentColor: "blue",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    iconName: "Code2",
    capabilities: [
      {
        title: "Custom ERP & CRM Enterprise Systems",
        description:
          "Modular platforms for multi-currency ledgers, inventory reservation, pipeline deals, procurement tracking, and role-based permissions.",
      },
      {
        title: "High-Performance Web Applications",
        description:
          "Server-rendered Next.js and React frontends backed by microservices, GraphQL gateways, and Redis caching for sub-second responses.",
      },
      {
        title: "Cross-Platform Mobile Engineering",
        description:
          "Native-feel React Native and Flutter mobile apps with offline-first SQLite synchronization, push alerts, and biometric security.",
      },
      {
        title: "API Gateway & Microservice Architectures",
        description:
          "Decoupled Go, Node.js, and Python backend services connected via event-driven Apache Kafka and RabbitMQ queues.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js / NestJS", "Go", "Python", "GraphQL", "REST"] },
      { category: "Data Layer", items: ["PostgreSQL", "MongoDB", "Redis", "Kafka"] },
      { category: "Mobile", items: ["React Native", "Flutter", "Offline SQLite"] },
    ],
    deliverables: [
      "Production-ready, fully documented source code",
      "Automated CI/CD build and container deployment scripts",
      "Comprehensive OpenAPI / Swagger API documentation",
      "Unit, integration, and load testing coverage reports",
      "Admin dashboards with granular role-based access control (RBAC)",
    ],
    businessImpact: [
      { metric: "99.99%", label: "System Availability", detail: "High-uptime architecture with automated health checks" },
      { metric: "3.5x", label: "Workflow Velocity", detail: "Reduction in manual operational steps across teams" },
      { metric: "<200ms", label: "Average API Response", detail: "Optimized indexing and distributed in-memory cache" },
    ],
    faqs: [
      {
        question: "Do you build custom ERP software tailored to our business?",
        answer:
          "Yes. Unlike rigid off-the-shelf software, our custom ERP platforms are designed around your exact business logic, approval hierarchies, and reporting requirements.",
      },
      {
        question: "Can our mobile application work without active internet access?",
        answer:
          "Yes. We specialize in offline-first mobile architectures that store transactions locally in encrypted SQLite storage and synchronize with your central cloud database once connectivity resumes.",
      },
      {
        question: "How do you handle source code ownership and licensing?",
        answer:
          "All intellectual property, proprietary code, database schemas, and documentation created for your project belong 100% to your organization upon project handover.",
      },
    ],
  },

  cloud: {
    slug: "cloud",
    name: "Cloud, DevOps & Automation",
    badge: "Infrastructure",
    tagline: "Multi-Cloud Infrastructure, Kubernetes Orchestration & Continuous Delivery",
    desc: "Multi-cloud architecture, automated CI/CD delivery pipelines, and production Kubernetes clusters engineered for high availability and zero downtime.",
    longOverview:
      "We engineer enterprise cloud foundations across AWS, Microsoft Azure, and Google Cloud Platform. By combining Infrastructure-as-Code (Terraform/Pulumi), Kubernetes container orchestration, and automated GitOps pipelines, we eliminate configuration drift, slash hosting waste, and enable zero-downtime application releases.",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    accentColor: "sky",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
    iconName: "Cloud",
    capabilities: [
      {
        title: "Multi-Cloud & Hybrid Cloud Architecture",
        description:
          "Active-active or active-passive cloud topologies spanning AWS, Azure, and GCP to guarantee high-availability SLA compliance.",
      },
      {
        title: "Kubernetes & Service Mesh Orchestration",
        description:
          "Production-hardened EKS/GKE clusters with automated Horizontal Pod Autoscaling (HPA), Karpenter node provisioning, and Istio mTLS.",
      },
      {
        title: "Automated GitOps & CI/CD Pipelines",
        description:
          "ArgoCD declarative deployments, GitHub Actions pipelines, automated test gating, and image CVE container scanning.",
      },
      {
        title: "Cloud FinOps & Cost Optimization",
        description:
          "Spot instance hedging, automated idle resource pruning, and architectural reserved instances cutting cloud bills by up to 45%.",
      },
    ],
    techStack: [
      { category: "Cloud Providers", items: ["AWS", "Microsoft Azure", "Google Cloud (GCP)"] },
      { category: "Containers & Mesh", items: ["Kubernetes (EKS/GKE)", "Docker", "Istio", "Helm"] },
      { category: "IaC & GitOps", items: ["Terraform", "Pulumi", "ArgoCD", "GitHub Actions"] },
      { category: "Monitoring", items: ["Prometheus", "Grafana", "Datadog", "OpenTelemetry"] },
    ],
    deliverables: [
      "Declarative Terraform / Pulumi Infrastructure as Code repository",
      "Automated CI/CD pipeline blueprints with image signing",
      "Zero-downtime blue/green or canary deployment scripts",
      "Unified Prometheus / Grafana observability and alert runbooks",
      "Disaster recovery and automated backup playbooks",
    ],
    businessImpact: [
      { metric: "Zero", label: "Downtime Deployments", detail: "Canary rollouts and automated health rollbacks" },
      { metric: "40%", label: "Cloud Cost Savings", detail: "FinOps scaling policies and right-sized compute" },
      { metric: "<5 Mins", label: "Pipeline Cycle Time", detail: "High-speed parallel test execution and deployment" },
    ],
    faqs: [
      {
        question: "Can you migrate our on-premise servers to AWS or Azure?",
        answer:
          "Yes. We manage end-to-end cloud migrations using lift-and-shift or container modernization strategies, ensuring data integrity and zero business disruption.",
      },
      {
        question: "How do you prevent single points of failure in the cloud?",
        answer:
          "We deploy across multiple availability zones with global load balancers, multi-region database read-replicas, and automated failover routing.",
      },
    ],
  },

  transformation: {
    slug: "transformation",
    name: "Digital Transformation",
    badge: "Modernization",
    tagline: "Legacy System Modernization, Workflow Automation & Operational Analytics",
    desc: "Modernize legacy monoliths into cloud-native microservices, automate operational workflows, and turn fragmented business data into actionable analytics.",
    longOverview:
      "Digital transformation is more than adopting new tools; it is about restructuring technical agility. We guide established enterprises through legacy modernization, replacing fragile manual spreadsheets with automated software pipelines, centralizing operational telemetry, and empowering leadership with real-time decision dashboards.",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    accentColor: "purple",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    iconName: "Workflow",
    capabilities: [
      {
        title: "Legacy Monolith Modernization",
        description:
          "Decompose slow legacy mainframes and monolithic codebases into modular microservices using the Strangler Fig pattern.",
      },
      {
        title: "Automated Business Process Pipelines",
        description:
          "Eliminate manual data re-entry with webhook-driven event buses that synchronize CRM, accounting, and logistics automatically.",
      },
      {
        title: "Unified Data Warehousing & Analytics",
        description:
          "Centralize disparate databases into Snowflake or BigQuery with automated ETL pipelines and executive BI visualization.",
      },
      {
        title: "Operational Visibility & KPI Tracking",
        description:
          "Real-time department telemetry dashboards providing continuous insight into throughput, inventory, and revenue.",
      },
    ],
    techStack: [
      { category: "Integration", items: ["Apache Kafka", "RabbitMQ", "REST Gateways", "Webhooks"] },
      { category: "Data Warehousing", items: ["Snowflake", "Google BigQuery", "dbt", "PostgreSQL"] },
      { category: "Modernization", items: ["Docker", "Go", "Node.js", "Microservices"] },
      { category: "BI & Visualization", items: ["Apache Superset", "Power BI", "Metabase", "Grafana"] },
    ],
    deliverables: [
      "Decomposed service architecture roadmap and data dictionary",
      "Automated ETL and database migration pipelines",
      "Standardized API integration specifications",
      "Executive business intelligence dashboards",
      "Staff enablement and operational runbooks",
    ],
    businessImpact: [
      { metric: "75%", label: "Faster Cycle Times", detail: "Operational process execution automated from days to minutes" },
      { metric: "100%", label: "Data Centralization", detail: "Single source of truth across ERP, sales, and logistics" },
      { metric: "Zero", label: "Data Drift", detail: "Automated schema validation and continuous synchronization" },
    ],
    faqs: [
      {
        question: "Can we modernize our legacy software without halting business operations?",
        answer:
          "Yes. We use the Strangler Fig pattern to replace legacy features incrementally behind an API gateway, ensuring continuous uptime while legacy modules are phased out.",
      },
      {
        question: "How do you ensure data accuracy during database migrations?",
        answer:
          "We implement dual-writing and automated shadow validation pipelines that verify record parity between the old and new systems before switching traffic over.",
      },
    ],
  },

  "emerging-tech": {
    slug: "emerging-tech",
    name: "Emerging Technology",
    badge: "Next-Gen Tech",
    tagline: "Edge Computing, Industrial IoT Protocols & Connected Architectures",
    desc: "Connect physical environments and intelligent edge endpoints through scalable IoT protocols, edge compute nodes, and decentralized architectures.",
    longOverview:
      "We design connected software architectures that bridge the physical and digital divide. By engineering edge compute runtimes, low-latency MQTT/Websocket streams, and resilient IoT device ingestion pipelines, we help enterprises monitor physical assets, optimize industrial plants, and process sensor data directly at the edge.",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    accentColor: "amber",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    iconName: "Zap",
    capabilities: [
      {
        title: "Industrial IoT Ingestion Pipelines",
        description:
          "High-throughput MQTT and CoAP brokers ingesting telemetry from thousands of sensors into time-series databases.",
      },
      {
        title: "Edge Compute & Low-Latency Processing",
        description:
          "Lightweight Go and Rust runtimes executing data filtering, anomaly detection, and decision logic directly on gateway hardware.",
      },
      {
        title: "Digital Twin Real-Time Modeling",
        description:
          "Virtual asset modeling mirroring physical manufacturing lines and energy grids with sub-second bi-directional telemetry.",
      },
      {
        title: "Decentralized & Cryptographic Verification",
        description:
          "Tamper-proof audit logs and smart contract verification where multi-party cryptographic proof is strictly required.",
      },
    ],
    techStack: [
      { category: "Edge & Embedded", items: ["Rust", "Go", "C++", "WebAssembly (WASM)"] },
      { category: "IoT Protocols", items: ["MQTT", "CoAP", "WebSockets", "gRPC", "OPC UA"] },
      { category: "Time-Series Data", items: ["TimescaleDB", "InfluxDB", "ClickHouse", "Kafka"] },
      { category: "Edge Platforms", items: ["AWS IoT Greengrass", "Azure IoT Edge", "K3s"] },
    ],
    deliverables: [
      "Edge firmware / gateway software binaries",
      "Scalable telemetry ingestion cluster with auto-scaling brokers",
      "Time-series database schema and aggregation queries",
      "Real-time sensor monitoring web dashboard",
      "Device provisioning and OTA (over-the-air) update pipeline",
    ],
    businessImpact: [
      { metric: "<50ms", label: "Edge Decision Latency", detail: "Immediate local threshold alerting without cloud roundtrip" },
      { metric: "100k+", label: "Sensor Capacity", detail: "Concurrent device connections supported per ingestion broker" },
      { metric: "99.9%", label: "Sensor Uptime", detail: "Store-and-forward caching preventing telemetry loss during outages" },
    ],
    faqs: [
      {
        question: "What happens if an edge IoT gateway loses internet connectivity?",
        answer:
          "Our edge software features localized store-and-forward ring buffers that cache incoming sensor telemetry locally and flush it sequentially once connectivity is re-established.",
      },
      {
        question: "Can you connect with legacy industrial hardware protocols like Modbus or OPC UA?",
        answer:
          "Yes. We build industrial translation layers that convert legacy PLC protocols (Modbus, OPC UA) into standardized JSON/MQTT formats for modern cloud processing.",
      },
    ],
  },

  "managed-services": {
    slug: "managed-services",
    name: "IT & Managed Services",
    badge: "Operations",
    tagline: "24/7 Operations, SRE Telemetry, Infrastructure Maintenance & SLA Commitments",
    desc: "Continuous 24/7 system reliability, proactive telemetry monitoring, routine maintenance, and dedicated technical support with defined SLA commitments.",
    longOverview:
      "We provide managed Site Reliability Engineering (SRE) and dedicated technical operations for mission-critical software stacks. Our engineers monitor performance round-the-clock, patch critical vulnerabilities proactively, maintain database backups, and guarantee agreed response times so your product remains fast, stable, and secure.",
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80",
    accentColor: "indigo",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    iconName: "Server",
    capabilities: [
      {
        title: "24/7 SRE & Proactive Telemetry Monitoring",
        description:
          "Continuous oversight of servers, microservice latencies, and database queries with automated pager alerts.",
      },
      {
        title: "Service Level Agreement (SLA) Guarantees",
        description:
          "Defined incident response tiers guaranteeing 15-minute triage for critical outages and dedicated engineering support.",
      },
      {
        title: "Automated Backups & Disaster Recovery",
        description:
          "Hourly point-in-time database snapshots and automated multi-region restore playbooks tested continuously.",
      },
      {
        title: "Continuous Patching & Vulnerability Remediation",
        description:
          "Systematic container OS updates, SSL certificate rotation, dependency CVE remediation, and kernel security patches.",
      },
    ],
    techStack: [
      { category: "Observability", items: ["Datadog", "Prometheus", "Grafana", "OpenTelemetry"] },
      { category: "Incident Management", items: ["PagerDuty", "Opsgenie", "Slack Workflows"] },
      { category: "Automation", items: ["Ansible", "Terraform", "Bash", "Python"] },
      { category: "Backups & DR", items: ["AWS Backup", "Velero K8s", "Postgres WAL-G"] },
    ],
    deliverables: [
      "Custom SLA agreement contract and escalation matrix",
      "Dedicated 24/7 on-call engineering dispatch channel",
      "Unified APM observability and system health dashboards",
      "Automated disaster recovery drill verification logs",
      "Monthly performance and capacity utilization reports",
    ],
    businessImpact: [
      { metric: "<15 Min", label: "Critical Incident Response", detail: "Guaranteed SLA triage time for production incidents" },
      { metric: "99.99%", label: "Production Uptime", detail: "Maintained availability across managed client clusters" },
      { metric: "100%", label: "Automated Backups", detail: "Encrypted point-in-time recovery tested every sprint" },
    ],
    faqs: [
      {
        question: "How do your incident response SLAs work?",
        answer:
          "We offer tiered SLAs. Critical tier-1 issues triggering high-priority alerts guarantee immediate on-call engineer triage within 15 minutes 24/7/365.",
      },
      {
        question: "Do you take over maintenance of applications built by other teams?",
        answer:
          "Yes. We conduct a structured 2-week architectural audit to document technical debt, configure automated telemetry, and transition operational support smoothly.",
      },
    ],
  },

  ai: {
    slug: "ai",
    name: "AI & Machine Learning",
    badge: "Intelligence",
    tagline: "Enterprise RAG Pipelines, Domain-Adapted LLMs & Autonomous Agentic Swarms",
    desc: "Practical enterprise AI systems integrating foundation model fine-tuning, Retrieval-Augmented Generation (RAG), and autonomous agentic workflows.",
    longOverview:
      "We build deterministic, enterprise-grade AI systems that go far beyond standard chatbot prompts. By deploying Hybrid Vector Search (BM25 + Dense Vectors), autonomous agent swarms with deterministic guardrails, and private model fine-tuning (LoRA), we allow organizations to automate customer support, extract unstructured data, and generate business insights without hallucinations.",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    accentColor: "rose",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
    iconName: "Brain",
    capabilities: [
      {
        title: "Enterprise RAG & Hybrid Vector Search",
        description:
          "Combining keyword BM25 with Pinecone/Milvus dense vectors for hallucination-free document retrieval with exact citations.",
      },
      {
        title: "Autonomous Agentic Workflows",
        description:
          "Multi-agent architectures (LangGraph/CrewAI) that break down complex business tasks, execute APIs, and validate output.",
      },
      {
        title: "Private Model Fine-Tuning & Quantization",
        description:
          "LoRA/QLoRA adaptation of open foundation models (Llama 3.3, Mistral, DeepSeek) hosted in private VPCs with zero data leakage.",
      },
      {
        title: "Multimodal Document Intelligence",
        description:
          "Sub-second unstructured PDF, invoice, and contract extraction using vision-language models and structured JSON schemas.",
      },
    ],
    techStack: [
      { category: "Agent Frameworks", items: ["LangGraph", "CrewAI", "LlamaIndex", "LangChain"] },
      { category: "Vector Databases", items: ["Pinecone", "Milvus", "ChromaDB", "pgvector"] },
      { category: "Inference & Serving", items: ["vLLM", "Ollama", "TensorRT-LLM", "HuggingFace"] },
      { category: "Models Supported", items: ["Llama 3.3", "DeepSeek", "Mistral", "OpenAI / Anthropic"] },
    ],
    deliverables: [
      "Production-grade RAG ingestion and chunking pipeline",
      "Deterministic agent state machines with human-in-the-loop fallback",
      "Air-gapped model serving infrastructure in client VPC",
      "Comprehensive evaluation benchmark harnesses",
      "Executive telemetry tracking token usage, latency, and precision",
    ],
    businessImpact: [
      { metric: "<120ms", label: "Semantic Search Latency", detail: "Fast hybrid vector query retrieval across millions of docs" },
      { metric: "99.8%", label: "Fact Precision", detail: "Deterministic guardrails eliminating hallucinated claims" },
      { metric: "60%", label: "Inference Cost Reduction", detail: "Private open-source model quantization vs generic cloud APIs" },
    ],
    faqs: [
      {
        question: "How do you ensure our proprietary business data isn't trained on by external AI providers?",
        answer:
          "We deploy models inside your own private VPC (Virtual Private Cloud) using open-source weights (Llama 3.3, Mistral) with zero external telemetry, or use enterprise zero-data-retention APIs.",
      },
      {
        question: "How do you prevent AI hallucinations in legal or financial software?",
        answer:
          "We enforce Hybrid Dense-Sparse RAG retrieval with strict context boundaries, schema validation, and source document citation matching before any answer is returned to the user.",
      },
    ],
  },

  networking: {
    slug: "networking",
    name: "Networking & Infrastructure",
    badge: "Connectivity",
    tagline: "Enterprise SD-WAN, Secure Routing, Mesh Connectivity & Datacenter Design",
    desc: "Enterprise networking architectures, software-defined networks (SD-WAN), and resilient data center connections optimized for throughput and privacy.",
    longOverview:
      "Modern distributed engineering requires predictable, secure network connectivity. We design enterprise network topologies, software-defined WANs (SD-WAN), and encrypted VPN meshes that link branch offices, cloud environments, and remote team endpoints with deterministic throughput, DDoS protection, and continuous packet auditing.",
    coverImage:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    accentColor: "teal",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
    iconName: "Network",
    capabilities: [
      {
        title: "Enterprise SD-WAN & Multi-Branch Interconnect",
        description:
          "Software-defined routing optimizing traffic across multiple uplinks with automated failover and QoS prioritization.",
      },
      {
        title: "Zero-Trust Encrypted WireGuard / Mesh VPNs",
        description:
          "High-throughput encrypted peer-to-peer tunnels connecting remote staff to corporate cloud VPCs without exposed public IPs.",
      },
      {
        title: "DDoS Mitigation & High-Capacity Edge CDN",
        description:
          "Global Anycast network routing and layer-3/4/7 volumetric DDoS protection scrubbing malicious traffic before it reaches origin servers.",
      },
      {
        title: "Datacenter Micro-Segmentation & VLANs",
        description:
          "Granular internal network zoning preventing lateral adversary movement during credential compromise events.",
      },
    ],
    techStack: [
      { category: "SD-WAN & Routing", items: ["Cisco", "Fortinet", "Palo Alto Networks", "BGP / OSPF"] },
      { category: "Mesh & VPN", items: ["WireGuard", "Tailscale", "OpenVPN", "IPsec"] },
      { category: "Edge & CDN", items: ["Cloudflare Enterprise", "AWS CloudFront", "Fastly"] },
      { category: "Traffic Analysis", items: ["Wireshark", "Zeek", "Suricata", "NetFlow"] },
    ],
    deliverables: [
      "Enterprise network topology diagrams and IP address scheme (IPAM)",
      "Automated router and firewall configuration scripts",
      "High-availability multi-wan failover rules",
      "WireGuard / Zero-Trust VPN client rollout profiles",
      "Continuous network latency and packet loss telemetry dashboards",
    ],
    businessImpact: [
      { metric: "10 Gbps+", label: "Throughput Capacity", detail: "Optimized network pipelines handling high-traffic enterprise loads" },
      { metric: "<2ms", label: "Intra-Cluster Latency", detail: "Direct peering and low-latency internal routing" },
      { metric: "100%", label: "Encrypted Traffic", detail: "End-to-end mTLS and IPsec encryption across all endpoints" },
    ],
    faqs: [
      {
        question: "Can you help connect multiple global offices to our cloud VPC?",
        answer:
          "Yes. We configure encrypted site-to-site IPsec and WireGuard mesh tunnels with redundant carrier failover so all locations communicate securely and seamlessly.",
      },
      {
        question: "How do you protect against distributed denial of service (DDoS) attacks?",
        answer:
          "We deploy Anycast edge proxies and automated rate-limiting scrubbers that absorb multi-gigabit volumetric attacks at the edge without reaching your backend origin.",
      },
    ],
  },

  cybersecurity: {
    slug: "cybersecurity",
    name: "Cybersecurity",
    badge: "Security & Risk",
    tagline: "Zero-Trust Defense, SOC 2 Compliance, Pen Testing & 24/7 SIEM Telemetry",
    desc: "Comprehensive defense posture based on Zero Trust principles, continuous threat modeling, vulnerability assessments, and compliance audits.",
    longOverview:
      "Security is not a single product; it is an organizational discipline. We protect corporate workloads against sophisticated threat actors by deploying continuous identity verification (Zero Trust), least-privilege IAM, automated SIEM log telemetry, and offensive red-team penetration testing to ensure SOC 2, ISO 27001, and HIPAA compliance.",
    coverImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    accentColor: "emerald",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconName: "ShieldCheck",
    capabilities: [
      {
        title: "Zero-Trust Architecture & Identity Governance",
        description:
          "Hardware biometric FIDO2 authentication, conditional device health checks, and granular context-aware access controls.",
      },
      {
        title: "24/7 Managed SOC & SIEM Telemetry",
        description:
          "Real-time log correlation across endpoints, AWS/Azure clouds, and databases using Splunk and Microsoft Sentinel with AI threat hunting.",
      },
      {
        title: "Continuous VAPT & Red-Team Penetration Audits",
        description:
          "Simulated adversary attacks, OWASP Top 10 API fuzzing, automated SAST/DAST code scanning, and remediation verification.",
      },
      {
        title: "SOC 2 & ISO 27001 Compliance Readiness",
        description:
          "Comprehensive policy gap analysis, automated evidence collection, and auditor-ready control implementations.",
      },
    ],
    techStack: [
      { category: "SIEM & SOC", items: ["Splunk", "Microsoft Sentinel", "Wazuh", "CrowdStrike"] },
      { category: "Identity & IAM", items: ["Okta", "Keycloak", "FIDO2 / WebAuthn", "OIDC"] },
      { category: "Vulnerability Scanning", items: ["Burp Suite Pro", "OWASP ZAP", "Trivy", "Snyk"] },
      { category: "Compliance Frameworks", items: ["SOC 2 Type II", "ISO 27001", "HIPAA", "GDPR"] },
    ],
    deliverables: [
      "Comprehensive Threat Model and Risk Assessment Report",
      "Executive VAPT Penetration Test findings with CVE severities",
      "Zero-Trust IAM policy templates and conditional access rules",
      "24/7 SIEM alert playbooks and automated containment scripts",
      "Audit-ready SOC 2 / ISO 27001 evidence documentation",
    ],
    businessImpact: [
      { metric: "100%", label: "Zero-Trust Enforcement", detail: "Every API transaction, database query, and employee session verified" },
      { metric: "<10 Min", label: "Threat Containment", detail: "Automated isolation scripts neutralizing compromised endpoints" },
      { metric: "SOC 2", label: "Audit Readiness", detail: "Pre-configured compliance evidence saving months of preparation" },
    ],
    faqs: [
      {
        question: "What is the difference between traditional firewalls and Zero-Trust architecture?",
        answer:
          "Traditional firewalls assume everything inside the network perimeter is safe. Zero-Trust operates on 'never trust, always verify', evaluating device identity, context, and permissions on every single request.",
      },
      {
        question: "How often should an enterprise conduct VAPT penetration tests?",
        answer:
          "We recommend quarterly penetration tests, alongside continuous automated CI/CD dependency vulnerability scans on every code release.",
      },
    ],
  },
};

export function getSolutionBySlug(slug: string): SolutionDetail | null {
  return solutionsData[slug] || null;
}

export function getAllSolutions(): SolutionDetail[] {
  return Object.values(solutionsData);
}

export function getRelatedSolutions(currentSlug: string, count = 3): SolutionDetail[] {
  return Object.values(solutionsData)
    .filter((s) => s.slug !== currentSlug)
    .slice(0, count);
}
