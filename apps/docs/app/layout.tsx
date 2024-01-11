import { roboto } from "../util/font";
import NavBar from "./_components/global/NavBar";
import RecoilRootProvider from "./_components/provider/RecoilRootProvider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Moving Scroll",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html>
      <body className={`${roboto.className} text-zinc-900`}>
        <RecoilRootProvider>
          <NavBar />
          {children}
        </RecoilRootProvider>
      </body>
    </html>
  );
}
