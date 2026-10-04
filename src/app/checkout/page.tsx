import React from "react";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-cream md:bg-gray-50 flex flex-col md:flex-row-reverse">
      
      <div className="w-full md:w-[45%] bg-sky/10 md:border-l-2 md:border-ink md:min-h-screen p-6 md:p-10 lg:p-16">
        <div className="max-w-md mx-auto md:ml-0 md:mr-auto">
          <div className="md:hidden flex items-center justify-between py-4 border-y-2 border-ink/10 mb-6 cursor-pointer">
            <span className="font-heading font-bold text-ink flex items-center gap-2">🛒 Show order summary </span>
            <span className="font-heading font-bold text-xl text-ink">Rs 3099.00</span>
          </div>

          <div className="hidden md:block">
             <div className="flex flex-col gap-4 mb-6">
               <div className="flex items-center gap-4">
                 <div className="relative">
                   <div className="w-16 h-16 bg-cream border-2 border-ink rounded-xl flex items-center justify-center text-2xl">🐝</div>
                   <div className="absolute -top-2 -right-2 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center text-xs font-bold">1</div>
                 </div>
                 <div className="flex-grow">
                   <h4 className="font-sans font-bold text-ink text-sm">ABC Writing & Tracing Binder</h4>
                 </div>
                 <div className="font-sans font-bold text-ink text-sm">Rs 1200.00</div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="relative">
                   <div className="w-16 h-16 bg-cream border-2 border-ink rounded-xl flex items-center justify-center text-2xl">🐝</div>
                   <div className="absolute -top-2 -right-2 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center text-xs font-bold">2</div>
                 </div>
                 <div className="flex-grow">
                   <h4 className="font-sans font-bold text-ink text-sm">3 Letter (CVC) Picture Word Cards</h4>
                 </div>
                 <div className="font-sans font-bold text-ink text-sm">Rs 1700.00</div>
               </div>
             </div>

             <div className="flex gap-2 mb-6 border-b-2 border-ink/10 pb-6">
               <input type="text" placeholder="Discount code" className="flex-grow px-4 py-3 rounded-xl border-2 border-ink font-sans outline-none focus:ring-2 focus:ring-honey" />
               <button className="px-6 py-3 bg-ink text-cream font-heading font-bold rounded-xl hover:bg-ink/90 transition-colors">Apply</button>
             </div>

             <div className="flex flex-col gap-2 font-sans font-semibold text-ink/80 text-sm mb-4">
               <div className="flex justify-between">
                 <span>Subtotal</span>
                 <span className="font-bold text-ink">Rs 2900.00</span>
               </div>
               <div className="flex justify-between">
                 <span>Shipping</span>
                 <span className="font-bold text-ink">Rs 199.00</span>
               </div>
             </div>

             <div className="flex justify-between items-center border-t-2 border-ink/10 pt-4 mb-8">
               <span className="font-heading font-bold text-xl text-ink">Total</span>
               <div className="flex items-end gap-2">
                 <span className="text-xs font-sans text-ink/60 mb-1">PKR</span>
                 <span className="font-heading font-extrabold text-3xl text-ink">Rs 3099.00</span>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[55%] bg-cream p-6 md:p-10 lg:p-16">
        <div className="max-w-xl mx-auto md:mr-0 md:ml-auto">
          
          <div className="mb-8 hidden md:block">
            <Link href="/" className="font-heading font-extrabold text-3xl text-ink">Bee Binders</Link>
          </div>

          <form className="flex flex-col gap-10">
            <section>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">Contact</h2>
              <div className="flex flex-col gap-3">
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border-2 border-ink/20 focus:border-ink font-sans outline-none" required />
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 rounded border-2 border-ink/20 accent-ink cursor-pointer" />
                  <span className="font-sans text-ink text-sm">Email me with news and offers</span>
                </label>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">Delivery</h2>
              <div className="flex flex-col gap-4">
                <select className="w-full px-4 py-3 rounded-xl border-2 border-ink/20 focus:border-ink font-sans outline-none bg-white">
                  <option>Pakistan</option>
                </select>
                <div className="flex gap-4">
                  <input type="text" placeholder="First name" className="w-1/2 px-4 py-3 rounded-xl border-2 border-ink/20 focus:border-ink font-sans outline-none" required />
                  <input type="text" placeholder="Last name" className="w-1/2 px-4 py-3 rounded-xl border-2 border-ink/20 focus:border-ink font-sans outline-none" required />
                </div>
                <input type="text" placeholder="Address" className="w-full px-4 py-3 rounded-xl border-2 border-ink/20 focus:border-ink font-sans outline-none" required />
                <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full px-4 py-3 rounded-xl border-2 border-ink/20 focus:border-ink font-sans outline-none" />
                <div className="flex gap-4">
                  <input type="text" placeholder="City" className="w-1/2 px-4 py-3 rounded-xl border-2 border-ink/20 focus:border-ink font-sans outline-none" required />
                  <input type="text" placeholder="Postal code (optional)" className="w-1/2 px-4 py-3 rounded-xl border-2 border-ink/20 focus:border-ink font-sans outline-none" />
                </div>
                <div className="relative">
                  <input type="tel" placeholder="Phone (e.g. 03XX-XXXXXXX)" className="w-full px-4 py-3 rounded-xl border-2 border-ink/20 focus:border-ink font-sans outline-none" required />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-ink/10 text-ink/60 flex items-center justify-center text-xs cursor-help" title="In case we need to contact you about your order.">?</div>
                </div>
                <label className="flex items-center gap-3 cursor-pointer mt-1">
                  <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-2 border-ink/20 accent-ink cursor-pointer" />
                  <span className="font-sans text-ink text-sm">This is also my WhatsApp number</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 rounded border-2 border-ink/20 accent-ink cursor-pointer" />
                  <span className="font-sans text-ink text-sm">Save this information for next time</span>
                </label>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">Shipping method</h2>
              <div className="w-full p-4 rounded-xl border-2 border-ink bg-honey/10 flex justify-between items-center">
                <span className="font-sans font-bold text-ink">Standard</span>
                <span className="font-sans font-bold text-ink">Rs 199.00</span>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-ink mb-1">Payment</h2>
              <p className="font-sans text-sm text-ink/70 mb-4">All transactions are secure and encrypted.</p>
              
              <div className="flex flex-col rounded-xl border-2 border-ink overflow-hidden">
                <label className="flex items-center gap-4 p-4 cursor-pointer hover:bg-black/5 bg-white border-b-2 border-ink/10">
                  <input type="radio" name="payment" value="cod" defaultChecked className="w-5 h-5 accent-ink" />
                  <span className="font-sans font-bold text-ink">Cash on Delivery (COD)</span>
                </label>
                
                <label className="flex items-center gap-4 p-4 cursor-pointer hover:bg-black/5 bg-white border-b-2 border-ink/10">
                  <input type="radio" name="payment" value="bank" className="w-5 h-5 accent-ink" />
                  <span className="font-sans font-bold text-ink">Bank Deposit</span>
                </label>
                
                <label className="flex items-center gap-4 p-4 cursor-pointer hover:bg-black/5 bg-white border-b-2 border-ink/10">
                  <input type="radio" name="payment" value="easypaisa" className="w-5 h-5 accent-ink" />
                  <span className="font-sans font-bold text-ink">Easypaisa</span>
                </label>

                <label className="flex items-center gap-4 p-4 cursor-pointer hover:bg-black/5 bg-white">
                  <input type="radio" name="payment" value="jazzcash" className="w-5 h-5 accent-ink" />
                  <span className="font-sans font-bold text-ink">JazzCash</span>
                </label>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-ink mb-4">Billing address</h2>
              <div className="flex flex-col rounded-xl border-2 border-ink overflow-hidden">
                <label className="flex items-center gap-4 p-4 cursor-pointer hover:bg-black/5 bg-white border-b-2 border-ink/10">
                  <input type="radio" name="billing" value="same" defaultChecked className="w-5 h-5 accent-ink" />
                  <span className="font-sans font-bold text-ink">Same as shipping address</span>
                </label>
                
                <label className="flex items-center gap-4 p-4 cursor-pointer hover:bg-black/5 bg-white">
                  <input type="radio" name="billing" value="different" className="w-5 h-5 accent-ink" />
                  <span className="font-sans font-bold text-ink">Use a different billing address</span>
                </label>
              </div>
            </section>
            
            <button type="submit" className="w-full bg-honey text-ink font-heading font-extrabold text-2xl py-5 rounded-xl border-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-ink)] active:translate-y-[2px] active:shadow-none transition-all">
              Complete order
            </button>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-sans font-bold text-ink/60 underline decoration-2 underline-offset-4 mb-10">
              <Link href="/refund-policy" className="hover:text-ink">Refund policy</Link>
              <Link href="/privacy-policy" className="hover:text-ink">Privacy policy</Link>
              <Link href="/terms" className="hover:text-ink">Terms of service</Link>
              <Link href="/contact" className="hover:text-ink">Contact</Link>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}
