import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/common/Topbar";
import Navbar from "@/components/common/Navbar";
import FooterSection from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import { Suspense } from "react";
import { MotionProvider } from "@/components/common/Motion";
import { getMoveNestSections } from "@/lib/movenest";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MoveNest - Packers & Movers",
  description: "Safe, secure and hassle-free packing and moving services",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sections = getMoveNestSections();

  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className={`${poppins.className} flex min-h-full flex-col overflow-x-clip bg-white text-slate-900`}>
        <MotionProvider>
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
          <header className="sticky top-0 z-50 flex flex-col shadow-sm">
            <Topbar data={sections.Topbar?.variants?.MoveNestTopbar1} />
            <Suspense fallback={null}>
              <Navbar data={sections.Header?.variants?.MoveNestHeader1} />
            </Suspense>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <FooterSection data={sections.Footer?.variants?.MoveNestFooter1} />
        </MotionProvider>
      </body>
    </html>
  );
}
