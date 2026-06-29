import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center sm:px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-6 border border-emerald-500/20">
        <ShieldCheck className="w-4 h-4" /> Now Booking Q3/Q4 2026 Client Engagements
      </div>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
        A pocket sized team with <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">personalized plans</span> that deliver impact driven outcomes for your business.
      </h1>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#contact" className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2">
          Schedule a Consultation <ArrowUpRight className="w-4 h-4" />
        </a>
        <a href="#services" className="px-6 py-3 rounded-xl bg-slate-800 text-slate-200 font-semibold hover:bg-slate-700 transition border border-slate-700">
          Explore Services
        </a>
      </div>
    </header>
  );
}