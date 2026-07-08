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
    <section className="relative w-full bg-[#F8FAFC] pt-24 pb-16 overflow-hidden font-sans">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#EBF4FA] rounded-l-[150px] -z-0 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Split Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-xl">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6 text-sm font-medium text-gray-700">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Trusted Chartered Accountants <span className="text-gray-300 mx-1">•</span> Global Advisory</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.1] mb-6 tracking-tight">
              Financial Excellence.<br />
              Trusted <span className="text-[#F5A524]">Advisory.</span>
            </h1>

            {/* Sub-headline Tags */}
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#1E293B] mb-6">
              <span>Chartered Accountancy</span>
              <span className="text-amber-500 text-xl leading-none px-1">•</span>
              <span>Tax</span>
              <span className="text-amber-500 text-xl leading-none px-1">•</span>
              <span>Compliance</span>
              <span className="text-amber-500 text-xl leading-none px-1">•</span>
              <span>Business Advisory</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Auditique Consulting helps businesses reduce taxes, stay compliant and make confident financial decisions through expert advisory and client-first solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="inline-flex justify-center items-center gap-2 bg-[#F5A524] hover:bg-[#E0931B] text-slate-900 font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all">
                <User className="w-5 h-5" />
                Get Free Consultation
              </button>
              <button className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-slate-900 font-semibold px-6 py-3.5 rounded-xl border border-gray-200 shadow-sm transition-all">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 lg:gap-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=1" alt="Client" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Client" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=33" alt="Client" />
                  </div>
                </div>
                <div>
                  <div className="flex text-amber-400 mb-0.5 text-sm">★★★★★</div>
                  <div className="text-xs font-semibold text-slate-900">5.0 Client Satisfaction</div>
                  <div className="text-[10px] text-gray-500">Based on 500+ reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-blue-600 stroke-1" />
                <div>
                  <div className="text-sm font-bold text-slate-900">100%</div>
                  <div className="text-xs text-gray-500">Compliance Focus</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Headphones className="w-8 h-8 text-slate-700 stroke-1" />
                <div>
                  <div className="text-sm font-bold text-slate-900">24/7</div>
                  <div className="text-xs text-gray-500">Advisory Support</div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column: Image & Floating Cards */}
          <div className="relative mt-12 lg:mt-0">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[4/3] w-full max-w-[600px] mx-auto">
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
            <div className="absolute top-4 -left-6 lg:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex gap-4 items-start border border-gray-100 animate-fade-in-up">
              <div className="bg-blue-50 p-2 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">GST Filing</div>
                <div className="text-xs text-emerald-600 font-medium mb-1">Completed</div>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </div>

            {/* Floating Card 2: Tax Saved */}
            <div className="absolute bottom-1/3 -left-8 lg:-left-16 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex gap-4 items-center border border-gray-100">
              <div className="bg-amber-50 p-2 rounded-lg">
                <TrendingUp className="w-8 h-8 text-amber-500" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Tax Saved</div>
                <div className="text-xl font-bold text-slate-900">₹12.5M+</div>
                <div className="text-xs text-gray-400">For Our Clients</div>
              </div>
            </div>

            {/* Floating Card 3: Clients Served */}
            <div className="absolute top-1/2 -right-4 lg:-right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex gap-4 items-center border border-gray-100">
              <div className="bg-blue-50 p-2 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Clients Served</div>
                <div className="text-xl font-bold text-slate-900">500+</div>
                <div className="text-xs text-gray-400">Across Globe</div>
              </div>
            </div>

            {/* Floating Card 4: Audit Ready */}
            <div className="absolute -bottom-6 right-4 lg:right-10 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl flex gap-3 items-center border border-gray-100">
              <div className="bg-blue-50 p-2 rounded-full">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Audit Ready</div>
                <div className="text-xs text-gray-500">Always</div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Banner Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-gray-100">
            
            <div className="flex items-center gap-4 pl-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">15+</div>
                <div className="text-sm text-gray-600 font-medium">Countries Serving</div>
                <div className="text-xs text-gray-400 mt-1">Global Client Base</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-8">
              <div className="bg-amber-50 p-3 rounded-full">
                <Headphones className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Business Support</div>
                <div className="text-xs text-gray-400 mt-1">Always Available</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-8">
              <div className="bg-blue-50 p-3 rounded-full">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">100%</div>
                <div className="text-sm text-gray-600 font-medium">Compliance Focus</div>
                <div className="text-xs text-gray-400 mt-1">Secure & Reliable</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-8">
              <div className="bg-amber-50 p-3 rounded-full">
                <Users className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">Client First</div>
                <div className="text-sm text-gray-600 font-medium">Strategic Advisory</div>
                <div className="text-xs text-gray-400 mt-1">Your Growth, Our Priority</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeHero;