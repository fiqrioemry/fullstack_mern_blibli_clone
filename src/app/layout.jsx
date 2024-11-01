"use client";

import Header from "@/components/layout/Header";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { JetBrains_Mono } from "next/font/google";
import { useSelector } from "react-redux";
import Footer from "@/components/layout/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

function RootComponent({ children }) {
  const darkMode = useSelector((state) => state.interface.darkMode);
  return (
    <>
      <html lang="en" className={`${darkMode ? "dark" : ""}`}>
        <body className={`${jetbrainsMono.variable}`}>
          <Header />
          {children}
          <Footer />
        </body>
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
