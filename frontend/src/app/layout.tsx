import AppLayout from "../contexts/AppLayout";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticky - Task Manager",
  description: "Creating by Nycollas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${interSans.variable}`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
