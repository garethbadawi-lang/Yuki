import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { AgeGate } from "@/components/common/AgeGate";
import { SiteNav } from "@/components/common/SiteNav";
import { SiteFooter } from "@/components/home/SiteFooter";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yuki",
    template: "%s · Yuki",
  },
  description: "A bold, glamorous creator landing experience for adults 18+.",
  applicationName: "Yuki",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Yuki",
    description: "Premium videos, private gallery drops, and members-only updates.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07040f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteNav />
        {children}
        <SiteFooter />
        <AgeGate />
      </body>
    </html>
  );
}
