"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGlobe, FaUserTie, FaLaptopCode, FaAward } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: FaUserTie,
    title: "Expert Chartered Accountants",
    description:
      "Our team of experienced Chartered Accountants provides reliable guidance in taxation, compliance, and financial advisory for individuals and businesses.",
  },
  {
    icon: FaGlobe,
    title: "End-to-End Financial Solutions",
    description:
      "From Income Tax filing and GST compliance to company registration and auditing, we deliver complete financial solutions under one roof.",
  },
  {
    icon: FaLaptopCode,
    title: "Modern Compliance & Filing",
    description:
      "We use modern digital systems and updated regulatory practices to ensure timely filings, transparency, and accurate compliance.",
  },
  {
    icon: FaAward,
    title: "Trusted by Businesses",
    description:
      "Our client-first approach and professional expertise help MSMEs, startups, and enterprises manage finances and grow with confidence.",
  },
];

const HomeWhatMakesUsDifferent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) cardRefs.current[index] = el;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      cardRefs.current.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white via-blue-50 to-white py-16 lg:py-24 px-6 lg:px-16 overflow-hidden">
      {/* Background premium glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <p className="inline-block bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full mb-4">
            Why Choose Auditique Consulting
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Your Trusted Financial & Compliance Partner
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            We provide end-to-end Chartered Accountancy services including
            Income Tax filing, GST compliance, company registration, auditing,
            and financial advisory to help businesses stay compliant and grow
            confidently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                ref={(el) => addToRefs(el, index)}
                className="group bg-white border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600 text-white mb-6 group-hover:bg-yellow-400 group-hover:text-blue-900 transition-all duration-300">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-blue-900 font-semibold text-xl mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">{feature.description}</p>

                {/* Hover Accent */}
                <div className="mt-4 h-1 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeWhatMakesUsDifferent;
