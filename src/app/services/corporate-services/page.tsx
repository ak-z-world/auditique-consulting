import { Header } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Services",
  description:
    "Professional corporate advisory services including ROC compliance, company conversion, share transfers, NCLT appeals, accounting, and director compliance support.",
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
              Corporate
              <span className="text-[#FFC107]"> Services</span>
            </h1>

            <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-xl">
              Modern businesses require expert financial, legal, and compliance
              support to operate smoothly. Our corporate services help
              organizations manage legal compliance, financial health, and
              structural changes with expert guidance from Chartered
              Accountants.
            </p>

            <Link href="/contact-us">
              <button className="mt-8 bg-[#FFC107] text-[#0B2A5B] font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition">
                Consult Now
              </button>
            </Link>

          </div>

          <div>

            <Image
              src="/images/corporate-services.jpg"
              alt="Corporate Advisory"
              width={600}
              height={420}
              className="rounded-xl shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Corporate <span className="text-[#FFC107]">Offerings</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            <ServiceCard
              title="Conversion of Companies / LLP"
              text="Businesses sometimes need to restructure based on economic changes. Our experts assist with legal conversion of companies or LLPs."
            />

            <ServiceCard
              title="ROC Compliance & Advisory"
              text="As per the Companies Act 2013, companies must submit annual compliance reports to the Ministry of Corporate Affairs."
            />

            <ServiceCard
              title="Share Transfers"
              text="Share transfers allow company members to transfer ownership rights and responsibilities to another individual."
            />

            <ServiceCard
              title="Private Placements"
              text="Private placements allow companies to raise capital from a select group of private investors."
            />

            <ServiceCard
              title="Company / LLP Closure"
              text="Inactive companies can legally apply for strike-off with the Registrar to remove the entity from the register."
            />

            <ServiceCard
              title="Appeals to NCLT"
              text="The National Company Law Tribunal handles corporate disputes and appeals related to company law."
            />

            <ServiceCard
              title="DIN Application"
              text="Anyone wishing to become a director must obtain a Director Identification Number (DIN) issued by MCA."
            />

            <ServiceCard
              title="Director / Address Change"
              text="Changes in directors or company address must be legally registered with government authorities."
            />

            <ServiceCard
              title="Accounting & Bookkeeping"
              text="Accurate accounting is the backbone of financial health and is essential for auditing and strategic planning."
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
            “BBig has been a guiding light in strategizing and supporting us in
            finance, accounting, taxation, and statutory compliances. Their
            responsive and well-informed approach makes complex financial
            processes easy and efficient.”
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

      <section className="bg-[#0B2A5B] text-white py-20 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Sounds like you need these services
        </h2>

        <p className="mt-4 text-blue-100">
          Don't worry, you are in great hands!
        </p>

        <Link href="/contact-us">
          <button className="mt-8 bg-[#FFC107] text-[#0B2A5B] px-10 py-4 font-semibold rounded-lg hover:scale-105 transition">
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