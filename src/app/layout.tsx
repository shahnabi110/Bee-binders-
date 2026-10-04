import type { Metadata } from "next";
import { Baloo_2, Nunito, Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bee Binders by Heebal",
  description: "Learning that feels like play. Children's learning materials and adaptive books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${nunito.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-ink" suppressHydrationWarning>
          <Navbar />
          <main className="flex-grow pt-20 md:pt-24">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
      </body>
    </html>
  );
}
