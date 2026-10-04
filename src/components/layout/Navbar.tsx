"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { totalCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/98 backdrop-blur-md shadow-md' : 'bg-white'} border-b border-gray-100`}>
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-honey via-coral to-honey transition-all duration-100 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main row */}
      <div className="container mx-auto px-4 flex items-center justify-between gap-3 h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 bg-honey rounded-full flex items-center justify-center shadow-sm">
            <span className="text-xl">🐝</span>
          </div>
          <span className="hidden sm:block font-heading font-extrabold text-2xl text-ink">Bee Binders</span>
        </Link>

        {/* Search */}
        <div className="flex-grow max-w-md relative">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-200 font-sans font-bold text-sm text-ink focus:outline-none focus:ring-2 focus:ring-honey/50 bg-gray-50 focus:bg-white transition-colors"
          />
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} strokeWidth={2} />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 flex-shrink-0">

          {/* Cart — always visible */}
          <Link href="/cart" className="relative flex items-center gap-1.5 bg-coral text-white px-3 py-2 rounded-xl font-heading font-bold text-sm shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
            <ShoppingBag size={18} strokeWidth={2.5} />
            <span className="hidden sm:inline">Cart</span>

            {/* Badge */}
            <AnimatePresence>
              {totalCount > 0 && (
                <motion.span
                  key={totalCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-ink text-white rounded-full text-[11px] font-black flex items-center justify-center leading-none"
                >
                  {totalCount > 99 ? "99+" : totalCount}
                </motion.span>
              )}
            </AnimatePresence>
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
            <Link href="#shop-all" className="hover:text-coral transition-colors">Shop All</Link>
          </nav>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 shadow-lg overflow-hidden"
          >
            <Link href="/" onClick={() => setMenuOpen(false)} className="font-heading font-bold text-xl text-ink hover:text-coral py-2 border-b border-gray-100">
              🏠 Home
            </Link>
            <Link href="#shop-all" onClick={() => setMenuOpen(false)} className="font-heading font-bold text-xl text-ink hover:text-coral py-2 border-b border-gray-100">
              🛍️ Shop All
            </Link>
            <Link href="/cart" onClick={() => setMenuOpen(false)} className="font-heading font-bold text-xl text-ink hover:text-coral py-2 flex items-center gap-2">
              🛒 My Cart {totalCount > 0 && <span className="bg-coral text-white text-sm px-2 py-0.5 rounded-full">{totalCount}</span>}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
