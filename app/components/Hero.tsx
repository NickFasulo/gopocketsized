import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center sm:px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent text-[#455157] text-xs font-semibold mb-6 border border-[#b0c7cc]/60">
        <ShieldCheck className="w-4 h-4 text-[#74838b]" /> Now Booking Q3/Q4 2026 Client Engagements
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold text-[#455157] tracking-tight leading-tight mb-6">
        A pocket sized team with <span className="text-[#74838b]">personalized plans</span> that deliver impact driven outcomes for your business.
      </h1>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#contact" className="px-6 py-3 rounded-xl bg-[#74838b] text-white font-bold hover:bg-[#455157] transition-colors duration-200 ease-out shadow-sm shadow-[#74838b]/10 flex items-center justify-center gap-2">
          Schedule a Consultation <ArrowUpRight className="w-4 h-4" />
        </a>
        
        <a href="#services" className="px-6 py-3 rounded-xl bg-transparent text-[#74838b] font-semibold hover:bg-[#d6dfe1]/30 transition-colors duration-200 ease-out border border-[#b0c7cc]/60">
          Explore Services
        </a>
      </div>
    </header>
  );
}