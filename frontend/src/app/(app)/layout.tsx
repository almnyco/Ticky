import SidebarContextProvider from "@/src/contexts/SidebarContext";
import AppLayout from "@/src/Layouts/AppLayout";
export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarContextProvider>
      <AppLayout>{children}</AppLayout>
    </SidebarContextProvider>
  );
}
