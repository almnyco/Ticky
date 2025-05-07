"use client";

import Providers from "@/src/contexts/Providers";
import AppLayout from "@/src/Layouts/AppLayout";
import { Config } from "@/src/lib/toast.config";
import { Toaster } from "sonner";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <AppLayout>{children}</AppLayout>
      <Toaster {...Config} />
    </Providers>
  );
}
