import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { Viewport } from "next";
import "./globals.css";

import PageContentWrapper from "@/components/wrapper/PageContentWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sib22idaustria.cc",
  description: "",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative overflow-visible h-screen`}>
        <PageContentWrapper>{children}</PageContentWrapper>
      </body>
    </html>
  );
}
