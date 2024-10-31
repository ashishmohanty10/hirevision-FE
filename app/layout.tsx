import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { BG } from "@/components/bg";

export const metadata: Metadata = {
  title: "Hypervision",
  description: "Animated landing page done with Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <BG />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
