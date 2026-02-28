"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaBuilding,
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaUsersCog,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: FaBuilding,
    title: "Business Registration",
    desc: "Company formation, LLP, Pvt Ltd, and legal structuring services.",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Tax Filing & Advisory",
    desc: "GST, ITR, and tax optimization with full compliance support.",
  },
  {
    icon: FaBalanceScale,
    title: "Corporate Compliance",
    desc: "MCA filings, legal compliance, and regulatory management.",
  },
  {
    icon: FaUsersCog,
    title: "Payroll & Licensing",
    desc: "PF, ESI, licensing, and workforce compliance solutions.",
  },
];

export default function HomeTaxBusinessConsultingService() {
  const sectionRef = useRef(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) cardRefs.current[index] = el;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: index * 0.12,
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
      className="relative bg-gradient-to-b from-white via-blue-50 to-white py-0 px-4 lg:px-16"
    >
      {/* compact container */}
      <div className="max-w-7xl mx-auto">

        {/* header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <p className="text-blue-600 font-semibold mb-2">
              Consulting Services
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Business & Tax Consulting
            </h2>

          </div>

          <p className="text-gray-600 max-w-xl">
            Enterprise-grade consulting solutions designed to establish,
            manage, and scale your business operations efficiently.
          </p>

        </div>

        {/* compact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <div
                key={index}
                ref={(el) => addToRefs(el, index)}
                className="group bg-white border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >

                <div className="flex items-center justify-between mb-4">

                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-blue-900 transition">
                    <Icon size={20} />
                  </div>

                  <div className="w-6 h-6 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 transition"></div>

                </div>

                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {service.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}