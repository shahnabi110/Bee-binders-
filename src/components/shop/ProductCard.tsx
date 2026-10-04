import React from "react";
import Link from "next/link";

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
  const getBgColor = (n: string) => {
    const hash = n.length % 4;
    return ["bg-sky", "bg-mint", "bg-lilac", "bg-honey"][hash];
  };

  return (
    <div className="storybook-card flex flex-col group relative bg-white h-full">
      {/* Badge */}
      {isSold && (
        <div className="absolute top-2 right-2 z-10 bg-coral text-white font-heading font-bold px-2 py-0.5 rounded-full border-2 border-ink shadow-[2px_2px_0_0_var(--color-ink)] text-[10px] md:text-xs rotate-3">
          SOLD OUT
        </div>
      )}
      {!isSold && condition !== "New" && (
        <div className="absolute top-2 right-2 z-10 bg-mint text-ink font-heading font-bold px-2 py-0.5 rounded-full border-2 border-ink shadow-[2px_2px_0_0_var(--color-ink)] text-[10px] md:text-xs -rotate-2">
          {condition}
        </div>
      )}

      {/* Image / Emoji area — smaller on mobile */}
      <Link
        href={`/product/${slug}`}
        className={`block relative aspect-[4/3] md:aspect-square ${image ? "bg-white" : getBgColor(name)} overflow-hidden border-b-4 border-ink flex-shrink-0`}
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
      <div className="p-3 md:p-6 flex flex-col flex-grow bg-cream/50">
        {ageRange && (
          <span className="inline-block bg-white border-2 border-ink shadow-[1px_1px_0_0_var(--color-ink)] px-2 py-0.5 rounded-full text-[10px] md:text-xs font-bold text-ink uppercase tracking-wider mb-2 font-sans w-max rotate-1">
            Ages {ageRange}
          </span>
        )}
        <Link href={`/product/${slug}`}>
          <h3 className="font-heading font-extrabold text-sm md:text-2xl text-ink leading-tight mb-1 md:mb-2 group-hover:text-coral transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <div className="mt-auto pt-2 md:pt-4 flex flex-col gap-2 md:gap-4">
          <span className="font-heading font-black text-lg md:text-3xl text-honey drop-shadow-[1px_1px_0_rgba(43,42,51,1)]">
            Rs {price}
          </span>
          <button
            disabled={isSold}
            className={`w-full font-heading font-bold text-sm md:text-xl py-1.5 md:py-3 rounded-xl md:rounded-2xl border-2 md:border-4 border-ink shadow-[2px_2px_0_0_var(--color-ink)] md:shadow-[4px_4px_0_0_var(--color-ink)] transition-all active:translate-y-0.5 active:shadow-none
              ${isSold
                ? "bg-gray-200 text-gray-400 cursor-not-allowed border-gray-400"
                : "bg-honey text-ink hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--color-ink)]"
              }`}
          >
            {isSold ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
