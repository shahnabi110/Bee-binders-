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
        <div className="absolute top-2 right-2 z-10 bg-coral text-white font-heading font-bold px-2 py-0.5 rounded-full shadow-sm text-[10px] md:text-xs">
          SOLD OUT
        </div>
      )}
      {!isSold && condition !== "New" && (
        <div className="absolute top-2 right-2 z-10 bg-mint text-ink font-heading font-bold px-2 py-0.5 rounded-full shadow-sm text-[10px] md:text-xs">
          {condition}
        </div>
      )}

      {/* Image / Emoji area — smaller on mobile */}
      <Link
        href={`/product/${slug}`}
        className={`block relative aspect-[4/3] md:aspect-square ${image ? "bg-white" : getBgColor(name)} overflow-hidden border-b border-gray-100 flex-shrink-0`}
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
      <div className="p-3 md:p-6 flex flex-col flex-grow bg-white">
        {ageRange && (
          <span className="inline-block bg-gray-50 border border-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 font-sans w-max">
            Ages {ageRange}
          </span>
        )}
        <Link href={`/product/${slug}`}>
          <h3 className="font-heading font-extrabold text-sm md:text-2xl text-ink leading-tight mb-1 md:mb-2 group-hover:text-coral transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <div className="mt-auto pt-2 md:pt-4 flex flex-col gap-2 md:gap-4">
          <span className="font-heading font-black text-lg md:text-3xl text-honey">
            Rs {price}
          </span>
          <button
            disabled={isSold}
            className={`w-full font-heading font-bold text-sm md:text-xl py-1.5 md:py-3 rounded-xl md:rounded-2xl transition-all active:translate-y-0.5 active:shadow-sm
              ${isSold
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-honey text-ink shadow-sm hover:-translate-y-0.5 hover:shadow-md"
              }`}
          >
            {isSold ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
