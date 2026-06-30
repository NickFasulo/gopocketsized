import { Terminal } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
          <Terminal className="w-6 h-6 text-emerald-400" />
          <span>
            PocketSized<span className="text-emerald-400">.</span>
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="/#services" className="hover:text-emerald-400 transition">Services</a>
          <a href="/#solutions" className="hover:text-emerald-400 transition">Our Framework</a>
          <Link href="/about" className="hover:text-emerald-400 transition">About Us</Link>
          <a href="/#contact" className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition">
            Work With Us
          </a>
        </div>
      </div>
    </nav>
  );
}