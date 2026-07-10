import React from 'react';
import Image from 'next/image';
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Globe, 
  Headphones, 
  Shield, 
  User, 
  ArrowRight,
  Award,
  FileText
} from 'lucide-react';

const HomeHero = () => {
  return (
    <section className="relative w-full bg-[#F8FAFC] pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden font-sans">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#EBF4FA] rounded-l-[150px] -z-0 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Split Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6 text-xs sm:text-sm font-medium text-gray-700 w-fit">
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="truncate">Trusted Chartered Accountants <span className="text-gray-300 mx-1">•</span> Global</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.1] mb-4 sm:mb-6 tracking-tight">
              Financial Excellence.<br />
              Trusted <span className="text-[#F5A524]">Advisory.</span>
            </h1>

            {/* Sub-headline Tags */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-[#1E293B] mb-4 sm:mb-6">
              <span>Chartered Accountancy</span>
              <span className="text-amber-500 text-lg sm:text-xl leading-none px-0.5 sm:px-1">•</span>
              <span>Tax</span>
              <span className="text-amber-500 text-lg sm:text-xl leading-none px-0.5 sm:px-1">•</span>
              <span>Compliance</span>
              <span className="text-amber-500 text-lg sm:text-xl leading-none px-0.5 sm:px-1 hidden sm:inline">•</span>
              <span className="w-full sm:w-auto">Business Advisory</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
              Auditique Consulting helps businesses reduce taxes, stay compliant and make confident financial decisions through expert advisory and client-first solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
              <button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#F5A524] hover:bg-[#E0931B] text-slate-900 font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all">
                <User className="w-5 h-5" />
                Get Free Consultation
              </button>
              <button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-slate-900 font-semibold px-6 py-3.5 rounded-xl border border-gray-200 shadow-sm transition-all">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=1" alt="Client" />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Client" />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=33" alt="Client" />
                  </div>
                </div>
                <div>
                  <div className="flex text-amber-400 mb-0.5 text-xs sm:text-sm">★★★★★</div>
                  <div className="text-xs font-semibold text-slate-900">5.0 Satisfaction</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 stroke-1" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">100%</div>
                  <div className="text-[10px] sm:text-xs text-gray-500">Compliance</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700 stroke-1" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">24/7</div>
                  <div className="text-[10px] sm:text-xs text-gray-500">Support</div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column: Image & Floating Cards */}
          <div className="relative mt-8 sm:mt-12 lg:mt-0 w-full max-w-[500px] lg:max-w-[600px] mx-auto px-4 sm:px-8 lg:px-0">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full">
              <Image 
                src="/images/hero.svg" 
                alt="Auditique Consulting Professionals in a meeting" 
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                priority
              />
            </div>

            {/* Floating Card 1: GST Filing */}
            <div className="absolute top-2 -left-2 sm:top-4 sm:-left-6 lg:-left-12 bg-white/90 backdrop-blur-md p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex gap-2 sm:gap-4 items-start border border-gray-100 animate-fade-in-up scale-[0.8] sm:scale-100 origin-top-left z-10">
              <div className="bg-blue-50 p-1.5 sm:p-2 rounded-lg shrink-0">
                <FileText className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">GST Filing</div>
                <div className="text-[10px] sm:text-xs text-emerald-600 font-medium mb-0.5 sm:mb-1">Completed</div>
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
              </div>
            </div>

            {/* Floating Card 2: Tax Saved */}
            <div className="absolute bottom-4 -left-2 sm:bottom-1/3 sm:-left-8 lg:-left-16 bg-white/90 backdrop-blur-md p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex gap-2 sm:gap-4 items-center border border-gray-100 scale-[0.8] sm:scale-100 origin-bottom-left z-10">
              <div className="bg-amber-50 p-1.5 sm:p-2 rounded-lg shrink-0">
                <TrendingUp className="w-5 h-5 sm:w-8 sm:h-8 text-amber-500" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-medium">Tax Saved</div>
                <div className="text-base sm:text-xl font-bold text-slate-900">₹12.5M+</div>
                <div className="text-[10px] sm:text-xs text-gray-400">For Our Clients</div>
              </div>
            </div>

            {/* Floating Card 3: Clients Served */}
            <div className="absolute top-1/3 -right-2 sm:top-1/2 sm:-right-4 lg:-right-8 bg-white/90 backdrop-blur-md p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex gap-2 sm:gap-4 items-center border border-gray-100 scale-[0.8] sm:scale-100 origin-right z-10">
              <div className="bg-blue-50 p-1.5 sm:p-2 rounded-lg shrink-0">
                <Users className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-medium">Clients Served</div>
                <div className="text-base sm:text-xl font-bold text-slate-900">500+</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Across Globe</div>
              </div>
            </div>

            {/* Floating Card 4: Audit Ready */}
            <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:right-4 lg:right-10 bg-white/90 backdrop-blur-md px-3 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl flex gap-2 sm:gap-3 items-center border border-gray-100 scale-[0.8] sm:scale-100 origin-bottom-right z-10">
              <div className="bg-blue-50 p-1.5 sm:p-2 rounded-full shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">Audit Ready</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Always</div>
              </div>
            </div>

          </div>
        </div> {/* <-- ADDED MISSING CLOSING DIV FOR GRID HERE */}

        {/* Bottom Banner Section */}
        <div className="mt-16 sm:mt-20 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 sm:p-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-8 sm:gap-x-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-2 lg:pl-4 first:pt-0">
              <div className="bg-blue-50 p-3 rounded-full shrink-0">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900">15+</div>
                <div className="text-sm text-gray-600 font-medium">Countries Serving</div>
                <div className="text-xs text-gray-400 mt-0.5 sm:mt-1">Global Client Base</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4 lg:pl-8">
              <div className="bg-amber-50 p-3 rounded-full shrink-0">
                <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Business Support</div>
                <div className="text-xs text-gray-400 mt-0.5 sm:mt-1">Always Available</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4 lg:pl-8">
              <div className="bg-blue-50 p-3 rounded-full shrink-0">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900">100%</div>
                <div className="text-sm text-gray-600 font-medium">Compliance Focus</div>
                <div className="text-xs text-gray-400 mt-0.5 sm:mt-1">Secure & Reliable</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4 lg:pl-8">
              <div className="bg-amber-50 p-3 rounded-full shrink-0">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900">Client First</div>
                <div className="text-sm text-gray-600 font-medium">Strategic Advisory</div>
                <div className="text-xs text-gray-400 mt-0.5 sm:mt-1">Your Growth, Our Priority</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeHero;