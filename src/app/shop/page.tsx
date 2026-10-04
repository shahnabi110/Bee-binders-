import React from "react";
import { ProductCard } from "@/components/shop/ProductCard";

export default function ShopPage() {
  const categories = ["All", "Learning Binders", "Flash Cards", "Adaptive Books"];
  
  const products = [
    { slug: "abc-writing-tracing-binder", name: "ABC Writing & Tracing Binder", price: 1200, ageRange: "3-5", category: "Learning Binders" },
    { slug: "write-and-wipe-bundle", name: "Write and Wipe Bundle", price: 1500, ageRange: "3-6", category: "Learning Binders" },
    { slug: "3-letter-cvc-cards", name: "3 Letter (CVC) Picture Word Cards", price: 850, ageRange: "4-6", category: "Flash Cards" },
    { slug: "phonics-binder", name: "Complete Phonics Binder", price: 2100, ageRange: "4-7", category: "Learning Binders" },
    { slug: "strip-cards-blends", name: "Strip Cards for Blends & Word Families", price: 950, ageRange: "5-8", category: "Flash Cards" },
    { slug: "what-he-needs-book", name: "What He Needs (Adaptive Book)", price: 1100, ageRange: "2-5", category: "Adaptive Books" },
    { slug: "prepositions-book", name: "Prepositions (Adaptive Book)", price: 1100, ageRange: "3-6", category: "Adaptive Books" },
    { slug: "urdu-jumle", name: "Urdu Sentence (Jumle) Builder", price: 1300, ageRange: "4-7", category: "Adaptive Books", condition: "Like New" },
    { slug: "sold-item-example", name: "One-of-a-kind Learning Resource", price: 500, ageRange: "2-4", category: "Learning Binders", isSold: true },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      
      {/* How to Order Banner (Norman's Principle: Visibility & Conceptual Model) */}
      <div className="bg-lilac rounded-3xl p-6 md:p-10 mb-12 flex flex-col md:flex-row items-center gap-8 border-4 border-ink shadow-[8px_8px_0_0_var(--color-ink)]">
        <div className="w-24 h-24 bg-white border-4 border-ink rounded-full flex items-center justify-center text-5xl shadow-[4px_4px_0_0_var(--color-ink)] flex-shrink-0 rotate-6">
          📦
        </div>
        <div>
          <h2 className="font-heading font-extrabold text-3xl text-ink mb-2">How to Order</h2>
          <p className="font-sans font-bold text-ink/80 text-lg leading-relaxed">
            <span className="bg-white px-2 py-1 rounded-md border-2 border-ink mr-1 shadow-[1px_1px_0_0_var(--color-ink)]">1</span> Add items to your cart.<br/>
            <span className="bg-white px-2 py-1 rounded-md border-2 border-ink mr-1 mt-3 inline-block shadow-[1px_1px_0_0_var(--color-ink)]">2</span> Checkout securely (COD & Bank Transfer available!).<br/>
            <span className="bg-white px-2 py-1 rounded-md border-2 border-ink mr-1 mt-3 inline-block shadow-[1px_1px_0_0_var(--color-ink)]">3</span> We pack it with love and deliver it to your door!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:flex-wrap md:items-center justify-between mb-10 gap-6 border-b-4 border-ink/10 pb-6">
        <h1 className="font-heading font-extrabold text-4xl text-ink">
          Shop All Items
        </h1>
        
        <div className="flex overflow-x-auto gap-3 no-scrollbar w-full md:w-auto pb-2">
          {categories.map((cat, i) => (
            <button 
              key={i}
              className={`whitespace-nowrap px-6 py-3 rounded-xl font-heading font-bold text-lg border-2 border-ink transition-all ${
                i === 0 ? 'bg-sky text-ink shadow-[4px_4px_0_0_var(--color-ink)] -translate-y-1' : 'bg-white text-ink hover:bg-sky/50 hover:shadow-[4px_4px_0_0_var(--color-ink)] hover:-translate-y-1'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, i) => (
          <ProductCard 
            key={i}
            slug={product.slug}
            name={product.name}
            price={product.price}
            ageRange={product.ageRange}
            condition={product.condition}
            isSold={product.isSold}
          />
        ))}
      </div>
    </div>
  );
}
