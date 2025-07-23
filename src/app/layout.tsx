import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Homeland Cable - High-Speed Internet & TV Services",
  description: "Premium cable, internet, and TV services. Fast, reliable connectivity for your home and business.",
  keywords: "cable, internet, tv, broadband, streaming, home entertainment, connectivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
