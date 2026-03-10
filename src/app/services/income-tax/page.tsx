import { Header } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-white text-[#0B2A5B] overflow-hidden">

      {/* HEADER */}

      <div className="mx-auto">
        <Header />
      </div>

      {/* HERO */}

      <section className="bg-[#0B2A5B] text-white py-24 relative overflow-hidden">

        <div className="absolute right-[-120px] top-[-120px] w-[400px] h-[400px] bg-[#FFC107] opacity-20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Income
              <span className="text-[#FFC107]"> Tax Services</span>
            </h1>

            <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-xl">
              Income Tax is levied by the Central Government for individuals,
              MSMEs, and corporates. With constantly changing policies,
              exemptions, and tax brackets, managing tax compliance can be
              complex. Our experts ensure accurate filing, tax savings, and
              full compliance with Indian tax regulations.
            </p>

            <Link href="/contact-us">
              <button className="mt-8 bg-[#FFC107] text-[#0B2A5B] font-semibold px-8 py-4 rounded-lg hover:scale-105 transition shadow-lg">
                Book a Call
              </button>
            </Link>

          </div>

          <div>

            <Image
              src="/images/income-tax.jpg"
              alt="Income Tax Filing"
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
            Income Tax <span className="text-[#FFC107]">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            <ServiceCard
              title="Income Tax Return Filing"
              text="Individuals and companies exceeding the exemption limit must file annual returns. We simplify ITR filing and ensure accurate compliance."
            />

            <ServiceCard
              title="Tax Planning & Reporting"
              text="Strategic tax planning helps businesses legally reduce tax liabilities by leveraging exemptions and deductions."
            />

            <ServiceCard
              title="Capital Gain Advisory"
              text="We provide expert advice on taxation related to profits from property sales, investments, and shares."
            />

            <ServiceCard
              title="Income Tax Audit"
              text="When businesses cross turnover limits, tax audits ensure accurate reporting of financial transactions."
            />

            <ServiceCard
              title="Transfer Pricing"
              text="We help businesses maintain fair pricing for transactions between related entities and subsidiaries."
            />

            <ServiceCard
              title="Tax Assessments & Appeals"
              text="Our experts represent your case with tax authorities in case of discrepancies or disputes."
            />

            <ServiceCard
              title="12A & 80G Registration"
              text="Trusts can obtain tax exemption benefits and enable donors to claim deductions through these registrations."
            />

            <ServiceCard
              title="Foreign Remittance Compliance"
              text="We ensure legal compliance for foreign transactions and help businesses navigate complex forex regulations."
            />

            <ServiceCard
              title="Corporate & International Taxation"
              text="We guide organizations dealing with cross-border taxation and international business transactions."
            />

            <ServiceCard
              title="TDS & TCS Compliance"
              text="We manage tax deduction and collection compliance to prevent penalties and notices from tax authorities."
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
            responsive and well-informed approach made complex financial
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