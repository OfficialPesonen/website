import { PropsWithChildren } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arttu Pesonen",
  description: "Arttu Pesonen",
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-1NT3Q4F2WK" />
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;
