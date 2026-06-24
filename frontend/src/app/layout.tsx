import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Flogen — Recover $22,000 in Billable Hours | Law Firm Automation",
  description:
    "Custom law firm automation that goes live in 30 days. Recover billable hours, never lose a lead to a faster competitor. Pilot includes full NDA and money-back guarantee.",
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-clip font-sans`}
      >
        <main className="overflow-x-clip">{children}</main>
      </body>
    </html>
  );
}
