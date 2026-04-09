import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import LocalFont from "next/font/local";

const raleway = LocalFont({
  src : "./fonts/Raleway.woff2",
  variable: "--font-raleway",
  weight: "100 900",

});



export const metadata: Metadata = {
  title: "CartZen - Your Ultimate Shopping Companion",
  description: "A modern e-commerce app for seamless shopping experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased","font-sans",raleway.variable)}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider>
        <Header />
        {children}
        <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}