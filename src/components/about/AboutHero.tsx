/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Header } from "../layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CountUp } from "../animations";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {

  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const progressRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(leftContentRef.current, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(rightContentRef.current, {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.fromTo(
        progressRef.current,
        { width: "0%" },
        {
          width: "95%",
          duration: 2,
          ease: "power2.out",
          delay: 0.5,
        }
      );

    });

    return () => ctx.revert();

  }, []);

  return (

    <main>

      <section className="bg-white text-[#0B2A5B] general-sans">

        {/* Header */}
        <div className="mx-auto relative z-50 mt-13">
          <Header />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-10 pb-12">

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT */}
            <div ref={leftContentRef} className="space-y-4">

              {/* Heading */}
              <h1 className="font-semibold leading-tight text-[#0B2A5B]">

                {/* Line 1 */}
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">
                  Auditique Consulting
                </span>

                {/* Line 2 */}
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">

                  <span className="bg-gradient-to-r from-[#0B2A5B] to-yellow-500 bg-clip-text text-transparent">
                    Financial Excellence.
                  </span>{" "}

                  <span className="text-yellow-500">
                    Trusted Advisory.
                  </span>

                </span>

              </h1>


              {/* Description */}
              <p className="text-sm sm:text-base text-[#0B2A5B]/70 max-w-xl">

                Auditique Consulting is a Chartered Accountancy firm delivering trusted financial, tax, and advisory solutions to help businesses achieve compliance, clarity, and sustainable growth.

              </p>


              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm pt-2">

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Client-First Advisory
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Strategic Tax Planning
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Compliance & Risk Management
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Business Growth Support
                </div>

              </div>


              {/* CTA */}
              <div className="pt-3">

                <Link href="/contact">

                  <button className="bg-[#0B2A5B] text-white px-6 py-2.5 rounded-full hover:bg-yellow-500 hover:text-[#0B2A5B] transition-all duration-300 text-sm sm:text-base">

                    Get Consultation

                  </button>

                </Link>

              </div>

            </div>


            {/* RIGHT */}
            {/* RIGHT */}
            <div ref={rightContentRef} className="flex justify-start md:justify-end">

              <div className="bg-white border border-blue-100 rounded-2xl p-6 w-full max-w-[360px] shadow-lg">

                <h3 className="text-xl font-semibold text-[#0B2A5B] mb-4">
                  Our Core Expertise
                </h3>

                <div className="space-y-4 text-sm">

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 font-semibold">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-[#0B2A5B]">Tax Advisory</p>
                      <p className="text-[#0B2A5B]/70 text-sm">
                        Strategic tax planning and compliance support for businesses and individuals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 font-semibold">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-[#0B2A5B]">Audit & Assurance</p>
                      <p className="text-[#0B2A5B]/70 text-sm">
                        Transparent and reliable auditing services to maintain financial credibility.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 font-semibold">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-[#0B2A5B]">Business Consulting</p>
                      <p className="text-[#0B2A5B]/70 text-sm">
                        Practical advisory to optimize financial performance and growth.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 font-semibold">
                      4
                    </div>
                    <div>
                      <p className="font-medium text-[#0B2A5B]">Compliance Services</p>
                      <p className="text-[#0B2A5B]/70 text-sm">
                        Ensuring regulatory compliance across financial and corporate frameworks.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="mt-6">
                  <Link href="/services">
                    <button className="w-full bg-yellow-500 text-[#0B2A5B] font-medium py-2.5 rounded-lg hover:bg-yellow-400 transition">
                      Explore Our Services
                    </button>
                  </Link>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

};

export default AboutHero;