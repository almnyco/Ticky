import { Inter } from "next/font/google";
import type { Metadata } from "next";
// import { Toaster } from "sonner";
import "./globals.css";

const interSans = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticky - Task Manager",
  description: "Creating by Nycollas",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={interSans.className}>{children}</body>
      {/* <Toaster /> */}
    </html>
  );
}
