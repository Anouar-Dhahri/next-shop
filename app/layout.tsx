import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Libre_Franklin } from "next/font/google";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "NEXTSHOP",
  description:
    "Your ultimate online store for electronics. Discover the latest smartphones, laptops, smart home devices, and more at competitive prices with fast shipping.",
};

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-full flex-col bg-white ${libreFranklin.className} tracking-wider`}>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
