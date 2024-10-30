"use client";

import "./globals.css";
import StoreProvider from "./StoreProvider";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function RootComponent({ children }) {
  return (
    <>
      <html lang="en" className="dark">
        <body className={`${jetbrainsMono.variable}`}>{children}</body>
      </html>
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <RootComponent>{children}</RootComponent>
    </StoreProvider>
  );
}
