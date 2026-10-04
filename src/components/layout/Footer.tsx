import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-sky border-t-2 border-ink pt-16 pb-8 mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-honey rounded-full border-2 border-ink flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <span className="text-xl">🐝</span>
              </div>
              <span className="font-heading font-bold text-2xl text-ink">Bee Binders</span>
            </Link>
            <p className="text-ink/80 mb-6 font-sans font-semibold">
              Learning that feels like play. Created with love for little learners in Pakistan.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl text-ink mb-4">Explore</h3>
            <ul className="space-y-3 font-sans font-semibold text-ink/90">
              <li><Link href="/shop" className="hover:text-coral hover:underline decoration-2 underline-offset-4 transition-colors">Shop All</Link></li>
              <li><Link href="/category/learning-binders" className="hover:text-coral hover:underline decoration-2 underline-offset-4 transition-colors">Learning Binders</Link></li>
              <li><Link href="/category/flash-cards" className="hover:text-coral hover:underline decoration-2 underline-offset-4 transition-colors">Flash Cards</Link></li>
              <li><Link href="/#about" className="hover:text-coral hover:underline decoration-2 underline-offset-4 transition-colors">Heebal's Story</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl text-ink mb-4">Help & Info</h3>
            <ul className="space-y-3 font-sans font-semibold text-ink/90">
              <li><Link href="/faq" className="hover:text-coral hover:underline decoration-2 underline-offset-4 transition-colors">FAQ & Delivery</Link></li>
              <li><Link href="/refund-policy" className="hover:text-coral hover:underline decoration-2 underline-offset-4 transition-colors">Refund Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-coral hover:underline decoration-2 underline-offset-4 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-coral hover:underline decoration-2 underline-offset-4 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-ink/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ink/70 font-sans text-sm font-semibold">
            © {new Date().getFullYear()} Bee Binders by Heebal. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/beebindersbyheebal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream border-2 border-ink flex items-center justify-center hover:-translate-y-1 transition-transform shadow-[2px_2px_0_0_var(--color-ink)] font-heading font-bold text-ink">
              IG
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
