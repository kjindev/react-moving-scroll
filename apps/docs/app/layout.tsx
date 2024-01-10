import { roboto } from "../util/font";
import NavBar from "./_components/global/NavBar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BASIC SCROLL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html>
      <body className={`${roboto.className} text-zinc-900`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
