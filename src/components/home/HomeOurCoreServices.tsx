"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Sole Proprietorship",
    description:
      "Complete assistance in registering your sole proprietorship with full legal compliance.",
  },
  {
    id: "02",
    title: "GST Registration",
    description:
      "Fast and secure GST registration to ensure tax compliance and business legitimacy.",
  },
  {
    id: "03",
    title: "Income Tax Return Filing",
    description:
      "Professional ITR filing services with optimized tax savings and full compliance.",
  },
  {
    id: "04",
    title: "EPFO Registration",
    description:
      "Seamless EPFO registration and compliance support for employers and organizations.",
  },
  {
    id: "05",
    title: "TDS Returns Filing",
    description:
      "Accurate TDS filing with expert support to avoid penalties and ensure compliance.",
  },
];

const HomeOurCoreServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) cardRefs.current[index] = el;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
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
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-16 lg:py-4 px-6 lg:px-16 overflow-hidden">

      {/* background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 opacity-10 blur-3xl rounded-full"></div>

      <div ref={sectionRef} className="max-w-7xl mx-auto">

        {/* heading */}
        <div className="text-center mb-16">

          <p className="inline-block bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full mb-4">
            Our Core Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Professional Business Solutions
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            We provide comprehensive business registration, tax, and compliance
            services with enterprise-level reliability and support.
          </p>

        </div>

        {/* services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => addToRefs(el, index)}
              className="group bg-white border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >

              {/* hover accent line */}
              <div className="absolute left-0 top-0 w-1 h-full bg-yellow-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

              {/* service number */}
              <p className="text-blue-200 text-5xl font-bold mb-4">
                {service.id}
              </p>

              {/* title */}
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {service.title}
              </h3>

              {/* description */}
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* arrow */}
              <div className="flex items-center text-blue-600 font-semibold">
                Learn More
                <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              {/* hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-yellow-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HomeOurCoreServices;