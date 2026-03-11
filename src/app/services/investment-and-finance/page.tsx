import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout";

export default function Page() {
  return (
    <main className="bg-white text-[#0B2A5B] overflow-hidden">

      {/* HEADER */}
      <div className="mx-auto">
        <Header />
      </div>

      {/* HERO SECTION */}

      <section className="bg-[#0B2A5B] text-white py-24 relative overflow-hidden">

        <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#FFC107] opacity-20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Investment &
              <span className="text-[#FFC107]"> Finance</span>
            </h1>

            <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-xl">
              Navigating the investment and financial landscape can be complex.
              Our experts help businesses and individuals with strategic
              investment advisory, financial planning, valuations, mergers and
              acquisitions, and financial projections to drive sustainable
              growth.
            </p>

            <Link href="/contact-us">
              <button className="mt-8 bg-[#FFC107] text-[#0B2A5B] font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition">
                Consult Now
              </button>
            </Link>

          </div>

          <div className="relative">

            <Image
              src="/images/pic-6.jpg"
              alt="Investment Consulting"
              width={600}
              height={420}
              className="rounded-xl shadow-2xl"
            />

          </div>

        </div>

      </section>


      {/* OFFERINGS SECTION */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Our <span className="text-[#FFC107]">Offerings</span>
          </h2>

          <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
            Our financial consulting services help organizations make informed
            decisions, manage investments effectively and maintain strong
            financial foundations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            {/* CARD */}

            <div className="border border-blue-100 p-8 rounded-xl hover:shadow-xl transition">

              <h3 className="text-xl font-semibold">
                Investment Advisory
              </h3>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                We provide strategic investment advisory for high-value
                individuals and corporate entities. Our advisors help manage
                assets and guide clients toward profitable and secure financial
                investments.
              </p>

            </div>


            <div className="border border-blue-100 p-8 rounded-xl hover:shadow-xl transition">

              <h3 className="text-xl font-semibold">
                Mergers & Acquisitions
              </h3>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                We assist organizations in the strategy, planning, and execution
                of mergers and acquisitions. Our experts ensure smooth
                transitions while protecting the interests of all stakeholders.
              </p>

            </div>


            <div className="border border-blue-100 p-8 rounded-xl hover:shadow-xl transition">

              <h3 className="text-xl font-semibold">
                Investment Valuation
              </h3>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Before investing, accurate valuation is critical. We evaluate
                corporate assets and businesses to provide clear insights into
                potential risks and opportunities.
              </p>

            </div>


            <div className="border border-blue-100 p-8 rounded-xl hover:shadow-xl transition">

              <h3 className="text-xl font-semibold">
                Financial Projections
              </h3>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Our financial projection services help organizations plan their
                growth strategies with confidence. Detailed reports allow
                leaders to make informed financial decisions.
              </p>

            </div>


            <div className="border border-blue-100 p-8 rounded-xl hover:shadow-xl transition">

              <h3 className="text-xl font-semibold">
                Payroll Advisory
              </h3>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                We help businesses automate payroll processes and implement
                efficient compensation strategies while maintaining compliance
                with regulations.
              </p>

            </div>


            <div className="border border-blue-100 p-8 rounded-xl hover:shadow-xl transition">

              <h3 className="text-xl font-semibold">
                FCRA Compliance
              </h3>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                NGOs and organizations receiving foreign contributions must
                comply with FCRA regulations. Our team ensures legal compliance
                and proper utilization of foreign funds.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* TESTIMONIAL SECTION */}

      <section className="bg-blue-50 py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Expertise that has helped many others
          </h2>

          <p className="mt-10 text-lg text-gray-700 leading-relaxed">
            “Mr. Hariharan Thangavel and the BBig Consultants team have been
            consistently thorough, experienced, and communicative. Their
            expertise helped us successfully conduct remote audits and address
            critical financial issues effectively.”
          </p>

          <p className="mt-6 font-semibold">
            Rasagna Rao Dharmana
          </p>

          <p className="text-gray-500 text-sm">
            MD – MYZ UNO & Reybier Alco Bev Pvt Ltd
          </p>

        </div>

      </section>


      {/* WHY CLIENTS TRUST US */}

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
              <div key={index} className="p-6 border border-blue-100 rounded-xl">
                <p className="font-semibold">{item}</p>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-[#0B2A5B] text-white py-20 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Let's Build Your Financial Strategy
        </h2>

        <p className="mt-4 text-blue-100">
          Partner with experts who understand finance, compliance, and growth.
        </p>

        <Link href="/contact-us">
          <button className="mt-8 bg-[#FFC107] text-[#0B2A5B] px-10 py-4 font-semibold rounded-lg hover:scale-105 transition">
            Book a Call
          </button>
        </Link>

      </section>

    </main>
  );
}