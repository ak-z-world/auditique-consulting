"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface HeaderProps {
  variant?: "light" | "dark";
}

const services = [
  { path: "income-tax", label: "Income Tax" },
  { path: "gst-and-customs", label: "GST & Customs" },
  { path: "company-registration", label: "Company Registration" },
  { path: "corporate-services", label: "Corporate Services" },
  { path: "audit-and-assurance", label: "Audit & Assurance" },
  { path: "investment-and-finance", label: "Investment & Finance" },
];

export const Header: React.FC<HeaderProps> = ({ variant = "light" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = variant === "dark";

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white shadow-md"
            : isDark
            ? "bg-[#0f3064]"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[70px] flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="relative w-[150px] h-[160px]">
            <Image
              src={
                scrolled || !isDark
                  ? "/icons/auditique-consulting.png"
                  : "/icons/auditique-white-logo.svg"
              }
              alt="Auditique Consulting"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className={`maximum:md-hidden md:flex items-center gap-10 font-medium
            ${
              scrolled || !isDark ? "text-[#0B2A5B]" : "text-white"
            }`}
          >
            <Link href="/" className="hover:text-[#FFC107] transition">
              Home
            </Link>

            <Link href="/about-us" className="hover:text-[#FFC107] transition">
              About
            </Link>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <button className="hover:text-[#FFC107] transition">
                Services
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[520px]
                transition-all duration-200
                ${
                  dropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-white border shadow-xl rounded-xl p-6 grid grid-cols-2 gap-3">
                  {services.map((item) => (
                    <Link
                      key={item.path}
                      href={`/services/${item.path}`}
                      className="px-4 py-2 rounded-lg text-[#0B2A5B]
                      hover:bg-blue-50 hover:text-[#FFC107] transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact-us" className="hover:text-[#FFC107] transition">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact-us">
              <button
                className={`px-6 py-2.5 rounded-lg font-semibold transition
                ${
                  scrolled || !isDark
                    ? "bg-[#FFC107] text-[#0B2A5B]"
                    : "bg-white text-[#0B2A5B]"
                }`}
              >
                Consult Now
              </button>
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU PANEL */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-24 px-6 flex flex-col gap-6 text-xl font-semibold">

          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about-us" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/contact-us" onClick={() => setMobileOpen(false)}>Contact</Link>

          <Link href="/contact-us" className="mt-6">
            <button className="bg-[#FFC107] text-[#0B2A5B] px-6 py-3 rounded-lg w-full">
              Consult Now
            </button>
          </Link>

        </div>
      )}
    </>
  );
};