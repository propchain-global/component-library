import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from "./config/ContextProvider";
import { headers } from "next/headers";
import { Header } from "@/components/ui/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WELF Dapp",
  description: "Official WELF Token Portal to stake, claim and everything else",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersObj = await headers();
  const cookies = headersObj.get("cookie");
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased dark`}
      >
        <Header isWalletConnected={false}/>
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
      </body>
    </html>
  );
}