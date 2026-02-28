"use client";

import React, { useRef, useEffect } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { FaChartLine, FaShieldAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CountUp } from "../animations";

gsap.registerPlugin(ScrollTrigger);

const HomeWhyYouHaveToChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) cardRefs.current[index] = el;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      cardRefs.current.forEach((card, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-16 lg:py-24 px-6 lg:px-16 overflow-hidden">

      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl"></div>

      <div ref={sectionRef} className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900">
          Why Choose Our Expertise
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We deliver world-class consulting solutions that ensure growth,
          performance, and long-term business success with proven reliability.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* Card 1 */}
          <div
            ref={(el) => addToRefs(el, 0)}
            className="group bg-white border border-blue-100 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-xl mb-6 group-hover:bg-yellow-400 group-hover:text-blue-900 transition-all">
              <BsPeopleFill size={26} />
            </div>

            <h3 className="text-blue-900 text-5xl font-bold">
              <CountUp from={0} to={20} duration={1.5} />K+
            </h3>

            <p className="mt-4 font-semibold text-lg text-blue-800">
              Clients Served
            </p>

            <p className="mt-2 text-gray-600">
              Trusted by thousands of businesses worldwide with proven results
              and premium consulting services.
            </p>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => addToRefs(el, 1)}
            className="group bg-white border border-blue-100 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-xl mb-6 group-hover:bg-yellow-400 group-hover:text-blue-900 transition-all">
              <FaChartLine size={26} />
            </div>

            <h3 className="text-blue-900 text-5xl font-bold">
              <CountUp from={0} to={98} duration={1.5} />%
            </h3>

            <p className="mt-4 font-semibold text-lg text-blue-800">
              Success Rate
            </p>

            <p className="mt-2 text-gray-600">
              Industry-leading success ratio ensuring client growth, compliance,
              and operational excellence.
            </p>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => addToRefs(el, 2)}
            className="group bg-white border border-blue-100 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-xl mb-6 group-hover:bg-yellow-400 group-hover:text-blue-900 transition-all">
              <FaShieldAlt size={26} />
            </div>

            <h3 className="text-blue-900 text-5xl font-bold">
              <CountUp from={0} to={89} duration={1.5} />%
            </h3>

            <p className="mt-4 font-semibold text-lg text-blue-800">
              Corporate Trust
            </p>

            <p className="mt-2 text-gray-600">
              Preferred by enterprises, startups, and global organizations for
              secure and reliable consulting.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeWhyYouHaveToChooseUs;