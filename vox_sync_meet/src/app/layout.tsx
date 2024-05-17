import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import ClientProvider from "./ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meetings App",
  description: "A video calling app built with Next.js and Stream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
        <Navbar />
        <main className="auto max-w-5xl px-3 py-6" >
        {children}
        </main>
        </ClientProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
