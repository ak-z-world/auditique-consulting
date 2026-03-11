import { Header } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit and Assurance Services",
  description:
    "Professional audit and assurance services including corporate audits, internal audits, risk assessment, certifications, bank audits, and financial due diligence.",
};

export default function Page() {
  return (
    <main className="bg-white text-[#0B2A5B] overflow-hidden">

      {/* HEADER */}

      <div className="mx-auto">
        <Header />
      </div>

      {/* HERO */}

      <section className="bg-[#0B2A5B] text-white py-24 relative overflow-hidden">

        <div className="absolute right-[-120px] top-[-120px] w-[420px] h-[420px] bg-[#FFC107] opacity-20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Audit &
              <span className="text-[#FFC107]"> Assurance</span>
            </h1>

            <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-xl">
              Reliable auditing ensures transparency, regulatory compliance,
              and strong financial governance. Our audit and assurance services
              help organizations evaluate financial accuracy, detect risks, and
              strengthen internal controls for sustainable growth.
            </p>

            <Link href="/contact-us">
              <button className="mt-8 bg-[#FFC107] text-[#0B2A5B] font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition">
                Consult Now
              </button>
            </Link>

          </div>

          <div>

            <Image
              src="/images/pic-1.jpg"
              alt="Audit and Assurance"
              width={600}
              height={420}
              className="rounded-xl shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* OFFERINGS */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Audit <span className="text-[#FFC107]">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            <ServiceCard
              title="Corporate Audit & Reporting"
              text="Large organizations require professional oversight of financial transactions and reporting. Our experts ensure accurate audits and compliance with regulatory requirements."
            />

            <ServiceCard
              title="Internal Audit & Risk Assessment"
              text="We evaluate operational processes and identify potential financial and operational risks to help businesses implement better controls."
            />

            <ServiceCard
              title="Internal Financial Control Audit"
              text="This audit reviews internal financial processes to ensure compliance with policies, prevent fraud, and safeguard company assets."
            />

            <ServiceCard
              title="Due Diligence"
              text="Our financial, commercial, and legal due diligence services provide businesses with insights into the financial health and potential risks before major decisions."
            />

            <ServiceCard
              title="Interim Financial Reviews"
              text="Interim audits conducted during the financial year help businesses identify discrepancies early and maintain accurate records."
            />

            <ServiceCard
              title="Professional Certifications"
              text="We provide certified financial reports including net worth certificates, turnover certificates, asset valuation certificates, and more."
            />

            <ServiceCard
              title="Bank Audit Services"
              text="Bank audits involve a comprehensive review of financial records and regulatory compliance for financial institutions."
            />

            <ServiceCard
              title="Outsourced Accounting & Audits"
              text="Organizations can outsource their accounting and audit functions to our experts for efficient financial management and timely reporting."
            />

          </div>

        </div>

      </section>

      {/* TESTIMONIAL */}

      <section className="bg-blue-50 py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Expertise that has helped many others like you
          </h2>

          <p className="mt-10 text-lg text-gray-700 leading-relaxed">
            “Their expertise in finance, taxation, and compliance has been
            invaluable for our organization. The team consistently delivers
            solutions efficiently while maintaining clear communication
            throughout the process.”
          </p>

          <p className="mt-6 font-semibold">
            Lakshmi Narayanan
          </p>

          <p className="text-gray-500 text-sm">
            Partner – Prakruti Business Advisors
          </p>

        </div>

      </section>

      {/* TRUST SECTION */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Why Clients <span className="text-[#FFC107]">Trust Us</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16 text-center">

            {[
              "End-to-End Services",
              "Industry Expertise",
              "Continuous Support",
              "Government Compliance",
              "Trust & Confidentiality",
              "On-Time Deliverables",
            ].map((item, index) => (
              <div
                key={index}
                className="border border-blue-100 rounded-xl p-6 hover:shadow-lg transition"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#0B2A5B] text-white py-10 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Need professional audit support?
        </h2>

        <p className="mt-4 text-blue-100">
          Our experts help businesses maintain transparency, compliance, and
          financial accuracy.
        </p>

        <Link href="/contact-us">
          <button className="mt-8 bg-[#FFC107] text-[#0B2A5B] px-5 py-2 font-semibold rounded-lg hover:scale-105 transition">
            Schedule a Call
          </button>
        </Link>

      </section>

    </main>
  );
}

/* SERVICE CARD */

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="border border-blue-100 p-8 rounded-xl hover:shadow-xl transition">

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        {text}
      </p>

    </div>
  );
}