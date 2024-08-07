import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <Suspense>{children}</Suspense>
      <Footer />
    </>
  );
}
