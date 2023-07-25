import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GrafiQ",
  description: "Grafiq Studio by Techtoor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="fixed w-full top-0">
          <Navbar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
