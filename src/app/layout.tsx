import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sirine2907.github.io"),
  title: {
    default: "Sirine Ayadi · Flutter and full-stack developer",
    template: "%s · Sirine Ayadi",
  },
  description:
    "Portfolio of Sirine Ayadi, Flutter and full-stack developer in Tunisia: business software, mobile apps, AI tools and websites.",
  openGraph: {
    title: "Sirine Ayadi · Flutter and full-stack developer",
    description: "Business software, mobile apps, AI tools and websites, with real screens from each project.",
    url: "/",
    siteName: "Sirine Ayadi",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Contact />
      </body>
    </html>
  );
}
