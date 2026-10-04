"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 backdrop-blur-md py-3 border-b-4 border-ink shadow-[0_4px_0_0_var(--color-ink)]' : 'bg-cream py-4 border-b-4 border-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-honey border-4 border-ink rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[2px_2px_0_0_var(--color-ink)]">
            <span className="text-xl md:text-2xl">🐝</span>
          </div>
          <span className="hidden lg:block font-heading font-extrabold text-3xl text-ink tracking-wide drop-shadow-[1px_1px_0_rgba(43,42,51,0.2)]">Bee Binders</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-grow max-w-xl relative">
          <input 
            type="text" 
            placeholder="Search books, binders..." 
            className="w-full pl-12 pr-4 py-2.5 rounded-2xl border-4 border-ink font-sans font-bold text-ink focus:outline-none focus:ring-4 focus:ring-honey/50 shadow-[4px_4px_0_0_var(--color-ink)] transition-shadow"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink" size={20} strokeWidth={3} />
        </div>

        <nav className="hidden xl:flex items-center gap-6 font-heading font-bold text-xl text-ink flex-shrink-0">
          <Link href="/" className="hover:text-coral transition-colors hover:-translate-y-1 transform inline-block">Home</Link>
          <Link href="#shop-all" className="hover:text-sky transition-colors hover:-translate-y-1 transform inline-block">Shop All</Link>
        </nav>

        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="/cart" className="flex items-center gap-2 bg-coral hover:bg-[#FF7350] text-white px-4 md:px-5 py-2.5 rounded-2xl font-heading font-bold text-lg md:text-xl border-4 border-ink shadow-[4px_4px_0_0_var(--color-ink)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-ink)] active:translate-y-1 active:shadow-none transition-all">
            <ShoppingBag size={22} strokeWidth={3} />
            <span className="hidden sm:inline">Cart (0)</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
