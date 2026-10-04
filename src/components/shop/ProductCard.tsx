import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";

interface ProductCardProps {
  slug: string;
  name: string;
  price: number;
  image?: string;
  ageRange?: string;
  condition?: string;
  isSold?: boolean;
}

export function ProductCard({ slug, name, price, image, ageRange, condition = "New", isSold = false }: ProductCardProps) {
  const { addItem, items } = useCart();
  const cartItem = items.find(i => i.slug === slug);
  const inCart = !!cartItem;

  const getBgColor = (n: string) => {
    const hash = n.length % 4;
    return ["bg-sky", "bg-mint", "bg-lilac", "bg-honey"][hash];
  };

  return (
    <div className="storybook-card flex flex-col group relative bg-white h-full">

      {/* Badges */}
      {isSold && (
        <div className="absolute top-2 left-2 z-10 bg-coral text-white font-heading font-bold px-2 py-0.5 rounded-full shadow-sm text-[10px] md:text-xs">
          Sold Out
        </div>
      )}
      {!isSold && condition !== "New" && (
        <div className="absolute top-2 left-2 z-10 bg-mint text-ink font-heading font-bold px-2 py-0.5 rounded-full shadow-sm text-[10px] md:text-xs">
          {condition}
        </div>
      )}

      {/* Cart quantity badge */}
      <AnimatePresence>
        {inCart && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute top-2 right-2 z-10 w-6 h-6 bg-coral text-white rounded-full flex items-center justify-center text-xs font-black shadow-md"
          >
            {cartItem!.quantity}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image area */}
      <Link
        href={`/product/${slug}`}
        className={`block relative aspect-square ${image ? "bg-white" : getBgColor(name)} overflow-hidden border-b border-gray-100 flex-shrink-0`}
      >
        <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-7xl">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <span className="group-hover:scale-110 transition-transform drop-shadow-lg">🐝</span>
          )}
        </div>
      </Link>

      {/* Card body */}
      <div className="p-3 md:p-4 flex flex-col flex-grow bg-white">
        {ageRange && (
          <span className="inline-block bg-gray-50 border border-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 font-sans w-max">
            Ages {ageRange}
          </span>
        )}
        <Link href={`/product/${slug}`}>
          <h3 className="font-heading font-extrabold text-sm md:text-lg text-ink leading-tight mb-2 group-hover:text-coral transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <div className="mt-auto pt-2 flex items-center justify-between gap-2">
          <span className="font-heading font-black text-base md:text-xl text-coral">
            Rs {price.toLocaleString()}
          </span>
          <motion.button
            disabled={isSold}
            onClick={() => !isSold && addItem({ slug, name, price })}
            whileTap={{ scale: 0.9 }}
            className={`flex items-center gap-1 font-heading font-bold text-xs md:text-sm py-1.5 px-3 rounded-xl transition-all
              ${isSold
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : inCart
                ? "bg-green-500 text-white shadow-sm"
                : "bg-honey text-ink shadow-sm hover:shadow-md hover:-translate-y-0.5"
              }`}
          >
            {isSold ? "Sold Out" : inCart ? <><Check size={14} /> Added</> : <><ShoppingBag size={14} /> Add</>}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
