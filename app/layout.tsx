import { Urbanist } from "next/font/google";

import ToastProvider from "@/providers/toast-provider";

import "./globals.css";
import { ModalProvider } from "@/providers/modal-provider";
const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Shiply Consumer App",
  description: "App for Shiply consumers",
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
