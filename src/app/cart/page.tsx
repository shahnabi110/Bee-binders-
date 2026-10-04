import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CartPage() {
  const cartItems = [
    { slug: "abc-writing-tracing-binder", name: "ABC Writing & Tracing Binder", price: 1200, quantity: 1, image: "" },
    { slug: "3-letter-cvc-cards", name: "3 Letter (CVC) Picture Word Cards", price: 850, quantity: 2, image: "" }
  ];
  
  const subtotal = 1200 + (850 * 2);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
      <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-ink mb-8">Your Cart 🛒</h1>
      
      {cartItems.length > 0 ? (
        <div className="bg-cream rounded-3xl border-4 border-ink shadow-[8px_8px_0_0_var(--color-ink)] overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              {cartItems.map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6 items-center border-b-2 border-ink/10 pb-6 last:border-0 last:pb-0">
                  <div className="w-24 h-24 bg-sky/30 rounded-xl border-2 border-ink flex-shrink-0 flex items-center justify-center text-3xl">
                    🐝
                  </div>
                  
                  <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <Link href={`/product/${item.slug}`} className="font-heading font-bold text-xl text-ink hover:text-coral transition-colors">
                        {item.name}
                      </Link>
                      <div className="font-sans font-bold text-ink/70 mt-1">Rs {item.price}</div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="flex items-center border-2 border-ink rounded-full overflow-hidden bg-white h-10">
                        <button className="px-3 text-xl font-bold hover:bg-sky/50 transition-colors h-full flex items-center justify-center">-</button>
                        <span className="w-8 text-center font-sans font-bold">{item.quantity}</span>
                        <button className="px-3 text-xl font-bold hover:bg-sky/50 transition-colors h-full flex items-center justify-center">+</button>
                      </div>
                      <button className="text-coral hover:text-ink transition-colors font-bold text-sm underline decoration-2 underline-offset-4">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-sky/30 border-t-4 border-ink p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-sans font-semibold text-ink/80 mb-1">Subtotal</p>
              <div className="font-heading font-extrabold text-3xl text-ink">Rs {subtotal}</div>
              <p className="font-sans text-sm text-ink/60 mt-1">Shipping and taxes calculated at checkout.</p>
            </div>
            
            <div className="w-full md:w-auto">
              <Button href="/checkout" variant="primary" className="w-full text-xl !px-12 !py-4 shadow-[4px_4px_0_0_var(--color-ink)] hover:shadow-[6px_6px_0_0_var(--color-ink)]">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 bg-cream rounded-3xl border-4 border-ink border-dashed">
          <div className="text-6xl mb-6">🍃</div>
          <h2 className="font-heading font-bold text-2xl text-ink mb-4">Your cart is feeling a bit empty!</h2>
          <Button href="/shop" variant="secondary">Go back to Shop</Button>
        </div>
      )}
    </div>
  );
}
