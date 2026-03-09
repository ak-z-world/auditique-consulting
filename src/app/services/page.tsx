"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/layout";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { path: "income-tax", title: "Income Tax" },
  { path: "gst-and-customs", title: "GST & Customs" },
  { path: "company-registration", title: "Company Registration" },
  { path: "corporate-services", title: "Corporate Services" },
  { path: "audit-and-assurance", title: "Audit & Assurance" },
  { path: "investment-and-finance", title: "Investment & Finance" },
];

export default function Page() {

  const cardsRef = useRef<any[]>([]);
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {

    gsap.from(heroRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 80,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#services",
        start: "top 80%"
      }
    });

  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-yellow-50 overflow-hidden">

      {/* HEADER */}

      <div className="mx-auto">
        <Header />
      </div>


      {/* HERO SECTION */}

      <section
        ref={heroRef}
        className="relative py-24 text-center px-6"
      >

        {/* background glow */}

        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">

          <div className="w-[600px] h-[600px] bg-blue-200 rounded-full blur-[160px] opacity-30"></div>

        </div>

        <h1
          ref={titleRef}
          className="relative text-4xl md:text-6xl lg:text-7xl font-bold text-[#0B2A5B] leading-tight"
        >
          Professional
          <span className="text-[#FFC107]"> Business Services</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
          Simplifying taxation, compliance and corporate services with
          technology-driven expertise and modern solutions for businesses.
        </p>

        <div className="mt-10 flex justify-center">

          <span className="px-6 py-3 rounded-full bg-white shadow-lg border border-blue-100 text-[#0B2A5B] font-semibold tracking-wide">

            Our Core Services

          </span>

        </div>

      </section>



      {/* SERVICES GRID */}

      <section
        id="services"
        className="pb-24 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (

              <Link
                key={index}
                href={`/services/${service.path}`}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group"
              >

                <div className="relative h-full p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

                  {/* corner glow */}

                  <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-200 blur-2xl opacity-0 group-hover:opacity-40 transition"></div>

                  {/* number */}

                  <div className="text-6xl font-extrabold text-blue-100 group-hover:text-[#FFC107] transition">

                    {index + 1}

                  </div>

                  {/* title */}

                  <h3 className="mt-6 text-2xl font-semibold text-[#0B2A5B] group-hover:text-[#FFC107] transition">

                    {service.title}

                  </h3>

                  {/* divider */}

                  <div className="mt-4 w-12 h-[3px] bg-[#FFC107] group-hover:w-24 transition-all duration-300"></div>

                  {/* description */}

                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">

                    Professional assistance for business registration,
                    compliance, and financial services designed for modern
                    companies.

                  </p>

                  {/* arrow */}

                  <div className="absolute bottom-6 right-6 text-xl text-[#0B2A5B] group-hover:text-[#FFC107] transition">

                    →

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>



      {/* CTA SECTION */}

      <section className="relative py-20 text-center text-white overflow-hidden">

        {/* background gradient */}

        <div className="absolute inset-0 bg-[#0B2A5B]"></div>

        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-400 opacity-20 blur-[160px] rounded-full"></div>

        <div className="relative max-w-3xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">

            Need Expert Assistance?

          </h2>

          <p className="mt-6 text-blue-100 text-lg">

            Our experts are ready to guide you through business registration,
            taxation and corporate compliance.

          </p>

          <Link href="/contact-us">

            <button className="mt-8 bg-[#FFC107] text-black font-semibold px-10 py-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition">

              Contact Our Experts

            </button>

          </Link>

        </div>

      </section>

    </main>
  );
}