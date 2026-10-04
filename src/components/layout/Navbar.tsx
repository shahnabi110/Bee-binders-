"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/98 backdrop-blur-md shadow-[0_4px_0_0_var(--color-ink)]' : 'bg-cream'} border-b-4 border-ink`}>
      
      {/* Main row */}
      <div className="container mx-auto px-4 flex items-center justify-between gap-3 h-16">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 bg-honey border-4 border-ink rounded-full flex items-center justify-center shadow-[2px_2px_0_0_var(--color-ink)]">
            <span className="text-xl">🐝</span>
          </div>
          <span className="hidden sm:block font-heading font-extrabold text-2xl text-ink">Bee Binders</span>
        </Link>

        {/* Search — visible on all screens */}
        <div className="flex-grow max-w-md relative">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border-3 border-ink font-sans font-bold text-sm text-ink focus:outline-none focus:ring-4 focus:ring-honey/50 shadow-[3px_3px_0_0_var(--color-ink)] bg-white"
          />
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-ink" size={16} strokeWidth={3} />
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Cart */}
          <Link
            href="/cart"
            className="flex items-center gap-1.5 bg-coral text-white px-3 py-2 rounded-xl font-heading font-bold text-sm border-3 border-ink shadow-[3px_3px_0_0_var(--color-ink)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--color-ink)] transition-all"
          >
            <ShoppingBag size={18} strokeWidth={3} />
            <span className="hidden xs:inline">Cart (0)</span>
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 bg-white border-3 border-ink rounded-xl flex items-center justify-center shadow-[3px_3px_0_0_var(--color-ink)]"
          >
            {menuOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
          </button>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-5 font-heading font-bold text-xl text-ink">
            <Link href="/" className="hover:text-coral transition-colors">Home</Link>
            <Link href="#shop-all" className="hover:text-sky transition-colors">Shop All</Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-cream border-t-4 border-ink px-4 py-4 flex flex-col gap-3">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-heading font-bold text-2xl text-ink hover:text-coral py-2 border-b-2 border-ink/20"
          >
            🏠 Home
          </Link>
          <Link
            href="#shop-all"
            onClick={() => setMenuOpen(false)}
            className="font-heading font-bold text-2xl text-ink hover:text-coral py-2 border-b-2 border-ink/20"
          >
            🛍️ Shop All
          </Link>
          <Link
            href="/cart"
            onClick={() => setMenuOpen(false)}
            className="font-heading font-bold text-2xl text-ink hover:text-coral py-2"
          >
            🛒 My Cart (0)
          </Link>
        </div>
      )}
    </header>
  );
}
