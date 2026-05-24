import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talente Ascunse | Hidden Talents – EXCEDO",
  description:
    "Platforma care aduce în lumină talentele tinere care merită să fie descoperite, inițiativă a Asociației EXCEDO.",
  keywords: ["talente ascunse", "arta", "tineri artisti", "medii rurale", "EXCEDO", "Romania"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-foreground bg-background">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
