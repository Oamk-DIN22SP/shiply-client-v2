"use client";
import { Urbanist } from "next/font/google";

import ToastProvider from "@/providers/toast-provider";

import "./globals.css";
import { ModalProvider } from "@/providers/modal-provider";
const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Shiply Driver App",
  description: "Driver App for Shiply",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
