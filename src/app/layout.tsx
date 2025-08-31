import type { Metadata } from "next";
import "./globals.css";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import * as LP from "../components/LanguageProvider"; // works for named OR default export
const LanguageProvider =
  // prefer named export, else default, else no-op so the app never crashes
  (LP as any).LanguageProvider ?? (LP as any).default ?? (({ children }: any) => children);

import WhatsAppFloat from "../components/WhatsAppFloat";
import Analytics from "../components/Analytics";
import ClientEffects from "../components/ClientEffects";
import FacebookFloat from "../components/FacebookFloat";

export const metadata: Metadata = {
  title: "Magalhaes Joel",
  description: "Trusted real estate in Luxembourg — Less is more.",
  icons: { icon: "/icon.svg" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientEffects />

        <LanguageProvider>
          <Nav />
          {children}
          <Footer />
        </LanguageProvider>

        {/* Bottom-right stack */}
        <WhatsAppFloat />
        <FacebookFloat />

        <Analytics />
      </body>
    </html>
  );
}
