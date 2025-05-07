"use client";
import Providers from "@/src/contexts/Providers";
import AuthLayout from "@/src/Layouts/AuthLayout";
import { Config } from "@/src/lib/toast.config";
import { Toaster } from "sonner";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <AuthLayout>{children}</AuthLayout>
      <Toaster {...Config} />
    </Providers>
  );
}
