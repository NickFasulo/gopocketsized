import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <nav className="border-b border-[#b0c7cc]/60 bg-white sticky top-0 z-50 shadow-sm shadow-[#74838b]/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <Link href="/#hero" className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-[#455157] group">
          <Image
            src="/logo.svg"
            alt="PocketSized Logo"
            width={32}
            height={32}
            priority
            className="w-60 h-full object-contain transition-transform group-hover:scale-102"
          />
        </Link>
        
        <div className="flex items-center gap-6 text-sm font-semibold text-black">
          <a href="/#services" className="hover:text-[#455157] transition-colors duration-200 ease-out cursor-pointer block py-1">Solutions</a>
          <a href="/#solutions" className="hover:text-[#455157] transition-colors duration-200 ease-out cursor-pointer block py-1">Our Framework</a>
          <Link href="/about" className="hover:text-[#455157] transition-colors duration-200 ease-out cursor-pointer block py-1">About Us</Link>
          
          <a 
            href="/#contact" 
            className="ml-2 px-4 py-2 rounded-xl bg-[#74838b] text-white font-bold hover:bg-[#455157] active:bg-[#74838b] transition-colors duration-200 ease-out shadow-sm shadow-[#74838b]/10 tracking-wide text-center"
          >
            Work With Us
          </a>
        </div>

      </div>
    </nav>
  );
}