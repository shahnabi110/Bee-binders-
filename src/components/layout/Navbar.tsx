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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/98 backdrop-blur-md shadow-md' : 'bg-white'} border-b border-gray-100`}>
      
      {/* Main row */}
      <div className="container mx-auto px-4 flex items-center justify-between gap-3 h-16">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 bg-honey rounded-full flex items-center justify-center shadow-sm">
            <span className="text-xl">🐝</span>
          </div>
          <span className="hidden sm:block font-heading font-extrabold text-2xl text-ink">Bee Binders</span>
        </Link>

        {/* Search — visible on all screens */}
        <div className="flex-grow max-w-md relative">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-200 font-sans font-bold text-sm text-ink focus:outline-none focus:ring-2 focus:ring-honey/50 bg-gray-50 focus:bg-white transition-colors"
          />
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} strokeWidth={2} />
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Cart */}
          <Link
            href="/cart"
            className="flex items-center gap-1.5 bg-coral text-white px-3 py-2 rounded-xl font-heading font-bold text-sm shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
          >
            <ShoppingBag size={18} strokeWidth={2.5} />
            <span className="hidden xs:inline">Cart (0)</span>
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center shadow-sm text-ink"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
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
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 shadow-lg absolute w-full">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-heading font-bold text-xl text-ink hover:text-coral py-2 border-b border-gray-100"
          >
            🏠 Home
          </Link>
          <Link
            href="#shop-all"
            onClick={() => setMenuOpen(false)}
            className="font-heading font-bold text-xl text-ink hover:text-coral py-2 border-b border-gray-100"
          >
            🛍️ Shop All
          </Link>
          <Link
            href="/cart"
            onClick={() => setMenuOpen(false)}
            className="font-heading font-bold text-xl text-ink hover:text-coral py-2"
          >
            🛒 My Cart (0)
          </Link>
        </div>
      )}
    </header>
  );
}
