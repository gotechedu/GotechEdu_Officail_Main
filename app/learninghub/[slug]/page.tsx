"use client";

import Link from "next/link";
import React, { useState, useEffect, use } from "react";
import { officialApi } from "@/lib/api";
import {
  validateName,
  validateEmail,
  validatePhone,
  sanitizeInput,
} from "@/lib/validation";

interface CourseDetail {
  id: string;
  slug?: string;
  title: string;
  category: string;
  duration: string;
  mode: string;
  level: string;
  badge: string;
  color: string;
  description: string;
  heroTagline: string;
  originalPrice: number;
  discountedPrice: number;
  emiStartsAt: number;
  rating: number;
  reviewsCount: number;
  enrolledStudents: number;
  lecturesCount: number;
  totalHours: string;
  nextBatchDate: string;
  careerOutcome: string;
  averageSalaryHike: string;
  techStack: string[];
  prerequisites: string[];
  whatYouWillLearn: string[];
  overviewParagraph: string;
  previewImage: string;
  syllabusModules: {
    moduleNumber: number;
    title: string;
    duration: string;
    lectures: {
      title: string;
      duration: string;
      isPreview: boolean;
      type: "video" | "doc" | "lab";
    }[];
  }[];
  instructors: {
    name: string;
    role: string;
    organization: string;
    rating: number;
    students: string;
    coursesCount: number;
    bio: string;
    avatar: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  batches?: {
    _id: string;
    name: string;
    batchCode: string;
    startDate: string;
    endDate: string;
    mode: string;
    scheduleDays: string[];
    startTime: string;
    endTime: string;
    status: string;
  }[];
}

const detailedCoursesDatabase: Record<string, CourseDetail> = {
  "fullstack-nextjs": {
    id: "fullstack-nextjs",
    title: "The Complete Full-Stack Next.js 15 & React: From Zero To Expert!",
    category: "Full-Stack Web Development",
    duration: "16 Weeks",
    totalHours: "120+ Hours",
    lecturesCount: 64,
    mode: "Live Online + Capstone Labs",
    level: "Beginner to Advanced",
    badge: "Bestseller",
    color: "from-emerald-600 via-teal-600 to-cyan-600",
    description:
      "Master modern web development by building 6+ enterprise production projects in 16 weeks. Learn React 19, Next.js 15 App Router, TypeScript, Tailwind CSS, PostgreSQL, Prisma ORM, and Cloud CI/CD.",
    heroTagline:
      "Master Full-Stack JavaScript & TypeScript by Building 6+ Real-World SaaS Projects. Learn Next.js 15, React 19, Databases, Auth, Server Actions & Cloud Deployment!",
    originalPrice: 49999,
    discountedPrice: 24999,
    emiStartsAt: 2083,
    rating: 4.88,
    reviewsCount: 14820,
    enrolledStudents: 42680,
    nextBatchDate: "September 15, 2026",
    careerOutcome: "Full-Stack Software Engineer (₹8L – ₹18L PA)",
    averageSalaryHike: "74%",
    previewImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "AWS",
      "GitHub Actions",
    ],
    overviewParagraph:
      "Are you new to modern web development or need an enterprise-grade refresher? This flagship bootcamp takes you from foundational JavaScript (ES6+) and TypeScript concepts to architecting scalable, multi-tenant SaaS platforms with Next.js 15 App Router, Server Actions, PostgreSQL, and Docker containerization.",
    whatYouWillLearn: [
      "Master React 19 architecture: Hooks, Server Components, optimistic UI, and Redux/Zustand state management.",
      "Build high-performance full-stack web applications with Next.js 15 App Router and Server Actions.",
      "Architect secure relational databases with PostgreSQL, Prisma ORM, and automated migration scripts.",
      "Implement robust Authentication & Role-Based Access Control (RBAC) with Auth.js and JWT tokens.",
      "Containerize applications with Docker and configure automated CI/CD pipelines on AWS & Vercel.",
      "Deploy 6+ portfolio-ready enterprise projects with 1:1 code reviews and direct placement referrals.",
    ],
    prerequisites: [
      "Basic understanding of HTML, CSS, and elementary programming logic.",
      "A computer (Windows, Mac, or Linux) with at least 8GB RAM.",
      "No prior React or Next.js experience required — we teach from foundations to advanced architecture.",
    ],
    syllabusModules: [
      {
        moduleNumber: 1,
        title: "Course Introduction & Development Environment Setup",
        duration: "1hr 45min",
        lectures: [
          {
            title: "Welcome to the Full-Stack Bootcamp & Roadmap",
            duration: "15 Min",
            isPreview: true,
            type: "video",
          },
          {
            title: "Setting Up VS Code, Node.js & TypeScript Tooling",
            duration: "25 Min",
            isPreview: true,
            type: "video",
          },
          {
            title: "Course Curriculum & Community Discord Access",
            duration: "10 Min",
            isPreview: true,
            type: "doc",
          },
          {
            title: "Git & GitHub Enterprise Collaboration Workflow",
            duration: "55 Min",
            isPreview: false,
            type: "lab",
          },
        ],
      },
      {
        moduleNumber: 2,
        title:
          "Modern JavaScript (ES6+), Async Engine & TypeScript Foundations",
        duration: "4hr 20min",
        lectures: [
          {
            title: "Event Loop, Closures, Promises & Async/Await Deep Dive",
            duration: "60 Min",
            isPreview: true,
            type: "video",
          },
          {
            title: "TypeScript Types, Interfaces, Generics & Strict Mode",
            duration: "75 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Functional Programming & Immutability Patterns",
            duration: "45 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Lab: Building an Interactive Type-Safe Task Engine",
            duration: "80 Min",
            isPreview: false,
            type: "lab",
          },
        ],
      },
      {
        moduleNumber: 3,
        title: "React 19 Architecture, Hooks & Component State Patterns",
        duration: "5hr 30min",
        lectures: [
          {
            title: "Component Lifecycle, Virtual DOM & React 19 Compiler",
            duration: "50 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Advanced Hooks: useActionState, useOptimistic, useMemo",
            duration: "70 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Global State Management with Zustand & Redux Toolkit",
            duration: "65 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Tailwind CSS Design System & Responsive Micro-Interactions",
            duration: "55 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Lab: E-Commerce Storefront with Real-Time Filter State",
            duration: "90 Min",
            isPreview: false,
            type: "lab",
          },
        ],
      },
      {
        moduleNumber: 4,
        title: "Next.js 15 App Router, Server Actions & SSR/SSG Mastery",
        duration: "6hr 15min",
        lectures: [
          {
            title: "Server Components vs. Client Components Architecture",
            duration: "60 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Dynamic Routing, Intercepting Routes & Parallel Routes",
            duration: "75 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Server Actions, Mutations & On-Demand Revalidation",
            duration: "70 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Authentication with Auth.js, OAuth 2.0 & Session Security",
            duration: "80 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Lab: Multi-Tenant Corporate Management Portal",
            duration: "90 Min",
            isPreview: false,
            type: "lab",
          },
        ],
      },
      {
        moduleNumber: 5,
        title: "PostgreSQL, Prisma ORM, Microservices & Docker Deployments",
        duration: "5hr 45min",
        lectures: [
          {
            title: "Relational Schema Modeling & SQL Performance Optimization",
            duration: "60 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Prisma ORM Relations, Transactions & Automated Migrations",
            duration: "65 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Containerizing Full-Stack Apps with Docker Multi-Stage",
            duration: "70 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Production AWS & Vercel Deployment with GitHub CI/CD",
            duration: "60 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Capstone Milestone: Full Multi-Tenant Cloud ERP System",
            duration: "90 Min",
            isPreview: false,
            type: "lab",
          },
        ],
      },
    ],
    instructors: [
      {
        name: "Dr. Vikram Sharma",
        role: "Lead Full-Stack Architect & Engineering Mentor",
        organization: "Ex-Google / GoTechEdu",
        rating: 4.9,
        students: "48,000+",
        coursesCount: 5,
        bio: "Dr. Vikram Sharma has over 12+ years of software engineering leadership experience architecting high-throughput distributed applications, mentoring over 45,000 developers worldwide.",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      },
    ],
    faqs: [
      {
        question:
          "When does the next live batch start and what is the schedule?",
        answer:
          "The upcoming cohort starts on September 15, 2026. We offer Weekend batches (Saturdays & Sundays, 10:00 AM – 1:00 PM IST) and Weekday Evening batches (Tuesdays & Thursdays, 7:30 PM – 9:30 PM IST). All sessions are recorded in full HD and posted immediately to your portal.",
      },
      {
        question: "Do I get 1:1 doubt clearing and placement assistance?",
        answer:
          "Yes! You receive 24/7 access to our dedicated Discord/Slack engineering channel with live teaching assistants, weekly 1:1 mentor code reviews, resume overhauls, mock interviews, and direct referrals to our 500+ hiring partners.",
      },
      {
        question: "Is there a money-back guarantee if I change my mind?",
        answer:
          "Yes, we provide an unconditional 100% 14-day money-back guarantee from the date of the first live class session if you are not completely satisfied.",
      },
      {
        question: "Are EMI and installment payment options available?",
        answer:
          "Yes, we offer 0% No-Cost EMI options for 3, 6, 9, and 12 months with all leading credit cards, debit cards, and NBFC partners.",
      },
      {
        question:
          "Will I receive an industry-recognized certificate upon completion?",
        answer:
          "Yes, after successfully completing the capstone project and assignments, you will receive an official verifiable digital GoTechEdu Certificate of Excellence with a unique credential ID.",
      },
    ],
  },
  "mern-stack": {
    id: "mern-stack",
    title: "Enterprise MERN Stack Architecture: From Zero To Architect!",
    category: "Full-Stack Node.js & React",
    duration: "16 Weeks",
    totalHours: "120+ Hours",
    lecturesCount: 58,
    mode: "Live Interactive + Cloud Labs",
    level: "Intermediate",
    badge: "High Demand",
    color: "from-emerald-600 to-teal-600",
    description:
      "Deep dive into full-cycle JavaScript and Node.js development. Build high-throughput REST APIs with Express.js, architect MongoDB database schemas, integrate Redis caching, and deploy microservices with Docker.",
    heroTagline:
      "Master High-Throughput Node.js APIs, MongoDB Aggregations, Redis Caching, WebSockets, and Dockerized Microservices on AWS Cloud!",
    originalPrice: 46000,
    discountedPrice: 22999,
    emiStartsAt: 1916,
    rating: 4.85,
    reviewsCount: 9420,
    enrolledStudents: 31200,
    nextBatchDate: "September 20, 2026",
    careerOutcome: "Full-Stack Node/React Developer (₹9L – ₹20L PA)",
    averageSalaryHike: "68%",
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "MongoDB",
      "Express.js",
      "React 19",
      "Node.js",
      "Redis",
      "Docker",
      "Socket.IO",
      "AWS EC2",
    ],
    overviewParagraph:
      "Step into high-concurrency enterprise backend and full-stack development. This program covers asynchronous Node.js internals, MongoDB Atlas indexing and multi-stage aggregation pipelines, Redis session caches, and microservices containerization.",
    whatYouWillLearn: [
      "Master Node.js asynchronous architecture, streams, buffers, and event loop optimization.",
      "Architect complex MongoDB databases with compound indexing, sharding, and aggregation pipelines.",
      "Build real-time collaborative applications using WebSockets, Socket.IO, and Redis Pub/Sub.",
      "Implement industry-standard JWT authentication with refresh token rotation and security headers.",
      "Deploy microservices architectures with Docker Compose, NGINX reverse proxy, and AWS EC2.",
    ],
    prerequisites: [
      "Basic understanding of JavaScript syntax and programming concepts.",
      "A laptop with at least 8GB RAM and internet connection.",
    ],
    syllabusModules: [
      {
        moduleNumber: 1,
        title: "Node.js Core Internals, Event Loop & Express REST APIs",
        duration: "3hr 15min",
        lectures: [
          {
            title: "Node.js Architecture: V8, Libuv & Thread Pool",
            duration: "45 Min",
            isPreview: true,
            type: "video",
          },
          {
            title: "Building Modular REST APIs with Express.js",
            duration: "55 Min",
            isPreview: true,
            type: "video",
          },
          {
            title: "Error Handling Middleware & Request Validation",
            duration: "40 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Lab: Enterprise Auth Service with Token Rotation",
            duration: "55 Min",
            isPreview: false,
            type: "lab",
          },
        ],
      },
      {
        moduleNumber: 2,
        title: "MongoDB Schema Modeling, Indexing & Aggregations",
        duration: "4hr 30min",
        lectures: [
          {
            title: "Mongoose Schema Design vs. Relational Normalization",
            duration: "50 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Query Execution Optimization with Compound Indexes",
            duration: "60 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Multi-Stage Aggregation Pipelines ($lookup, $facet)",
            duration: "75 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Lab: High-Throughput Analytics Aggregation Pipeline",
            duration: "85 Min",
            isPreview: false,
            type: "lab",
          },
        ],
      },
      {
        moduleNumber: 3,
        title: "Real-Time WebSockets, Redis Caching & Microservices",
        duration: "5hr 00min",
        lectures: [
          {
            title: "Real-Time Bi-Directional Feeds with Socket.IO",
            duration: "60 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "In-Memory Caching & Session Storage with Redis",
            duration: "65 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Docker Containerization & NGINX Load Balancing",
            duration: "75 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Capstone Lab: Omnichannel Real-Time Chat & Telemetry ERP",
            duration: "100 Min",
            isPreview: false,
            type: "lab",
          },
        ],
      },
    ],
    instructors: [
      {
        name: "Pooja Verma",
        role: "Staff Backend Engineer",
        organization: "Ex-Amazon / GoTechEdu",
        rating: 4.88,
        students: "24,000+",
        coursesCount: 3,
        bio: "Pooja specializes in high-throughput distributed microservices, having led enterprise cloud modernization initiatives across global fintech firms.",
        avatar:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      },
    ],
    faqs: [
      {
        question: "Is this course practical and hands-on?",
        answer:
          "Yes, 80% of class time is dedicated to writing live code, running automated tests, and deploying live production microservices.",
      },
    ],
  },
  "gen-ai-agentic": {
    id: "gen-ai-agentic",
    title: "Generative AI & Agentic Systems Engineering: Zero To Architect!",
    category: "Artificial Intelligence & LLMs",
    duration: "14 Weeks",
    totalHours: "110+ Hours",
    lecturesCount: 52,
    mode: "Live Labs + Research Project",
    level: "Intermediate to Advanced",
    badge: "Flagship AI",
    color: "from-purple-600 via-indigo-600 to-cyan-600",
    description:
      "Learn to architect autonomous multi-agent systems, build enterprise RAG pipelines with vector databases, and fine-tune open-source foundation models using PyTorch, LangChain, LangGraph, and Hugging Face.",
    heroTagline:
      "Build Autonomous Multi-Agent Swarms, Enterprise Hybrid RAG, Fine-Tune Open-Source LLMs with LoRA, and Deploy Production AI on Cloud GPUs!",
    originalPrice: 58000,
    discountedPrice: 29999,
    emiStartsAt: 2499,
    rating: 4.95,
    reviewsCount: 8120,
    enrolledStudents: 22400,
    nextBatchDate: "September 18, 2026",
    careerOutcome: "AI Engineer / LLM Architect (₹14L – ₹28L PA)",
    averageSalaryHike: "92%",
    previewImage:
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "Python 3.12",
      "PyTorch",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "ChromaDB",
      "FastAPI",
      "Hugging Face",
      "Docker",
    ],
    overviewParagraph:
      "Step into the highest-paying domain in tech. Learn the mathematical fundamentals and production engineering of foundation models, autonomous agents with tool-calling loops, hybrid dense-sparse RAG systems, and parameter-efficient fine-tuning (PEFT/LoRA).",
    whatYouWillLearn: [
      "Master Transformer architectures, attention mechanisms, and prompt optimization techniques.",
      "Build Enterprise Hybrid RAG (Dense + Sparse Vector Search) with ChromaDB and Cohere re-rankers.",
      "Orchestrate stateful autonomous multi-agent swarms with LangGraph, CrewAI, and human-in-the-loop controls.",
      "Fine-tune open-source LLMs (Llama-3, DeepSeek) using 4-bit QLoRA on cloud GPUs.",
      "Deploy scalable FastAPI inference endpoints with streaming responses and Langfuse observability.",
    ],
    prerequisites: [
      "Intermediate familiarity with Python programming.",
      "Basic mathematical understanding of linear algebra and machine learning concepts.",
    ],
    syllabusModules: [
      {
        moduleNumber: 1,
        title: "Foundation Transformers, Tokenization & Prompt Engineering",
        duration: "3hr 40min",
        lectures: [
          {
            title: "Transformers Internals: Self-Attention & Embeddings",
            duration: "50 Min",
            isPreview: true,
            type: "video",
          },
          {
            title: "Structured Outputs with Pydantic & JSON Schemas",
            duration: "45 Min",
            isPreview: true,
            type: "video",
          },
          {
            title: "Advanced Prompt Strategies: CoT, ToT & Few-Shot",
            duration: "45 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Lab: Automated Contract Analysis & Legal Parsing Agent",
            duration: "80 Min",
            isPreview: false,
            type: "lab",
          },
        ],
      },
      {
        moduleNumber: 2,
        title: "Enterprise RAG Architecture & Vector Database Retrieval",
        duration: "4hr 50min",
        lectures: [
          {
            title:
              "Dense vs. Sparse Vector Retrieval (BM25 + OpenAI Embeddings)",
            duration: "60 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Vector Databases with ChromaDB, Qdrant & Pinecone",
            duration: "65 Min",
            isPreview: false,
            type: "video",
          },
          {
            title:
              "Re-Ranking Strategies with Cross-Encoders for 99% Precision",
            duration: "55 Min",
            isPreview: false,
            type: "video",
          },
          {
            title:
              "Lab: Multi-Modal RAG Search over 50,000 Technical Documents",
            duration: "110 Min",
            isPreview: false,
            type: "lab",
          },
        ],
      },
      {
        moduleNumber: 3,
        title: "Autonomous Multi-Agent Swarms & LLM Fine-Tuning (LoRA)",
        duration: "5hr 20min",
        lectures: [
          {
            title: "Tool-Calling Agents & Cyclic Graphs with LangGraph",
            duration: "70 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Multi-Agent Collaboration with CrewAI & Shared Memory",
            duration: "65 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "LoRA & QLoRA Fine-Tuning on Custom Domain Datasets",
            duration: "80 Min",
            isPreview: false,
            type: "video",
          },
          {
            title:
              "Capstone Lab: Autonomous Financial Auditing & Research Agent Swarm",
            duration: "105 Min",
            isPreview: false,
            type: "lab",
          },
        ],
      },
    ],
    instructors: [
      {
        name: "Dr. Vikram Sharma",
        role: "Head of AI Research & Solutions",
        organization: "GoTechEdu Labs",
        rating: 4.96,
        students: "36,000+",
        coursesCount: 4,
        bio: "Dr. Vikram leads AI research at GoTechEdu, focusing on agentic workflows, autonomous tool-calling, and custom fine-tuned SLMs for enterprise automation.",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      },
    ],
    faqs: [
      {
        question: "Are GPU compute credits provided for labs and fine-tuning?",
        answer:
          "Yes! High-performance NVIDIA cloud GPUs are fully provided and sponsored for all hands-on exercises and fine-tuning capstones.",
      },
    ],
  },
  "cloud-devops": {
    id: "cloud-devops",
    title: "Multi-Cloud (AWS & Azure) + Kubernetes DevOps: Zero To Expert!",
    category: "Cloud Computing & DevOps",
    duration: "16 Weeks",
    totalHours: "120+ Hours",
    lecturesCount: 60,
    mode: "Live Cloud Labs + SLA Projects",
    level: "Beginner to Advanced",
    badge: "Enterprise SLA",
    color: "from-sky-600 via-blue-600 to-indigo-600",
    description:
      "Learn to provision multi-cloud infrastructure with Terraform, orchestrate container clusters with Kubernetes, build automated CI/CD pipelines, and configure 24/7 cloud monitoring and security.",
    heroTagline:
      "Master AWS & Azure Cloud Infrastructure, Kubernetes (EKS/AKS) Clustering, Terraform IaC, and Zero-Downtime CI/CD Pipelines!",
    originalPrice: 48000,
    discountedPrice: 24999,
    emiStartsAt: 2083,
    rating: 4.87,
    reviewsCount: 7890,
    enrolledStudents: 28400,
    nextBatchDate: "September 22, 2026",
    careerOutcome: "Cloud / DevOps Engineer (₹12L – ₹24L PA)",
    averageSalaryHike: "80%",
    previewImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
    overviewParagraph:
      "Transform into a high-demand cloud and infrastructure engineer. Master AWS & Azure core services, Linux systems administration, Docker containerization, Kubernetes cluster orchestration, and Infrastructure as Code with Terraform.",
    whatYouWillLearn: [
      "Design highly-available, fault-tolerant cloud architectures on AWS and Microsoft Azure.",
      "Containerize applications and manage production Kubernetes (EKS/AKS) clusters with Helm.",
      "Automate cloud infrastructure provisioning using modular Terraform and GitOps (ArgoCD).",
      "Build zero-downtime automated CI/CD deployment pipelines with GitHub Actions.",
      "Implement full-stack observability with Prometheus, Grafana, and automated SLA alerts.",
    ],
    prerequisites: [
      "Basic computer network and operating system fundamentals.",
    ],
    syllabusModules: [
      {
        moduleNumber: 1,
        title: "Linux Systems, Cloud Networking & AWS Fundamentals",
        duration: "4hr 10min",
        lectures: [
          {
            title: "Linux Process Management, Permissions & Bash Scripting",
            duration: "55 Min",
            isPreview: true,
            type: "video",
          },
          {
            title: "Cloud Networking: VPC, Subnets, NAT Gateways & CIDR",
            duration: "65 Min",
            isPreview: true,
            type: "video",
          },
          {
            title: "AWS Compute: EC2, Auto-Scaling & Load Balancers",
            duration: "60 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Lab: Deploying an Auto-Scaling Web Cluster on AWS",
            duration: "70 Min",
            isPreview: false,
            type: "lab",
          },
        ],
      },
      {
        moduleNumber: 2,
        title: "Docker Containerization & Kubernetes (EKS) Orchestration",
        duration: "5hr 30min",
        lectures: [
          {
            title: "Docker Multi-Stage Builds & Security Optimization",
            duration: "60 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Kubernetes Architecture: Pods, Deployments & Services",
            duration: "75 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Ingress Controllers, Persistent Volumes & Helm Charts",
            duration: "80 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Lab: Deploying Distributed Microservices on Kubernetes",
            duration: "115 Min",
            isPreview: false,
            type: "lab",
          },
        ],
      },
      {
        moduleNumber: 3,
        title: "Terraform IaC, CI/CD Automation & Observability",
        duration: "4hr 50min",
        lectures: [
          {
            title: "Terraform State Management, Modules & S3 Backends",
            duration: "65 Min",
            isPreview: false,
            type: "video",
          },
          {
            title:
              "GitHub Actions CI/CD with Quality Gates & Blue-Green Deploys",
            duration: "70 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Monitoring & Alerting with Prometheus and Grafana",
            duration: "65 Min",
            isPreview: false,
            type: "video",
          },
          {
            title: "Capstone Lab: Zero-Downtime Multi-Region Production Deploy",
            duration: "90 Min",
            isPreview: false,
            type: "lab",
          },
        ],
      },
    ],
    instructors: [
      {
        name: "Sarah Jenkins",
        role: "Principal Cloud & DevOps Architect",
        organization: "Ex-AWS / GoTechEdu",
        rating: 4.9,
        students: "31,000+",
        coursesCount: 3,
        bio: "Sarah has engineered multi-region cloud infrastructures for Fortune 500 enterprises with 99.999% SLA availability requirements.",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      },
    ],
    faqs: [
      {
        question: "Are live cloud lab accounts provided?",
        answer:
          "Yes, every enrolled student receives access to cloud sandboxes with pre-configured AWS and Azure credits for all hands-on exercises.",
      },
    ],
  },
};

// Fallback generator for dynamic or unlisted courses
function getFallbackCourse(slug: string, apiCourse?: any): CourseDetail {
  if (apiCourse) {
    const rawOrigPrice = Number(apiCourse.originalPrice) || 49999;
    const rawDiscPrice = Number(apiCourse.discountedPrice) || 24999;
    const rawEmi =
      Number(apiCourse.emiStartsAt) || Math.round(rawDiscPrice / 12) || 2083;
    const courseImage =
      apiCourse.image ||
      apiCourse.previewImage ||
      apiCourse.thumbnail ||
      apiCourse.bannerImage ||
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80";

    const customModules =
      apiCourse.curriculum && apiCourse.curriculum.length > 0
        ? apiCourse.curriculum.map((cm: any, cIdx: number) => ({
            moduleNumber: cm.order || cIdx + 1,
            title: cm.title,
            duration: cm.duration || "1-2 Weeks",
            lectures: (cm.lessons || []).map((les: any) => ({
              title: les.title,
              duration: les.duration || "30 mins",
              isPreview: !!les.isPreview,
              type:
                les.contentType === "pdf"
                  ? ("doc" as const)
                  : les.contentType === "external_link"
                    ? ("lab" as const)
                    : ("video" as const),
            })),
          }))
        : apiCourse.syllabusModules && apiCourse.syllabusModules.length > 0
          ? apiCourse.syllabusModules
          : apiCourse.modules && apiCourse.modules.length > 0
            ? apiCourse.modules.map((m: string, i: number) => ({
                moduleNumber: i + 1,
                title: m,
                duration: "3hr 30min",
                lectures: [
                  {
                    title: `${m} - Core Principles & Setup`,
                    duration: "45 Min",
                    isPreview: true,
                    type: "video" as const,
                  },
                  {
                    title: `${m} - In-Depth Architecture & Production Patterns`,
                    duration: "60 Min",
                    isPreview: false,
                    type: "video" as const,
                  },
                  {
                    title: `${m} - Hands-On Implementation Lab`,
                    duration: "75 Min",
                    isPreview: false,
                    type: "lab" as const,
                  },
                ],
              }))
            : [
                {
                  moduleNumber: 1,
                  title: "Introduction to Core Principles & Environment Setup",
                  duration: "2hr 30min",
                  lectures: [
                    {
                      title: "Program Overview, Architecture & Career Roadmap",
                      duration: "25 Min",
                      isPreview: true,
                      type: "video" as const,
                    },
                    {
                      title: "Development Tooling & Tool Installation",
                      duration: "35 Min",
                      isPreview: true,
                      type: "video" as const,
                    },
                    {
                      title: "Lab: Foundational Practical Implementation",
                      duration: "40 Min",
                      isPreview: false,
                      type: "lab" as const,
                    },
                  ],
                },
                {
                  moduleNumber: 2,
                  title:
                    "Advanced Implementations, Architecture & Integrations",
                  duration: "4hr 15min",
                  lectures: [
                    {
                      title:
                        "Component Architecture & Scalability Best Practices",
                      duration: "60 Min",
                      isPreview: false,
                      type: "video" as const,
                    },
                    {
                      title: "Database Modeling, APIs & Asynchronous Flow",
                      duration: "65 Min",
                      isPreview: false,
                      type: "video" as const,
                    },
                    {
                      title: "Lab: High-Throughput Module Service",
                      duration: "75 Min",
                      isPreview: false,
                      type: "lab" as const,
                    },
                  ],
                },
              ];

    const instructorsList =
      apiCourse.instructors &&
      Array.isArray(apiCourse.instructors) &&
      apiCourse.instructors.length > 0
        ? apiCourse.instructors.map((ins: any) => ({
            name:
              typeof ins === "string" ? ins : ins?.name || "GoTechEdu Mentor",
            role:
              typeof ins === "object"
                ? ins?.role || "Lead Engineering Mentor"
                : "Lead Engineering Mentor",
            organization:
              typeof ins === "object"
                ? ins?.organization || "GoTechEdu"
                : "GoTechEdu",
            rating:
              typeof ins === "object" && typeof ins?.rating === "number"
                ? ins.rating
                : 4.92,
            students:
              typeof ins === "object" && ins?.students
                ? String(ins.students)
                : "45,000+",
            coursesCount:
              typeof ins === "object" && ins?.coursesCount
                ? Number(ins.coursesCount)
                : 5,
            bio:
              typeof ins === "object" && ins?.bio
                ? String(ins.bio)
                : "Senior technical architect with 12+ years building enterprise architectures and mentoring high-performance developer teams.",
            avatar:
              typeof ins === "object" && ins?.avatar
                ? ins.avatar
                : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
          }))
        : apiCourse.instructor
          ? [
              {
                name:
                  typeof apiCourse.instructor === "string"
                    ? apiCourse.instructor
                    : apiCourse.instructor.name || "Lead Engineering Mentor",
                role:
                  (typeof apiCourse.instructor === "object" &&
                    apiCourse.instructor.role) ||
                  "Lead Engineering Mentor",
                organization:
                  (typeof apiCourse.instructor === "object" &&
                    apiCourse.instructor.organization) ||
                  "GoTechEdu",
                rating: 4.92,
                students: "45,000+",
                coursesCount: 5,
                bio: "Senior technical architect with 12+ years building enterprise architectures and mentoring high-performance developer teams.",
                avatar:
                  (typeof apiCourse.instructor === "object" &&
                    apiCourse.instructor.avatar) ||
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
              },
            ]
          : [
              {
                name: "Dr. Vikram Sharma",
                role: "Lead Engineering Mentor",
                organization: "GoTechEdu",
                rating: 4.92,
                students: "45,000+",
                coursesCount: 5,
                bio: "Senior architect with 12+ years building enterprise SaaS and mentoring high-performance developer teams.",
                avatar:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
              },
            ];

    const whatLearnList =
      apiCourse.whatYouWillLearn && apiCourse.whatYouWillLearn.length > 0
        ? apiCourse.whatYouWillLearn
        : [
            `Master the core architectural principles and modern best practices of ${apiCourse.title}.`,
            "Build enterprise-ready production applications with modular, scalable code structure.",
            "Integrate robust database models, APIs, and cloud services.",
            "Implement automated testing, CI/CD, and production deployment.",
            "Receive 1:1 resume optimization and interview referrals across top tech companies.",
          ];

    const prereqsList =
      apiCourse.prerequisites && apiCourse.prerequisites.length > 0
        ? apiCourse.prerequisites
        : [
            "Basic computer and programming concepts.",
            "Passion for hands-on problem solving.",
            "No prior advanced experience required — we guide you step by step.",
          ];

    const faqsList =
      apiCourse.faqs && apiCourse.faqs.length > 0
        ? apiCourse.faqs
        : [
            {
              question:
                "How do I access class recordings if I miss a live session?",
              answer:
                "All live lectures are recorded in HD and posted to your learning dashboard within 2 hours with code files and notes.",
            },
            {
              question: "What certification is provided upon completion?",
              answer:
                "You receive an official, verifiable GoTechEdu Certificate of Completion and a Capstone Project Excellence Badge.",
            },
            {
              question: "Are live doubt-clearing sessions provided?",
              answer:
                "Yes, 1:1 TA doubt clearing and Discord community support are available 7 days a week.",
            },
          ];

    return {
      id: apiCourse._id || slug,
      slug: apiCourse.slug || slug,
      title: apiCourse.title,
      category: apiCourse.category || "Professional Tech Academy",
      duration: apiCourse.duration || "16 Weeks",
      totalHours: apiCourse.totalHours || "120+ Hours",
      lecturesCount: Number(apiCourse.lecturesCount) || 60,
      mode: apiCourse.mode || "Live Online + Capstone Labs",
      level: apiCourse.level || "Beginner to Advanced",
      badge: apiCourse.badge || "Live Academy",
      color: apiCourse.color || "from-emerald-600 to-teal-600",
      description:
        apiCourse.description || "Comprehensive hands-on industry bootcamp.",
      heroTagline:
        apiCourse.heroTagline ||
        `Master ${apiCourse.title} by building industry capstone projects with 1:1 expert mentorship and placement assistance!`,
      originalPrice: rawOrigPrice,
      discountedPrice: rawDiscPrice,
      emiStartsAt: rawEmi,
      rating: Number(apiCourse.rating) || 4.88,
      reviewsCount: Number(apiCourse.reviewsCount) || 5420,
      enrolledStudents: Number(apiCourse.enrolledStudents) || 18900,
      nextBatchDate: apiCourse.nextBatchDate || "September 25, 2026",
      careerOutcome:
        apiCourse.careerOutcome || "Software Professional (₹8L – ₹16L PA)",
      averageSalaryHike: apiCourse.averageSalaryHike || "70%",
      previewImage: courseImage,
      techStack:
        apiCourse.techStack?.length > 0
          ? apiCourse.techStack
          : ["React", "Node.js", "Docker", "PostgreSQL"],
      overviewParagraph:
        apiCourse.overviewParagraph ||
        apiCourse.description ||
        "Master this high-demand tech stack from scratch through structured live online masterclasses, interactive coding exercises, 1:1 mentor code audits, and capstone deployment.",
      whatYouWillLearn: whatLearnList,
      prerequisites: prereqsList,
      syllabusModules: customModules,
      instructors: instructorsList,
      faqs: faqsList,
      batches: apiCourse.batches || [],
    };
  }

  return {
    ...detailedCoursesDatabase["fullstack-nextjs"],
    id: slug,
    title: `The Complete ${slug
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ")}: From Zero To Expert!`,
  };
}

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [course, setCourse] = useState<CourseDetail>(
    detailedCoursesDatabase[slug] || getFallbackCourse(slug),
  );

  // Accordion and Tab States
  const [openModules, setOpenModules] = useState<Record<number, boolean>>({
    0: true,
    1: true,
  });
  const [showFullLearnMore, setShowFullLearnMore] = useState(false);
  const [showMoreSpecs, setShowMoreSpecs] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  // Coupon Code System
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState<{
    text: string;
    isError: boolean;
  } | null>(null);

  // Application / Checkout Modal
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [enrollForm, setEnrollForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    collegeOrCompany: "",
    qualification: "B.Tech / Degree Graduate",
    experienceLevel: "Fresher / College Student",
    batchPreference: "Weekend Cohort",
    notes: "",
  });

  const [enrollError, setEnrollError] = useState("");
  const [isLoadingCourse, setIsLoadingCourse] = useState(true);

  // Fetch dynamic course data from backend if available
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setIsLoadingCourse(true);
        const res = await officialApi.getCourseById(slug);
        if (res && res.course) {
          setCourse(getFallbackCourse(slug, res.course));
        }
      } catch (err) {
        // Fall back gracefully
      } finally {
        setIsLoadingCourse(false);
      }
    };
    fetchCourse();
  }, [slug]);

  const toggleModule = (idx: number) => {
    setOpenModules((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Apply Coupon Logic
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (!code) return;

    if (code === "GOTECH50") {
      const discount = Math.round(course.discountedPrice * 0.5);
      setAppliedCoupon(code);
      setCouponDiscount(discount);
      setCouponMessage({
        text: "🎉 GOTECH50 Applied! 50% Flat Discount Subtracted.",
        isError: false,
      });
    } else if (code === "EARLYBIRD") {
      const discount = 5000;
      setAppliedCoupon(code);
      setCouponDiscount(discount);
      setCouponMessage({
        text: "🚀 EARLYBIRD Applied! Flat ₹5,000 Discount Subtracted.",
        isError: false,
      });
    } else if (code === "STUDENT20") {
      const discount = Math.round(course.discountedPrice * 0.2);
      setAppliedCoupon(code);
      setCouponDiscount(discount);
      setCouponMessage({
        text: "🎓 STUDENT20 Applied! 20% Special Student Discount Subtracted.",
        isError: false,
      });
    } else if (code === "FREEDEMO") {
      setAppliedCoupon(code);
      setCouponDiscount(course.discountedPrice);
      setCouponMessage({
        text: "✨ FREEDEMO Applied! 100% Free 3-Day Live Demo Access Granted.",
        isError: false,
      });
    } else {
      setCouponMessage({
        text: "Invalid code. Try 'GOTECH50' or 'EARLYBIRD'.",
        isError: true,
      });
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
    setCouponCode("");
    setCouponMessage(null);
  };

  const finalPrice = Math.max(0, course.discountedPrice - couponDiscount);

  // Submit Enrollment with Razorpay Payment Gateway & User Password Integration
  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollError("");

    const nameVal = validateName(enrollForm.fullName);
    if (!nameVal.isValid) {
      setEnrollError(nameVal.error!);
      return;
    }

    const emailVal = validateEmail(enrollForm.email);
    if (!emailVal.isValid) {
      setEnrollError(emailVal.error!);
      return;
    }

    const phoneVal = validatePhone(enrollForm.phone);
    if (!phoneVal.isValid) {
      setEnrollError(phoneVal.error!);
      return;
    }

    setIsSubmitting(true);
    const API_URL =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

    try {
      // 1. Create Payment Order
      const orderRes = await fetch(`${API_URL}/payments/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalPrice,
          currency: "INR",
          courseId: course.id,
          courseTitle: course.title,
        }),
      });

      const orderData = await orderRes.json();

      const options = {
        key: orderData.keyId || "rzp_test_demo_gotech",
        amount: orderData.amount || finalPrice * 100,
        currency: orderData.currency || "INR",
        name: "GoTechEdu Learning Hub",
        description: `Enrollment for ${course.title}`,
        image: "/icons.png",
        order_id: orderData.orderId,
        handler: async function (response: any) {
          try {
            // 2. Verify Payment & Send Nodemailer Invoice & Save User Password
            await fetch(`${API_URL}/payments/verify-payment`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_payment_id:
                  response.razorpay_payment_id || `pay_sim_${Date.now()}`,
                razorpay_order_id:
                  response.razorpay_order_id || orderData.orderId,
                razorpay_signature: response.razorpay_signature || "verified",
                studentName: enrollForm.fullName,
                email: enrollForm.email,
                phone: enrollForm.phone,
                password: enrollForm.password,
                collegeOrCompany: enrollForm.collegeOrCompany,
                qualification: enrollForm.qualification,
                batch: enrollForm.batchPreference,
                experienceLevel: enrollForm.experienceLevel,
                learningGoal: `Batch: ${enrollForm.batchPreference}`,
                courseId: course.id,
                courseTitle: course.title,
                amount: finalPrice,
              }),
            });
            setIsSuccess(true);
          } catch (verifyErr) {
            console.error("Verification error:", verifyErr);
            setIsSuccess(true);
          }
        },
        prefill: {
          name: enrollForm.fullName,
          email: enrollForm.email,
          contact: enrollForm.phone,
        },
        theme: {
          color: "#0f766e",
        },
      };

      if ((window as any).Razorpay) {
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      } else {
        options.handler({
          razorpay_payment_id: `pay_sim_${Date.now()}`,
          razorpay_order_id: orderData.orderId || `order_sim_${Date.now()}`,
          razorpay_signature: "verified",
        });
      }
    } catch (err) {
      console.log("Payment flow fallback:", err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingCourse) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-900 pb-24 animate-pulse">
        {/* Hero Header Skeleton */}
        <section className="bg-slate-900 py-12 lg:py-16 text-white border-b border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="h-4 w-44 rounded bg-slate-800" />
            <div className="h-10 w-2/3 rounded-xl bg-slate-800" />
            <div className="h-5 w-1/2 rounded bg-slate-800" />
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="h-10 w-36 rounded-full bg-slate-800" />
              <div className="h-8 w-24 rounded-full bg-slate-800" />
              <div className="h-8 w-32 rounded-full bg-slate-800" />
            </div>
          </div>
        </section>

        {/* Content & Sidebar Skeleton */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="h-48 rounded-2xl bg-slate-200" />
              <div className="h-64 rounded-2xl bg-slate-200" />
              <div className="h-48 rounded-2xl bg-slate-200" />
            </div>
            <div className="lg:col-span-4">
              <div className="h-96 rounded-3xl bg-slate-200" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 pb-24">
      {/* =====================================================
          1. HERO HEADER (Matches User's UI Reference)
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#bbf7d0]/80 via-[#a7f3d0]/60 to-[#99f6e4]/70 pt-8 pb-14 lg:py-16 border-b border-emerald-200/50">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-teal-300/30 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-600 mb-6">
            <Link href="/" className="hover:text-emerald-800 transition">
              Home
            </Link>
            <span>›</span>
            <Link
              href="/learninghub"
              className="hover:text-emerald-800 transition"
            >
              Course Details
            </Link>
            <span>›</span>
            <span className="text-emerald-900 font-bold truncate max-w-xs sm:max-w-md">
              {course.category}
            </span>
          </nav>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-4">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium max-w-2xl">
                {course.heroTagline}
              </p>

              {/* Action Pill & Social Proof Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Link
                  href={`/learninghub/${slug}/enroll`}
                  className="rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-7 py-3 text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition active:scale-95 cursor-pointer inline-flex items-center justify-center"
                >
                  Enroll Now →
                </Link>

                <div className="flex items-center gap-1.5 rounded-full bg-white/80 border border-emerald-200/80 px-3.5 py-1.5 text-xs font-bold text-slate-800 backdrop-blur-xs">
                  <span className="text-slate-900 font-extrabold">
                    {course.rating}
                  </span>
                  <div className="flex text-amber-500 text-xs">★★★★★</div>
                </div>

                <span className="rounded-full bg-emerald-100/90 border border-emerald-300/80 px-3.5 py-1.5 text-xs font-mono font-bold text-emerald-900">
                  {course.reviewsCount.toLocaleString()} Ratings
                </span>

                <span className="text-xs font-semibold text-slate-700">
                  <strong className="text-slate-900 font-bold">
                    {course.enrolledStudents.toLocaleString()}
                  </strong>{" "}
                  Students
                </span>
              </div>
            </div>

            {/* Right Hero Image Card (Matches Laptop Mockup in Image) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none overflow-hidden rounded-3xl border-4 border-white bg-slate-900 shadow-2xl transition hover:scale-[1.01]">
                <img
                  src={course.previewImage}
                  alt={course.title}
                  className="h-64 sm:h-72 w-full object-cover opacity-90 hover:opacity-100 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="flex items-center justify-between w-full text-white text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/80 px-3 py-1 font-bold backdrop-blur-xs">
                      ▶ Live Code & Labs
                    </span>
                    <span className="font-mono text-slate-200 font-semibold">
                      {course.totalHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          2. MAIN 2-COLUMN CONTENT & STICKY SIDEBAR
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* =====================================================
              LEFT COLUMN (What You'll Learn, Content, Instructors, FAQ)
          ====================================================== */}
          <div className="lg:col-span-8 space-y-6">
            {/* 1. What You'll Learn Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                What You'll Learn
              </h2>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 mb-6">
                {course.overviewParagraph}
              </p>

              {/* 2-Column Checked List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
                {(showFullLearnMore
                  ? course.whatYouWillLearn
                  : course.whatYouWillLearn.slice(0, 4)
                ).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="leading-snug text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {course.whatYouWillLearn.length > 4 && (
                <button
                  type="button"
                  onClick={() => setShowFullLearnMore(!showFullLearnMore)}
                  className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition cursor-pointer"
                >
                  <span>{showFullLearnMore ? "Show Less" : "Show More"}</span>
                  <span className="text-xs font-bold">
                    {showFullLearnMore ? "▲" : "▼"}
                  </span>
                </button>
              )}
            </div>

            {/* 2. Course Content / Syllabus Accordion (Matches Image UI) */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
                <div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                    Course Content
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {course.syllabusModules.length} Modules •{" "}
                    {course.lecturesCount} Lectures • {course.totalHours} Total
                    Duration
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const allOpen =
                      Object.keys(openModules).length ===
                      course.syllabusModules.length;
                    const next: Record<number, boolean> = {};
                    if (!allOpen) {
                      course.syllabusModules.forEach(
                        (_, i) => (next[i] = true),
                      );
                    }
                    setOpenModules(next);
                  }}
                  className="text-xs font-bold text-emerald-700 hover:underline text-left cursor-pointer"
                >
                  {Object.keys(openModules).length ===
                  course.syllabusModules.length
                    ? "Collapse all sections"
                    : "Expand all sections"}
                </button>
              </div>

              {/* Module Accordions */}
              <div className="space-y-3">
                {course.syllabusModules.map((module, idx) => {
                  const isOpen = !!openModules[idx];
                  return (
                    <div
                      key={module.moduleNumber}
                      className="rounded-xl border border-slate-200 overflow-hidden transition hover:border-emerald-300"
                    >
                      {/* Accordion Header */}
                      <button
                        type="button"
                        onClick={() => toggleModule(idx)}
                        className="flex w-full items-center justify-between p-4 sm:p-5 text-left bg-slate-50/70 hover:bg-slate-100/80 transition cursor-pointer"
                      >
                        <div className="flex items-center gap-3 pr-2">
                          <span className="text-xs font-bold text-slate-400">
                            {isOpen ? "▼" : "▶"}
                          </span>
                          <span className="font-heading text-xs sm:text-sm font-bold text-slate-900">
                            {module.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="rounded-md bg-emerald-100/80 text-emerald-800 border border-emerald-200 px-2 py-0.5 text-[11px] font-mono font-bold">
                            {module.duration}
                          </span>
                        </div>
                      </button>

                      {/* Accordion Lecture Items */}
                      {isOpen && (
                        <div className="divide-y divide-slate-100 bg-white px-4 sm:px-6 py-2 animate-fadeIn">
                          {module.lectures.map((lec, lIdx) => (
                            <div
                              key={lIdx}
                              className="flex items-center justify-between py-3 text-xs sm:text-sm transition hover:text-emerald-700"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-slate-400 text-xs">
                                  {lec.type === "video"
                                    ? "▶"
                                    : lec.type === "doc"
                                      ? "📄"
                                      : "🛠️"}
                                </span>
                                <span className="font-medium text-slate-800">
                                  {lec.title}
                                </span>
                              </div>

                              <div className="flex items-center gap-3">
                                <span className="text-[11px] font-mono text-slate-400">
                                  {lec.duration}
                                </span>
                                {lec.isPreview ? (
                                  <button
                                    type="button"
                                    onClick={() => setIsEnrollModalOpen(true)}
                                    className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 hover:bg-emerald-100 cursor-pointer"
                                  >
                                    Preview
                                  </button>
                                ) : (
                                  <span
                                    className="text-slate-300 text-xs"
                                    title="Enrolled Access Only"
                                  >
                                    🔒
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Requirements & Prerequisites */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
              <h2 className="font-heading text-xl font-bold text-slate-900 mb-3">
                Requirements
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {course.prerequisites.map((req, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Instructor Card (Matches Image UI) */}
            {/* <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
              <h2 className="font-heading text-xl font-bold text-slate-900 mb-5">
                Instructor
              </h2>
              {course.instructors.map((ins, iIdx) => (
                <div key={iIdx} className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <img
                      src={ins.avatar}
                      alt={ins.name}
                      className="h-16 w-16 rounded-full object-cover border-2 border-emerald-200"
                    />
                    <div>
                      <h3 className="font-heading text-base sm:text-lg font-bold text-emerald-900">
                        {ins.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {ins.role} • {ins.organization}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-1.5 font-mono">
                        <span className="text-amber-500 font-bold">
                          ★ {ins.rating} Instructor Rating
                        </span>
                        <span>👥 {ins.students} Students</span>
                        <span>📚 {ins.coursesCount} Courses</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {ins.bio}
                  </p>
                </div>
              ))}
            </div> */}

            {/* 5. Frequently Asked Questions (FAQ Accordion) */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
              <div className="border-b border-slate-100 pb-3 mb-5">
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Have questions about admissions, batch schedules, or placement
                  assistance?
                </p>
              </div>

              <div className="space-y-3">
                {course.faqs.map((faq, fIdx) => {
                  const isFaqOpen = activeFaqIndex === fIdx;
                  return (
                    <div
                      key={fIdx}
                      className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs transition"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setActiveFaqIndex(isFaqOpen ? null : fIdx)
                        }
                        className="flex w-full items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <span className="text-slate-400 font-mono text-base ml-3">
                          {isFaqOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isFaqOpen && (
                        <div className="border-t border-slate-100 bg-slate-50/60 p-4 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT STICKY SIDEBAR (Matches Image UI Layout)
          ====================================================== */}
          <div className="lg:col-span-4">
            <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-lg space-y-5">
              {/* Pricing Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
                    ₹{finalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm font-mono text-slate-400 line-through">
                    ₹{course.originalPrice.toLocaleString("en-IN")}
                  </span>
                </div>
                <span className="rounded-full bg-amber-50 border border-amber-200 px-2.5 py-1 text-[11px] font-mono font-bold text-amber-700">
                  ⏳ 3 days left!
                </span>
              </div>

              {/* Action Buttons (Matches UI image: Add to Cart & Buy Now) */}
              <div className="space-y-2.5">
                <Link
                  href={`/learninghub/${slug}/enroll`}
                  // href={`/contact`}
                  className="w-full inline-flex items-center justify-center rounded-xl bg-[#0f766e] hover:bg-[#115e59] py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition active:scale-98 cursor-pointer"
                >
                  Enroll Now →
                </Link>

                <Link
                  href={`/learninghub/${slug}/enroll?coupon=FREEDEMO`}
                  // href={`/contact`}
                  className="w-full inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-50 transition cursor-pointer"
                >
                  Book Free Demo Class
                </Link>
              </div>

              {/* Promo Coupon Box */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                  <span>Have a Promo Coupon?</span>
                  {appliedCoupon && (
                    <button
                      type="button"
                      onClick={removeCoupon}
                      className="text-[10px] text-rose-600 hover:underline"
                    >
                      Remove ({appliedCoupon})
                    </button>
                  )}
                </div>

                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. GOTECH50, EARLYBIRD"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    disabled={!!appliedCoupon}
                    className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-mono uppercase focus:border-emerald-600 focus:outline-none disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!!appliedCoupon}
                    className="rounded-lg bg-slate-900 hover:bg-slate-800 px-3 py-1.5 text-xs font-bold uppercase text-white transition disabled:opacity-50 cursor-pointer"
                  >
                    Apply
                  </button>
                </form>

                {couponMessage && (
                  <p
                    className={`text-[11px] font-semibold ${
                      couponMessage.isError
                        ? "text-rose-600"
                        : "text-emerald-700"
                    }`}
                  >
                    {couponMessage.text}
                  </p>
                )}
              </div>

              {/* Course Specs List (Matches UI Image Right Column Specs) */}
              <div className="space-y-3 pt-2 text-xs divide-y divide-slate-100">
                <div className="flex items-center justify-between pt-2">
                  <span className="text-slate-500 font-medium">Start Date</span>
                  <span className="rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 font-bold font-mono text-[11px]">
                    {course.nextBatchDate}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-slate-500 font-medium">Enrolled</span>
                  <span className="font-bold text-slate-900 font-mono">
                    {course.enrolledStudents.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-slate-500 font-medium">
                    Live Lectures
                  </span>
                  <span className="font-bold text-slate-900 font-mono">
                    {course.lecturesCount} Sessions
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-slate-500 font-medium">
                    Skill Level
                  </span>
                  <span className="rounded bg-slate-100 px-2 py-0.5 font-bold text-slate-700 text-[11px]">
                    {course.level}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-slate-500 font-medium">Language</span>
                  <span className="font-semibold text-slate-800">
                    English (Live + Subtitles)
                  </span>
                </div>

                {showMoreSpecs && (
                  <>
                    <div className="flex items-center justify-between pt-2 animate-fadeIn">
                      <span className="text-slate-500 font-medium">
                        Assessment
                      </span>
                      <span className="font-semibold text-slate-800">
                        6+ Capstone Labs
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-2 animate-fadeIn">
                      <span className="text-slate-500 font-medium">
                        Certificate
                      </span>
                      <span className="font-bold text-emerald-700">
                        Official Verifiable ID
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-2 animate-fadeIn">
                      <span className="text-slate-500 font-medium">Access</span>
                      <span className="font-semibold text-slate-800">
                        Lifetime LMS Portal
                      </span>
                    </div>
                  </>
                )}

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowMoreSpecs(!showMoreSpecs)}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{showMoreSpecs ? "Show Less" : "Show More"}</span>
                    <span>{showMoreSpecs ? "▲" : "▼"}</span>
                  </button>
                </div>
              </div>

              {/* Social Share & Contact Box (Matches UI Image) */}
              <div className="border-t border-slate-100 pt-5 text-center space-y-3">
                <div className="flex items-center justify-center gap-3 text-slate-400">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-xs hover:bg-slate-100 hover:text-blue-600 transition"
                  >
                    f
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-xs hover:bg-slate-100 hover:text-sky-500 transition"
                  >
                    t
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-xs hover:bg-slate-100 hover:text-pink-600 transition"
                  >
                    in
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-xs hover:bg-slate-100 hover:text-blue-700 transition"
                  >
                    ln
                  </a>
                </div>

                <p className="text-[11px] text-slate-500 font-medium">
                  For Details About The Course
                </p>

                <a
                  href="tel:+91 9608094837"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 py-2.5 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition"
                >
                  <span>📞</span>
                  <span>Call Us: +91 96080 94837</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          3. ENROLLMENT & CHECKOUT MODAL
      ====================================================== */}
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-lg max-h-[92vh] flex flex-col rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-fadeIn my-6">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50">
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  {isSuccess
                    ? "Admission Registered"
                    : "Complete Course Admission"}
                </h3>
                <span className="text-[11px] text-emerald-700 font-semibold truncate block">
                  {course.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsEnrollModalOpen(false);
                  setIsSuccess(false);
                }}
                className="h-8 w-8 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 flex items-center justify-center text-xs font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 flex-1 text-xs">
              {isSuccess ? (
                <div className="py-6 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600 font-bold">
                    ✓
                  </div>
                  <h4 className="font-heading text-lg font-bold text-slate-900">
                    🎉 Payment Verified & Admission Confirmed!
                  </h4>
                  <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Thank you,{" "}
                    <strong className="text-slate-900">
                      {enrollForm.fullName}
                    </strong>
                    ! Your payment has been processed and an official tax
                    invoice email was dispatched to{" "}
                    <strong className="text-emerald-700">
                      {enrollForm.email}
                    </strong>
                    .
                  </p>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-left font-mono text-[11px] space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Program:</span>
                      <span className="font-bold text-slate-900">
                        {course.title}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Batch:</span>
                      <span className="font-bold text-slate-900">
                        {enrollForm.batchPreference}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Total Investment:</span>
                      <span className="font-bold text-emerald-700">
                        ₹{finalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://portal.gotechedu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-3 font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 hover:opacity-95 cursor-pointer"
                  >
                    <span>Launch Student Portal (HRMS)</span>
                    <span>→</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleEnrollSubmit} className="space-y-4">
                  {enrollError && (
                    <div className="rounded-xl bg-red-50 p-2.5 text-xs font-semibold text-red-600 border border-red-200">
                      {enrollError}
                    </div>
                  )}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={enrollForm.fullName}
                      onChange={(e) =>
                        setEnrollForm({
                          ...enrollForm,
                          fullName: e.target.value,
                        })
                      }
                      className="h-9 w-full rounded-xl border border-slate-200 px-3 focus:border-emerald-600 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@gmail.com"
                        value={enrollForm.email}
                        onChange={(e) =>
                          setEnrollForm({
                            ...enrollForm,
                            email: e.target.value,
                          })
                        }
                        className="h-9 w-full rounded-xl border border-slate-200 px-3 focus:border-emerald-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+91 98765 43210"
                        value={enrollForm.phone}
                        onChange={(e) =>
                          setEnrollForm({
                            ...enrollForm,
                            phone: e.target.value,
                          })
                        }
                        className="h-9 w-full rounded-xl border border-slate-200 px-3 focus:border-emerald-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        College or Company
                      </label>
                      <input
                        type="text"
                        placeholder="IIT Delhi / TCS"
                        value={enrollForm.collegeOrCompany}
                        onChange={(e) =>
                          setEnrollForm({
                            ...enrollForm,
                            collegeOrCompany: e.target.value,
                          })
                        }
                        className="h-9 w-full rounded-xl border border-slate-200 px-3 focus:border-emerald-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Set Portal Password *
                      </label>
                      <input
                        type="password"
                        required
                        placeholder="Password for HRMS login"
                        value={enrollForm.password}
                        onChange={(e) =>
                          setEnrollForm({
                            ...enrollForm,
                            password: e.target.value,
                          })
                        }
                        className="h-9 w-full rounded-xl border border-slate-200 px-3 focus:border-emerald-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Batch Schedule
                    </label>
                    <select
                      value={enrollForm.batchPreference}
                      onChange={(e) =>
                        setEnrollForm({
                          ...enrollForm,
                          batchPreference: e.target.value,
                        })
                      }
                      className="h-9 w-full rounded-xl border border-slate-200 px-3 focus:border-emerald-600 focus:outline-none"
                    >
                      <option value="Weekend Cohort">
                        Weekend Cohort (Sat & Sun, 10 AM - 1 PM)
                      </option>
                      <option value="Weekday Evening">
                        Weekday Evening (Tue & Thu, 7:30 PM - 9:30 PM)
                      </option>
                    </select>
                  </div>

                  {/* Summary Pricing Strip */}
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5 space-y-1 font-mono text-[11px]">
                    <div className="flex justify-between text-slate-600">
                      <span>Standard Price:</span>
                      <span>
                        ₹{course.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Discount:</span>
                      <span className="text-emerald-700">
                        -₹
                        {(
                          course.originalPrice - course.discountedPrice
                        ).toLocaleString("en-IN")}
                      </span>
                    </div>
                    {appliedCoupon && (
                      <div className="flex justify-between text-emerald-800 font-bold">
                        <span>Coupon ({appliedCoupon}):</span>
                        <span>-₹{couponDiscount.toLocaleString("en-IN")}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-slate-900 border-t border-emerald-200 pt-1 text-xs">
                      <span>Final Investment:</span>
                      <span className="text-emerald-800 font-heading text-sm">
                        ₹{finalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setIsEnrollModalOpen(false)}
                      className="rounded-xl border border-slate-200 px-4 py-2 font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-xl bg-[#0f766e] hover:bg-[#115e59] px-6 py-2.5 font-bold uppercase tracking-wider text-white shadow-md disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting
                        ? "Processing Razorpay..."
                        : `Pay ₹${finalPrice.toLocaleString("en-IN")} & Enroll`}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
