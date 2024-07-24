import Banner from "@/components/custom/Banner";
import Footer from "@/components/custom/Footer";
import { Suspense } from "react";

export default function AuthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center w-full justify-start bg-[url('/landing.webp')] bg-center bg-cover">
      <div className="p-2 md:p-4 flex flex-col justify-center items-center w-full">
        <Banner />
        <div className="w-full my-48 max-w-md">
          <Suspense>{children}</Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
}
