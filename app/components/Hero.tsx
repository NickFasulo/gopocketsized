import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center sm:px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent text-[#455157] text-xs font-semibold mb-6 border border-[#267EC5]/40">
        <ShieldCheck className="w-4 h-4 text-[#267EC5]" /> Now Booking Q3/Q4 2026 Client Engagements
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight mb-6">
        A pocket sized team with <span className="text-[#267EC5]">personalized plans</span> that deliver impact driven outcomes for your business.
      </h1>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#contact" className="px-6 py-3 rounded-xl bg-[#267EC5] text-white font-bold hover:bg-[#1A5A90] transition-colors duration-200 ease-out shadow-sm shadow-[#267EC5]/10 flex items-center justify-center gap-2">
          Schedule a Consultation <ArrowUpRight className="w-4 h-4" />
        </a>

        <a href="#services" className="px-6 py-3 rounded-xl bg-transparent text-[#267EC5] border border-[#267EC5]/40 font-semibold hover:text-[#1A5A90] hover:border-[#1A5A90] hover:bg-[#267EC5]/10 transition-colors duration-200 ease-out">
          Explore Services
        </a>
      </div>
    </header>
  );
}