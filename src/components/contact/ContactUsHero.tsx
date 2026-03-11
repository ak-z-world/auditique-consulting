"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Header } from "../layout";
import Image from "next/image";
import gsap from "gsap";

const ContactUsHero = () => {
  const titleRef = useRef(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const buttonRef = useRef(null);
  const heroImgRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const badgeRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(badgeRef.current, {
        autoAlpha: 0,
        y: -20,
        duration: 0.7,
        ease: "power2.out",
      });

      tl.from(
        titleRef.current,
        {
          autoAlpha: 0,
          y: 60,
          skewY: 6,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.3",
      );

      tl.from(
        textRefs.current,
        {
          autoAlpha: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6",
      );

      tl.from(
        buttonRef.current,
        {
          x: -40,
          autoAlpha: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.5",
      );

      tl.from(
        heroImgRef.current,
        {
          scale: 0.85,
          autoAlpha: 0,
          duration: 1.1,
          ease: "back.out(1.4)",
        },
        "-=1",
      );

      tl.from(
        [icon1Ref.current, icon2Ref.current],
        {
          autoAlpha: 0,
          scale: 0.5,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(2)",
        },
        "-=0.8",
      );

      // Floating icons
      gsap.to(icon1Ref.current, {
        y: -18,
        scale: 1.08,
        repeat: -1,
        yoyo: true,
        duration: 1.4,
        ease: "sine.inOut",
      });

      gsap.to(icon2Ref.current, {
        y: 18,
        scale: 1.06,
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "sine.inOut",
        delay: 0.3,
      });

      // Slow blob drift
      gsap.to(blob1Ref.current, {
        x: 30,
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 6,
        ease: "sine.inOut",
      });

      gsap.to(blob2Ref.current, {
        x: -20,
        y: 25,
        repeat: -1,
        yoyo: true,
        duration: 7,
        ease: "sine.inOut",
        delay: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="rounded-b-[40px] bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="pt-2 rounded-b-[40px] relative">

        {/* Background accent blobs */}
        <div
          ref={blob1Ref}
          className="absolute top-10 right-10 w-80 h-80 bg-yellow-400 opacity-10 rounded-full blur-3xl pointer-events-none"
        />
        <div
          ref={blob2Ref}
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl pointer-events-none"
        />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #1d4ed8 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="mx-auto relative z-50">
          <Header />
        </div>

        <div className="flex flex-col-reverse mt-28 sm:mt-20 md:mt-0 md:flex-row gap-3 md:gap-10 px-5 md:px-14 lg:px-32 xl:px-40 justify-between pt-7 md:pt-12 lg:pt-16 h-full items-center pb-10 md:pb-20">

          {/* Left Section */}
          <div className="flex flex-col gap-6 w-full lg:w-2/3 text-center lg:text-left">

            {/* Badge */}
            <div
              ref={badgeRef}
              className="flex justify-center lg:justify-start will-change-transform"
            >
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse inline-block" />
                Support Available Now
              </span>
            </div>

            {/* Title */}
            <p
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight will-change-transform"
            >
              Get Your Queries{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">Answered Instantly</span>
                {/* Yellow underline accent */}
                <span
                  className="absolute left-0 -bottom-1 h-[5px] w-full rounded-full bg-yellow-400 z-0"
                  style={{ transform: "skewX(-6deg)" }}
                />
              </span>{" "}
              on{" "}
              <span className="text-green-600">WhatsApp</span>
            </p>

            {/* Subtext */}
            <p
              ref={(el) => { textRefs.current[0] = el; }}
              className="text-base md:text-lg text-gray-600 leading-relaxed will-change-transform"
            >
              Whether you need help with services, pricing, or general inquiries,
              our team is just a message away.
            </p>

            <p
              ref={(el) => { textRefs.current[1] = el; }}
              className="text-base md:text-lg text-blue-800 font-semibold will-change-transform"
            >
              Connect With Our Support Team!
            </p>

            {/* Trust pills */}
            <div
              ref={(el) => { textRefs.current[2] = el; }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start will-change-transform"
            >
              {["⚡ Reply in minutes", "🔒 Secure & Private", "🌍 Available 24/7"].map((item) => (
                <span
                  key={item}
                  className="text-sm text-blue-700 bg-white border border-blue-100 shadow-sm rounded-full px-4 py-1.5 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <a href="https://wa.me/918870595347" target="_blank" rel="noreferrer">
              <div className="flex justify-center lg:justify-start">
                <button
                  ref={buttonRef}
                  className="group relative flex items-center gap-3 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-semibold text-base shadow-lg hover:shadow-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform overflow-hidden"
                >
                  {/* Yellow shimmer on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

                  {/* WhatsApp icon inline */}
                  <svg className="w-5 h-5 text-green-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </a>
          </div>

          {/* Right Image + Icons */}
          <div className="relative w-full h-[250px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] will-change-transform shrink-0">

            {/* Circular blue glow behind image */}
            <div className="absolute inset-6 rounded-full bg-blue-100 blur-2xl opacity-60" />

            {/* Yellow ring accent */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-yellow-300 opacity-40 animate-spin" style={{ animationDuration: "20s" }} />

            <div ref={heroImgRef} className="absolute inset-0 w-full h-full">
              <Image
                src="/images/contact-us-hero2.png"
                alt="contact-hero"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                className="object-contain sm:object-cover drop-shadow-xl"
                priority
              />
            </div>

            {/* Floating WhatsApp icon — left */}
            <div
              ref={icon1Ref}
              className="absolute top-1/3 -left-4 will-change-transform drop-shadow-lg"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-2">
                <Image
                  alt="whatsapp-icon"
                  src="/icons/whatsapp-icon.svg"
                  width={56}
                  height={56}
                />
              </div>
            </div>

            {/* Floating WhatsApp icon — right */}
            <div
              ref={icon2Ref}
              className="absolute -right-4 top-1/2 will-change-transform drop-shadow-lg"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-2">
                <Image
                  alt="whatsapp-icon"
                  src="/icons/whatsapp-icon.svg"
                  width={44}
                  height={44}
                />
              </div>
            </div>

            {/* Floating stat bubble */}
            <div className="absolute bottom-8 -left-6 bg-white border border-yellow-200 shadow-md rounded-2xl px-4 py-2 flex items-center gap-2">
              <span className="text-yellow-500 text-lg font-bold">⚡</span>
              <div>
                <p className="text-blue-900 text-xs font-bold leading-none">Avg. response</p>
                <p className="text-blue-600 text-sm font-semibold">Under 5 mins</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUsHero;