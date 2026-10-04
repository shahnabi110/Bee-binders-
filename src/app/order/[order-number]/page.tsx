import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default async function OrderConfirmationPage({ params }: { params: Promise<{ "order-number": string }> }) {
  const resolvedParams = await params;
  const orderNumber = resolvedParams["order-number"];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 flex justify-center">
      <div className="w-full max-w-2xl bg-cream rounded-[3rem] border-4 border-ink shadow-[12px_12px_0_0_var(--color-ink)] p-8 md:p-12 text-center relative overflow-hidden">
        
        <div className="absolute top-4 left-4 text-3xl rotate-12">✨</div>
        <div className="absolute top-12 right-8 text-4xl -rotate-12">🌸</div>
        <div className="absolute bottom-8 left-10 text-3xl rotate-45">✨</div>
        <div className="absolute top-1/2 right-4 text-3xl">🍯</div>

        <div className="w-24 h-24 bg-honey rounded-full border-4 border-ink mx-auto flex items-center justify-center text-4xl mb-6 shadow-[4px_4px_0_0_var(--color-ink)] animate-bounce" style={{animationDuration: '2s'}}>
          📦
        </div>
        
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-ink mb-2">
          Thank you, Ayesha!
        </h1>
        <p className="font-handwriting text-2xl text-ink/80 mb-8">
          Your little bee's parcel is being packed.
        </p>

        <div className="bg-sky/30 rounded-2xl border-2 border-ink p-6 mb-8 text-left inline-block w-full max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4 border-b-2 border-ink/10 pb-4">
            <span className="font-sans font-bold text-ink/70">Order Number</span>
            <span className="font-heading font-extrabold text-xl text-ink">{orderNumber}</span>
          </div>
          
          <div className="mb-4">
            <span className="font-sans font-bold text-ink/70 block mb-1">Delivery Address</span>
            <span className="font-sans font-semibold text-ink block">Ayesha Khan<br/>House 12, Street 4, F-8/4<br/>Islamabad</span>
          </div>
          
          <div>
            <span className="font-sans font-bold text-ink/70 block mb-1">Payment Method</span>
            <span className="font-sans font-semibold text-ink flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-honey border-2 border-ink inline-block"></span>
              Bank Deposit
            </span>
          </div>
        </div>

        <div className="bg-honey/20 border-2 border-ink border-dashed rounded-xl p-6 mb-10 text-left max-w-md mx-auto">
          <h3 className="font-heading font-bold text-xl text-ink mb-2">Next step: Payment</h3>
          <p className="font-sans font-semibold text-ink/80 text-sm mb-4">
             Please deposit Rs 3099 to the following bank account and send us a screenshot on Instagram @beebindersbyheebal.
          </p>
          <div className="font-sans font-bold text-ink text-sm bg-white p-4 rounded-lg border-2 border-ink">
            Bank: Meezan Bank<br/>
            Title: Heebal<br/>
            Account: 010101010101
          </div>
        </div>

        <Button href="/" variant="primary" className="text-xl px-10 py-4 shadow-[4px_4px_0_0_var(--color-ink)] hover:shadow-[6px_6px_0_0_var(--color-ink)]">
          Back to Storybook
        </Button>
      </div>
    </div>
  );
}
