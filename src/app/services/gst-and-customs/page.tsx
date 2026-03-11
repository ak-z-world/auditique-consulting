import { Header } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST and Customs Services",
  description:
    "Expert GST registration, GST return filing, advisory, and customs consulting services to keep your business compliant with Indian tax laws.",
};

export default function Page() {
  return (
    <main className="bg-white text-[#0B2A5B] overflow-hidden">

      {/* HEADER */}

      <div className="mx-auto">
        <Header />
      </div>

      {/* HERO SECTION */}

      <section className="bg-[#0B2A5B] text-white py-24 relative overflow-hidden">

        <div className="absolute top-[-100px] right-[-120px] w-[420px] h-[420px] bg-[#FFC107] opacity-20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              GST &
              <span className="text-[#FFC107]"> Customs</span>
            </h1>

            <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-xl">
              The GST Act has transformed indirect taxation in India. However,
              frequent regulatory updates make GST compliance challenging.
              Our experts help businesses stay compliant through GST
              registrations, return filing, advisory services, and customs
              consulting.
            </p>

            <Link href="/contact-us">
              <button className="mt-8 bg-[#FFC107] text-[#0B2A5B] font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition">
                Book a Call
              </button>
            </Link>

          </div>

          <div>

            <Image
              src="/images/pic-4.jpg"
              alt="GST Consulting"
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
            GST & Customs <span className="text-[#FFC107]">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            <ServiceCard
              title="GST Registration"
              text="Businesses with turnover exceeding ₹20L for services or ₹40L for goods must register for GST. We assist with complete GST registration and obtaining your GSTIN."
            />

            <ServiceCard
              title="GST Return Filing"
              text="Once registered, businesses must file GST returns regularly. Even with no transactions, nil returns must be filed to stay compliant."
            />

            <ServiceCard
              title="GST Advisory"
              text="The GST Act frequently evolves. Our experts help businesses stay updated and adopt strategies that maximize compliance and benefits."
            />

            <ServiceCard
              title="GST Advance Ruling"
              text="Advance rulings clarify GST provisions before transactions take place, reducing uncertainty and ensuring regulatory clarity."
            />

            <ServiceCard
              title="GST Annual Returns"
              text="Businesses must file annual GST returns like GSTR-9 and reconciliation statements like GSTR-9C based on turnover thresholds."
            />

            <ServiceCard
              title="GST Appeals & Representation"
              text="In case of discrepancies or compliance issues, we assist with GST assessments, appeals, and professional representation."
            />

            <ServiceCard
              title="Customs Import/Export Advisory"
              text="Our experts guide businesses on foreign trade policies, duty exemptions, and customs procedures to optimize international trade operations."
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
            “It has been an incredible journey working with BBig Consultants.
            Their team consistently goes beyond expectations to solve client
            challenges. Their knowledge, expertise, and innovative thinking
            have been invaluable for our organization.”
          </p>

          <p className="mt-6 font-semibold">
            Mahadevan
          </p>

          <p className="text-gray-500 text-sm">
            CFO – Arslan India
          </p>

        </div>

      </section>

      {/* WHY TRUST US */}

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
          Don't worry, you are in great hands.
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