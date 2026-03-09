import { Header } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Registration Services",
  description:
    "Professional company registration services including trust formation, partnership registration, MSME registration, licenses, and incorporation support for startups and businesses in India.",
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
              Company
              <span className="text-[#FFC107]"> Registration</span>
            </h1>

            <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-xl">
              Registering your business is the foundation of building a
              successful company. Our experts assist founders with legal
              registrations, compliance procedures, and government approvals so
              that entrepreneurs can focus on growing their ventures.
            </p>

            <Link href="/contact-us">
              <button className="mt-8 bg-[#FFC107] text-[#0B2A5B] font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition">
                Book a Call
              </button>
            </Link>

          </div>

          <div>

            <Image
              src="/images/company-registration.jpg"
              alt="Company Registration"
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
            Registration <span className="text-[#FFC107]">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            <ServiceCard
              title="Trust Formation & Registration"
              text="Trusts are commonly established for charitable or social causes. We assist in setting up and legally registering different types of trusts with proper documentation."
            />

            <ServiceCard
              title="Partnership Firm Registration"
              text="Partnership firms operate based on a partnership deed defining roles and responsibilities. Registration ensures legal recognition and smoother business operations."
            />

            <ServiceCard
              title="MSME / SSI Registration"
              text="Small and medium enterprises can register under MSME schemes to access government incentives, subsidies, and support programs."
            />

            <ServiceCard
              title="FSSAI License Registration"
              text="Businesses involved in food production, distribution, or sale must obtain FSSAI registration to ensure food safety compliance."
            />

            <ServiceCard
              title="Shop & Establishment License"
              text="Commercial establishments must register under state laws to operate legally within their jurisdiction."
            />

            <ServiceCard
              title="Trade License Registration"
              text="Municipal corporations issue trade licenses allowing businesses to legally operate within city limits."
            />

            <ServiceCard
              title="Professional Tax Registration"
              text="Employers must deduct professional tax from employees and remit it to the state government as per applicable regulations."
            />

            <ServiceCard
              title="Import Export Code (IEC)"
              text="Businesses engaged in international trade must obtain an IEC code issued by the Directorate General of Foreign Trade."
            />

            <ServiceCard
              title="Digital Signature Certificate"
              text="Digital signatures enable secure online submission of official documents and are mandatory for many government filings."
            />

            <ServiceCard
              title="EPF Registration"
              text="Companies with more than twenty employees must register under the Employees' Provident Fund scheme."
            />

            <ServiceCard
              title="ESIC Registration"
              text="Businesses employing ten or more workers must register under ESIC to provide employee insurance benefits."
            />

            <ServiceCard
              title="Society / Association Registration"
              text="Societies formed for educational, charitable, or social purposes must be registered under the Societies Registration Act."
            />

            <ServiceCard
              title="Drafting Agreements & MOUs"
              text="Well-structured agreements and memorandums of understanding define responsibilities and protect business interests."
            />

            <ServiceCard
              title="Company & LLP Incorporation"
              text="We assist startups and entrepreneurs in incorporating private limited companies or LLPs with complete MCA compliance."
            />

          </div>

        </div>

      </section>

      {/* TESTIMONIAL */}

      <section className="bg-blue-50 py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by Businesses
          </h2>

          <p className="mt-10 text-lg text-gray-700 leading-relaxed">
            “Their guidance across finance, taxation, and statutory compliance
            has been invaluable. The team consistently delivers practical
            solutions and communicates clearly throughout the entire process.”
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
          Ready to start your business?
        </h2>

        <p className="mt-4 text-blue-100">
          Our experts will guide you through every step of the registration
          process.
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