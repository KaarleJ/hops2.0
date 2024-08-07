import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import ContextProvider from "@/components/custom/ContextProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "HopsApp",
  description:
    "HopsApp, the innovative calendar app designed specifically for academic students. Effortlessly plan and manage your university courses, ensuring you stay on top of your academic schedule.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
