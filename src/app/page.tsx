"use client";
import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/shop/ProductCard";

const allProducts = [
  { slug: "abc-writing-tracing-binder", name: "ABC Writing & Tracing Binder", price: 1200, ageRange: "3-5", category: "Learning Binders" },
  { slug: "write-and-wipe-bundle", name: "Write and Wipe Bundle", price: 1500, ageRange: "3-6", category: "Learning Binders" },
  { slug: "3-letter-cvc-cards", name: "3 Letter (CVC) Picture Word Cards", price: 850, ageRange: "4-6", category: "Flash Cards" },
  { slug: "phonics-binder", name: "Complete Phonics Binder", price: 2100, ageRange: "4-7", category: "Learning Binders" },
  { slug: "strip-cards-blends", name: "Strip Cards for Blends & Word Families", price: 950, ageRange: "5-8", category: "Flash Cards" },
  { slug: "what-he-needs-book", name: "What He Needs (Adaptive Book)", price: 1100, ageRange: "2-5", category: "Adaptive Books" },
  { slug: "prepositions-book", name: "Prepositions (Adaptive Book)", price: 1100, ageRange: "3-6", category: "Adaptive Books" },
  { slug: "urdu-jumle", name: "Urdu Sentence (Jumle) Builder", price: 1300, ageRange: "4-7", category: "Adaptive Books", condition: "Like New" },
];

const floatingEmojis = [
  { emoji: "📚", top: "12%", left: "5%", delay: 0 },
  { emoji: "✏️", top: "25%", left: "90%", delay: 0.5 },
  { emoji: "🌟", top: "60%", left: "8%", delay: 1 },
  { emoji: "🎨", top: "70%", left: "88%", delay: 1.5 },
  { emoji: "🐝", top: "40%", left: "93%", delay: 0.8 },
  { emoji: "🌈", top: "15%", left: "80%", delay: 1.2 },
  { emoji: "🦋", top: "80%", left: "3%", delay: 0.3 },
  { emoji: "⭐", top: "50%", left: "2%", delay: 0.7 },
];

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -5 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring" as const, stiffness: 300, damping: 20 } },
};

function SectionHeading({ bg, text, rotate = "-rotate-1" }: { bg: string; text: string; rotate?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-6 md:mb-10"
    >
      <span className={`inline-block ${bg} px-4 md:px-6 py-1.5 md:py-2 rounded-2xl border-4 border-ink shadow-[4px_4px_0_0_var(--color-ink)] ${rotate}`}>
        <h2 className="font-heading font-black text-2xl md:text-4xl text-ink">{text}</h2>
      </span>
    </motion.div>
  );
}

function AnimatedProductGrid({ products }: { products: typeof allProducts }) {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {products.map((product, i) => (
        <motion.div key={i} variants={fadeUp}>
          <ProductCard {...product} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col relative w-full overflow-hidden bg-[#FFFBF0]">

      {/* Floating background emojis — desktop only */}
      <div className="hidden lg:block">
        {floatingEmojis.map((item, i) => (
          <motion.div
            key={i}
            className="fixed text-4xl pointer-events-none z-0 select-none"
            style={{ top: item.top, left: item.left }}
            animate={{ y: [0, -18, 0], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 4 + i * 0.4, repeat: Infinity, delay: item.delay, ease: "easeInOut" as const }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* ─── HERO ─── */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative z-10">
        <motion.div
          className="relative max-w-4xl mx-auto flex flex-col items-center mt-12"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          {/* Pulsing honey blob behind card */}
          <motion.div
            className="absolute -inset-10 bg-honey/30 rounded-full blur-3xl -z-10"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            variants={popIn}
            className="glass-panel p-5 sm:p-8 md:p-14 border-[4px] border-ink shadow-[14px_14px_0_0_var(--color-ink)] relative bg-white w-full"
          >
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2 bg-coral text-white font-heading font-bold px-6 py-2 rounded-full border-[4px] border-ink shadow-[4px_4px_0_0_var(--color-ink)] z-20 whitespace-nowrap text-xl"
              animate={{ rotate: [2, -2, 2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🐝 Bee Binders by Heebal
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-heading font-black text-3xl sm:text-5xl md:text-7xl text-ink mb-4 md:mb-6 mt-6 leading-[1.1] tracking-tight">
              Learning that feels<br className="hidden md:block" /> like{" "}
              <motion.span
                className="text-coral inline-block"
                animate={{ rotate: [-3, 3, -3], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                play.
              </motion.span>
            </motion.h1>

            <motion.p variants={fadeUp} className="font-handwriting text-xl sm:text-3xl md:text-4xl text-ink/80 mb-6 md:mb-10 -rotate-2">
              Scroll down to explore all our books and binders! 👇
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#shop-all" variant="primary" className="text-base md:text-2xl px-5 md:px-10 py-3 md:py-5 bg-honey">
                Shop All Books 📚
              </Button>
              <Button href="#how-to-order" variant="outline" className="text-base md:text-2xl px-5 md:px-10 py-3 md:py-5 bg-white">
                How to Order 📦
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bouncing scroll indicator */}
        <motion.div
          className="mt-16 text-ink/50 font-heading font-bold text-lg flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>scroll to explore</span>
          <span className="text-3xl">↓</span>
        </motion.div>
      </section>

      {/* ─── HOW TO ORDER ─── */}
      <section id="how-to-order" className="px-4 py-16 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="bg-lilac rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-4 border-ink shadow-[8px_8px_0_0_var(--color-ink)]"
          >
            <motion.div
              className="w-24 h-24 bg-white border-4 border-ink rounded-full flex items-center justify-center text-5xl shadow-[4px_4px_0_0_var(--color-ink)] flex-shrink-0"
              animate={{ rotate: [6, -6, 6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              📦
            </motion.div>
            <div>
              <h2 className="font-heading font-extrabold text-4xl text-ink mb-4">How to Order</h2>
              {[
                ["1", "Find your favorite books below and click Add to Cart."],
                ["2", "Checkout securely (COD & Bank Transfer available!)."],
                ["3", "We pack it with love and deliver it to your door!"],
              ].map(([num, text], i) => (
                <motion.p
                  key={i}
                  className="font-sans font-bold text-ink text-xl mb-3 flex items-start gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  <span className="bg-white px-3 py-1 rounded-lg border-4 border-ink shadow-[2px_2px_0_0_var(--color-ink)] flex-shrink-0">{num}</span>
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SHOP: LEARNING BINDERS ─── */}
      <section id="shop-all" className="px-4 py-16 relative z-10 bg-sky/20 border-y-4 border-ink">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading bg="bg-honey" text="Learning Binders ✍️" rotate="-rotate-1" />
          <AnimatedProductGrid products={allProducts.filter(p => p.category === "Learning Binders")} />
        </div>
      </section>

      {/* ─── SHOP: FLASH CARDS ─── */}
      <section className="px-4 py-16 relative z-10 bg-mint/20 border-b-4 border-ink">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading bg="bg-mint" text="Phonics & Flash Cards 🔤" rotate="rotate-1" />
          <AnimatedProductGrid products={allProducts.filter(p => p.category === "Flash Cards")} />
        </div>
      </section>

      {/* ─── SHOP: ADAPTIVE BOOKS ─── */}
      <section className="px-4 py-16 relative z-10 bg-lilac/20 border-b-4 border-ink">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading bg="bg-coral" text="Adaptive Sentence Builders 🧠" rotate="-rotate-1" />
          <AnimatedProductGrid products={allProducts.filter(p => p.category === "Adaptive Books")} />
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-12 md:py-24 bg-honey relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.03, rotate: 1 }}
          className="glass-panel p-6 md:p-16 border-[4px] border-ink shadow-[8px_8px_0_0_var(--color-ink)] md:shadow-[16px_16px_0_0_var(--color-ink)] bg-white max-w-4xl mx-auto w-full"
        >
          <motion.h2
            className="font-heading font-black text-3xl md:text-7xl text-ink mb-4 md:mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            Ready to checkout? 🛒
          </motion.h2>
          <p className="font-handwriting text-xl md:text-3xl text-ink/70 mb-6 md:mb-8">Your little learner is waiting!</p>
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Button href="/cart" variant="primary" className="text-lg md:text-2xl px-8 md:px-12 py-4 md:py-6 bg-coral text-white border-[4px] border-ink shadow-[4px_4px_0_0_var(--color-ink)]">
              View My Cart 🛒
            </Button>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
