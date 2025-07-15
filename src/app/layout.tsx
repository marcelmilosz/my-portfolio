import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeInit } from "@/components/layout/ThemeInit";
import Navbar from "@/components/layout/Navbar/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Marcel Milosz",
  description: "I will add something here, surely",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeInit />
      <body
        className={`${inter.variable} antialiased w-full py-8 min-h-screen overflow-x-hidden`}
      // style={{ background: "var(--gradient-dark)" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
