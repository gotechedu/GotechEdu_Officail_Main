"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface Testimonial {
  id: number;
  title: string;
  quote: string;
  author: string;
  role: string;
  institution: string;
  image: string;
  accentColor: string;
  badgeBg: string;
  tag: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "Testimonial from NIELIT (Academic Coordination Team)",
    quote:
      "GoTechEdu mentors served with distinction at NIELIT. The sessions were always exceptionally well-structured, student-friendly, and focused on practical application. They played a valuable role in helping students build a rock-solid foundation in technical skills, programming, and IT tools. Their professionalism and student engagement approach were consistently appreciated by both staff and learners.",
    author: "Academic Coordinator",
    role: "Academic Coordination Team",
    institution: "NIELIT Lucknow Centre",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    accentColor: "bg-blue-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    tag: "NIELIT Certified Partner",
    rating: 5,
  },
  {
    id: 2,
    title: "Testimonial from BLS Inter College",
    quote:
      "The Python and Web Development workshop conducted by GoTechEdu at BLS Inter College was a remarkable success. The teaching style was interactive, engaging, and genuinely inspiring for young learners. Many of our students have gone on to build their own computer projects with immense confidence.",
    author: "Mr. Sandeep Sahu",
    role: "Senior Faculty & Coordinator",
    institution: "BLS Inter College",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    accentColor: "bg-indigo-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    tag: "School Tech Workshop",
    rating: 5,
  },
  {
    id: 3,
    title: "Testimonial from Maharishi University",
    quote:
      "As the Dean, I am pleased to acknowledge GoTechEdu for delivering practical computer skills and hands-on workshops on our campus. Their sessions helped students connect classroom concepts to real industry practices, empowering them with knowledge, technical thinking, and career clarity.",
    author: "Dr. Sandhya Sinha",
    role: "Dean",
    institution: "Maharishi University, Lucknow",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80",
    accentColor: "bg-purple-600",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    tag: "University Campus Partner",
    rating: 5,
  },
  {
    id: 4,
    title: "Testimonial from Charak Group of Institutions",
    quote:
      "GoTechEdu has set a high standard for computer education, Full Stack training, and vocational readiness. Their curriculum aligns seamlessly with modern tech requirements, and their dedicated mentorship ensures students are genuinely job-ready upon graduation.",
    author: "Dr. Anuradha Singh",
    role: "Principal",
    institution: "Charak Group Of Institutions, Lucknow",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80",
    accentColor: "bg-cyan-600",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
    tag: "Institutional Excellence",
    rating: 5,
  },
  {
    id: 5,
    title: "Enterprise IT Solutions Transformation",
    quote:
      "GoTechEdu transformed our legacy ERP into a high-speed microservices architecture and deployed automated AI customer workflows. Their team delivered with zero downtime and their corporate upskilling program boosted our dev team's velocity by 3.5x.",
    author: "Vikram Sharma",
    role: "Chief Technology Officer",
    institution: "FinTech Global Enterprise",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
    accentColor: "bg-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    tag: "Enterprise Client",
    rating: 5,
  },
  {
    id: 6,
    title: "Autonomous AI & Cloud Scalability",
    quote:
      "The custom AI agent pipeline built by GoTechEdu reduced customer support triage time by 75%. Their combined strength in software engineering and professional training makes them our go-to technology partner.",
    author: "Elena Rostova",
    role: "VP of Product Engineering",
    institution: "HealthTech Global Labs",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&q=80",
    accentColor: "bg-amber-600",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    tag: "AI & Cloud Client",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 5000;
  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  };

  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const startTime = Date.now();
    setProgress(0);

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
    }, 50);

    timerRef.current = setTimeout(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentIndex, isPlaying, isHovered]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-18 sm:py-24 border-t border-slate-100"
    >
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-[11px] font-mono font-extrabold uppercase tracking-widest text-blue-700 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Verified Stories
          </div>

          <p className="mt-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-blue-600">
            Our testimonials
          </p>
          <h2 className="mt-1 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
            What they are saying?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Authentic reviews from academic coordinators, university deans, college principals,
            and enterprise technology leaders.
          </p>
        </div>

        {/* Interactive Controls & Progress Bar */}
        <div className="mt-8 sm:mt-10 flex items-center justify-between gap-4 max-w-4xl mx-auto">
          {/* Progress Indicator Bar */}
          <div className="flex-1 bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>


        </div>

        {/* Dynamic Interactive Testimonials Stage */}
        <div
          className="mt-8 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[0, 1, 2].map((offset) => {
              const itemIndex = (currentIndex + offset) % totalSlides;
              const item = testimonials[itemIndex];
              const isMain = offset === 0;

              return (
                <div
                  key={`${item.id}-${offset}`}
                  onClick={() => {
                    if (!isMain) {
                      setCurrentIndex(itemIndex);
                      setProgress(0);
                    }
                  }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-500 cursor-pointer ${isMain
                    ? "border-blue-500 bg-white p-6 sm:p-8 shadow-xl shadow-blue-900/10 scale-100 ring-2 ring-blue-500/20"
                    : "border-slate-200/90 bg-slate-50/70 p-6 opacity-85 hover:opacity-100 hover:bg-white hover:border-blue-300 hover:shadow-md"
                    }`}
                >
                  {/* Top Colored Accent Bar */}
                  <div
                    className={`absolute top-0 inset-x-0 ${isMain ? "h-2" : "h-1.5"
                      } ${item.accentColor}`}
                  />

                  <div>
                    {/* Header Row: Badge & Stars */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <span
                        className={`inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeBg}`}
                      >
                        {item.tag}
                      </span>
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`mt-4 font-heading font-black leading-snug transition-colors ${isMain ? "text-lg sm:text-xl text-slate-950 text-blue-600" : "text-base text-slate-900"
                        }`}
                    >
                      {item.title}
                    </h3>

                    {/* Quote Text */}
                    <div className="relative mt-3">
                      <Quote className="absolute -top-1 -left-1 w-6 h-6 text-slate-200 -z-0 opacity-50" />
                      <p
                        className={`relative z-10 text-xs sm:text-sm text-slate-600 leading-relaxed italic ${!isMain ? "line-clamp-4" : ""
                          }`}
                      >
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Real Person Author Photo Information */}
                  <div className="mt-6 border-t border-slate-100 pt-4 flex items-center gap-3.5">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md ring-2 ring-blue-500/20">
                      <Image
                        src={item.image}
                        alt={item.author}
                        fill
                        sizes="48px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-heading text-sm font-bold text-slate-950 truncate">
                          {item.author}
                        </h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      </div>
                      <p className="text-[11px] font-medium text-slate-500 truncate">
                        {item.role}
                      </p>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setCurrentIndex(idx);
                setProgress(0);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`cursor-pointer rounded-full transition-all duration-300 ${currentIndex === idx
                ? "w-8 h-2.5 bg-blue-600 shadow-sm"
                : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
