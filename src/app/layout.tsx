import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maoko Solutions | Engineering Africa's Future",
  description: "Maoko Solutions is a premier engineering and project management consultancy firm committed to delivering sustainable solutions that drive regional growth.",
  icons: {
    icon: "/logo/Maoko Logo Pic.jpg",
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-manrope" suppressHydrationWarning>
        <Header />
        <main className="pt-0 min-h-screen">
          {children}
        </main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
