import AuthContextProvider from "@/src/contexts/AuthContext";
import AuthLayout from "@/src/Layouts/AuthLayout";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthContextProvider>
      <AuthLayout>{children}</AuthLayout>
    </AuthContextProvider>
  );
}
