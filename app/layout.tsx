import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GotechEdu | Technology, AI, Cloud, Cybersecurity & Digital Solutions",
    template: "%s | GotechEdu",
  },
  description:
    "GotechEdu provides enterprise technology solutions, AI engineering, cloud architecture, cybersecurity defense, and expert technology education to empower modern businesses.",
  keywords: [
    "GotechEdu",
    "technology solutions",
    "AI solutions",
    "cloud services",
    "cybersecurity",
    "digital marketing",
    "technology education",
    "software development",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/icons.png?v=2", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/icons.png?v=2", sizes: "180x180", type: "image/png" },
    ],
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/icons.png?v=2" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/icons.png?v=2" />
      </head>
      <body className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
