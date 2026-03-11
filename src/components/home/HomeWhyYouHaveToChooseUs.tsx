"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const DIFFERENTIATORS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 010 1.332 3.745 3.745 0 01-1.332 3.068 3.745 3.745 0 01-3.068 1.593 3.745 3.745 0 01-1.332 1.593 3.745 3.745 0 01-3.068 0 3.745 3.745 0 01-1.332-1.593 3.745 3.745 0 01-3.068-1.332 3.745 3.745 0 01-1.593-3.068 3.745 3.745 0 010-1.332 3.745 3.745 0 011.332-3.068 3.745 3.745 0 011.593-3.068 3.745 3.745 0 013.068-1.332 3.745 3.745 0 011.332-1.593 3.745 3.745 0 013.068 0z" />
      </svg>
    ),
    tag: "Accountability",
    headline: "Fixed-fee with outcome guarantees",
    body: "We price on results, not hours. Every engagement comes with milestone-based billing — you only pay the next tranche when agreed deliverables are met. No retainer traps.",
    proof: "Typical consulting locks you into monthly fees. We don't.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    tag: "Speed",
    headline: "First diagnostic within 72 hours",
    body: "We run our proprietary OpScan™ framework on your business within three business days of kickoff — not weeks. You get a written gap analysis before any strategy session.",
    proof: "Most firms spend 3 weeks just in discovery calls.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    tag: "Senior Access",
    headline: "The partner works your account — directly",
    body: "No junior hand-offs. The senior consultant you evaluate in your first call is the one who shows up every week. Your Slack, your calls, your strategy — handled by the same expert.",
    proof: "Big-four firms routinely reassign your work to analysts.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    tag: "IP Transfer",
    headline: "Every framework we build, you keep",
    body: "Playbooks, SOPs, dashboards, and decision trees — all fully documented and transferred at project close. We build systems that run without us, because repeat business should come from trust, not dependency.",
    proof: "Consultants who keep their frameworks keep you dependent.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    tag: "Measurability",
    headline: "KPIs agreed before work begins",
    body: "Every project starts with a written success scorecard — specific, numeric, time-bound. At project close, we measure against it together. Transparent. No room for moving goalposts.",
    proof: "Vague 'transformation goals' can never be held accountable.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    tag: "Confidentiality",
    headline: "NDA before the first conversation",
    body: "We sign a mutual NDA before any discovery call — not after you've already shared your sensitive business data. Your competitive intelligence never leaves the room.",
    proof: "Most firms ask for NDA only after initial scoping.",
  },
];

const HomeWhyYouHaveToChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) cardRefs.current[index] = el;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
      });

      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: lineRef.current, start: "top 85%" },
      });

      cardRefs.current.forEach((card, index) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: (index % 3) * 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%" },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white via-blue-50 to-white py-16 lg:py-28 px-6 lg:px-16 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headingRef} className="text-center mb-4">
          <p className="text-yellow-500 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Why work with us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
            Six things we do
            <span className="block text-yellow-500">that others don't.</span>
          </h2>
          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Not promises. Not percentages. Concrete, verifiable practices that
            protect your investment and your time.
          </p>
        </div>

        {/* Accent line */}
        <div
          ref={lineRef}
          className="mt-10 mb-14 h-0.5 w-full rounded-full"
          style={{ background: "linear-gradient(90deg, #1d4ed8, #facc15, transparent)" }}
        />

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((item, index) => (
            <div
              key={index}
              ref={(el) => addToRefs(el, index)}
              className="group relative bg-white border border-blue-100 rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* Top row: tag + icon */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {item.tag}
                </span>
                <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-xl group-hover:bg-yellow-400 group-hover:text-blue-900 transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Headline */}
              <h3 className="text-blue-900 text-xl font-bold leading-snug mb-3">
                {item.headline}
              </h3>

              {/* Body */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {item.body}
              </p>

              {/* Proof bar */}
              <div className="rounded-xl px-4 py-3 text-xs leading-snug bg-yellow-50 border border-yellow-200 text-gray-600">
                <span className="text-yellow-600 font-semibold">The alternative: </span>
                {item.proof}
              </div>

              {/* Number watermark */}
              <div className="absolute bottom-3 right-5 text-7xl font-bold select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-300 text-blue-900 leading-none">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-blue-900 shadow-xl">
          <div>
            <p className="text-white text-xl font-bold leading-snug">
              Still evaluating? Ask us to prove any of these in writing.
            </p>
            <p className="text-blue-200 text-sm mt-1">
              We'll send you a sample NDA, a success scorecard, and a client reference — before you commit.
            </p>
          </div>
          <Link href="/contact-us">
            <button className="shrink-0 font-semibold text-sm px-7 py-3.5 rounded-xl bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap shadow-md">
              Request Evidence Pack →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeWhyYouHaveToChooseUs;