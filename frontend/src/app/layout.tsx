import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource/sn-pro/latin-300.css";
import "@fontsource/tiktok-sans/400.css";
import { landingFontVariables } from "@/lib/fonts/landing";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flogen — Custom Automation for High-Growth Businesses",
  description:
    "Flogen builds custom automation systems for law firms, dental clinics, HVAC, financial advisors, and more. Live in 30 days with NDA and money-back guarantee.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  icons: {
    icon: "/logos/flogen-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${landingFontVariables} min-h-screen overflow-x-clip font-sans`}
      >
        <main className="overflow-x-clip">{children}</main>
      </body>
    </html>
  );
}
