// Copyright © Spatial Corporation. All rights reserved.

import type { Metadata } from "next";
import { ReactNode } from "react";

import { Favicon, Footer, Navigation, TranslationProvider } from "@dakarai/components";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dakarai Cundiff",
  description: "A brand by Dakarai Cundiff."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Favicon href="/favicon.ico" />
      </head>
      <body className="bg-background-base text-foreground-primary text-base overflow-x-hidden">
        <TranslationProvider>
          <Navigation />
          {children}
          <Footer />
        </TranslationProvider>
        <Analytics />
      </body>
    </html>
  );
}
