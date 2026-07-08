"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="border-b border-[#b0c7cc]/60 bg-white sticky top-0 z-50 shadow-sm shadow-[#74838b]/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <Link href="/#hero" onClick={closeMenu} className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-[#455157] group">
          <Image
            src="/logo.svg"
            alt="PocketSized Logo"
            width={32}
            height={32}
            priority
            className="w-55 h-full object-contain transition-transform group-hover:scale-102"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-black">
          <a href="/#services" className="hover:text-[#455157] transition-colors duration-200 ease-out cursor-pointer block py-1">Solutions</a>
          <a href="/#solutions" className="hover:text-[#455157] transition-colors duration-200 ease-out cursor-pointer block py-1">Framework</a>
          <Link href="/about" className="hover:text-[#455157] transition-colors duration-200 ease-out cursor-pointer block py-1">About Us</Link>
          
          <a 
            href="/#contact" 
            className="ml-2 px-4 py-2 rounded-xl bg-[#74838b] text-white font-bold hover:bg-[#455157] active:bg-[#74838b] transition-colors duration-200 ease-out shadow-sm shadow-[#74838b]/10 tracking-wide text-center cursor-pointer"
          >
            Work With Us
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-xl text-[#455157] hover:bg-[#b0c7cc]/10 cursor-pointer focus:outline-none transition-colors duration-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t border-[#b0c7cc]/40 bg-white`} id="mobile-menu">
        <div className="px-4 pt-3 pb-5 space-y-3 text-base font-semibold text-black flex flex-col">
          <a 
            href="/#services" 
            onClick={closeMenu}
            className="hover:text-[#455157] hover:bg-[#b0c7cc]/10 px-3 py-2 rounded-xl transition-colors duration-200 ease-out cursor-pointer"
          >
            Solutions
          </a>
          <a 
            href="/#solutions" 
            onClick={closeMenu}
            className="hover:text-[#455157] hover:bg-[#b0c7cc]/10 px-3 py-2 rounded-xl transition-colors duration-200 ease-out cursor-pointer"
          >
            Framework
          </a>
          <Link 
            href="/about" 
            onClick={closeMenu}
            className="hover:text-[#455157] hover:bg-[#b0c7cc]/10 px-3 py-2 rounded-xl transition-colors duration-200 ease-out cursor-pointer"
          >
            About Us
          </Link>
          
          <div className="pt-2 px-3">
            <a 
              href="/#contact" 
              onClick={closeMenu}
              className="w-full block px-4 py-3 rounded-xl bg-[#74838b] text-white font-bold hover:bg-[#455157] active:bg-[#74838b] transition-colors duration-200 ease-out shadow-sm shadow-[#74838b]/10 tracking-wide text-center cursor-pointer"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}