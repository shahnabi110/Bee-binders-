import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const product = {
    name: "ABC Writing & Tracing Binder",
    price: 1200,
    ageRange: "3-5",
    condition: "New",
    description: "A complete, reusable wipe-clean binder designed to help little hands master their ABCs. The bright, colorful pages keep them engaged while they practice tracing upper and lowercase letters. Includes a free dry-erase marker so the fun can start immediately!",
    includes: [
      "1x A4 sized laminated binder",
      "26x Trace and wipe letter pages",
      "1x Black dry-erase marker",
      "Bonus sticker sheet"
    ],
    inStock: true,
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Link href="/shop" className="inline-flex items-center gap-2 font-heading font-bold text-ink/70 hover:text-coral transition-colors mb-8">
        <span>←</span> Back to Shop
      </Link>
      
      <div className="flex flex-col lg:flex-row gap-12 bg-cream rounded-[3rem] border-4 border-ink shadow-[12px_12px_0_0_var(--color-ink)] p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,var(--color-honey)_0%,transparent_70%)] opacity-50 rounded-bl-[100%]"></div>
        
        <div className="w-full lg:w-1/2 flex flex-col gap-4 relative z-10">
          <div className="aspect-square bg-sky/30 rounded-3xl border-2 border-ink flex items-center justify-center overflow-hidden">
             <span className="text-9xl animate-pulse">🐝</span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`aspect-square bg-sky/20 rounded-xl border-2 border-ink flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-transform ${i === 1 ? 'ring-2 ring-honey ring-offset-2 ring-offset-cream bg-sky/40' : ''}`}>
                <span className="text-2xl">📸</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col relative z-10 pt-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-mint text-ink font-heading font-bold px-3 py-1 rounded-full border-2 border-ink text-sm">
              Condition: {product.condition}
            </span>
            <span className="bg-lilac text-ink font-heading font-bold px-3 py-1 rounded-full border-2 border-ink text-sm">
              Ages: {product.ageRange}
            </span>
          </div>
          
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-ink mb-4 leading-tight">
            {product.name}
          </h1>
          
          <div className="font-heading font-extrabold text-3xl text-honey mb-8 drop-shadow-[1px_1px_0_rgba(43,42,51,1)]">
            Rs {product.price}
          </div>
          
          <div className="prose prose-lg prose-p:font-sans prose-p:font-semibold prose-p:text-ink/80 mb-8">
            <p>{product.description}</p>
            
            <h4 className="font-heading font-bold text-xl text-ink mt-6 mb-3">What's included:</h4>
            <ul className="list-disc pl-5 font-sans font-semibold text-ink/80 space-y-2">
              {product.includes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto pt-8 border-t-2 border-ink/10">
            <Button variant="primary" className="w-full md:w-auto text-xl !px-12 !py-4 shadow-[4px_4px_0_0_var(--color-ink)] hover:shadow-[6px_6px_0_0_var(--color-ink)]">
              Add to Cart
            </Button>
            <p className="font-sans text-sm font-bold text-ink/50 mt-4 text-center md:text-left">
              Secure checkout. Flat rate shipping.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
