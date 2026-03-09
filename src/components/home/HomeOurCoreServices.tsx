"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);


const services = [
  {
    id: "01",
    title: "Income Tax",
    description:
      "The Central Government essentially levies Income Tax for all Individuals, MSMEs, and Corporates alike. Many tax percentage grades are imposed on different income brackets across the board. Apart from these, there are constant changes to the policies, grants, and levies applied under various conditions. Hiring a CA firm to file your Income Tax allows you to benefit from these Tax Exemptions and ensure that your IT is filed on time without incurring any late fees",
  },
  {
    id: "02",
    title: "GST & Customs",
    description:
      "There has been much confusion regarding the GST Act. However, it is necessary to centralize all forms of Indirect Tax to improve transparency. Today, all organizations are required to file GST at regular intervals. As this is a relatively new venture by the Government, and as a consequence, the rules behind GST Registration and GST Filing are subject to frequent changes requiring one to update themselves on it regularly.",
  },
  {
    id: "03",
    title: "Company Registration",
    description:
      "The first step to build a million-dollar business is registering it with the Government. Collaborate with a CA Firm associated with ICAI to help you navigate the legal landscape and make the process hassle-free. As a founder, every minute is crucial for you. Invest it wisely.",
  },
  {
    id: "04",
    title: "Corporate Services",
    description:
      "Many Corporates require specialized services from CA Firms or Auditing Firms. It is essential to consult with Chartered Accountants concerning Risk Advisory, Conversion of Companies, Share Transfers, and other legal matters like DIN Application, ROC Compliance, and Director Changes.",
  },
  {
    id: "05",
    title: "Audit & Assurance",
    description:
      "The primary purpose of Auditing Firms is to Audit and Report the Financials of Corporate Entities. BBig Consultants also provide tailor-fit solutions like Interim Reviews, Internal Financial Control Audit, Certifications, Bank Audits, and Due Diligence. Your search for a trusted end-to-end Solutions expert ends here.",
  },
  {
    id: "06",
    title: "Investment & Finance",
    description:
      "Navigating the Investment and Finance landscape can often be a daunting task but we are here to help you with Investment Advisory. BBig Consultants also offer services such as Valuations for Investments, Strategizing and Assisting the planning and Execution of Mergers and Acquisitions, and other solutions like Payroll Maintenance and Financial projections.",
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