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
  title: "Lexcellence Group LLC | Engineering Portfolio",
  description:
    "Full-stack engineering portfolio — web apps, software, Discord bots, backend systems, and game mods built by Lexcellence Group LLC.",
  keywords: ["CTO", "full stack developer", "Lexcellence Group", "portfolio", "software engineer"],
  openGraph: {
    title: "Lexcellence Group LLC | Engineering Portfolio",
    description: "Full-stack engineering portfolio — web apps, software, Discord bots, and backend systems.",
    url: "https://lexcellencegroupllc.com",
    siteName: "Lexcellence Group LLC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
