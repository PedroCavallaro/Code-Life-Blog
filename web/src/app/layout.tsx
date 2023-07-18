import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono as Roboto } from "next/font/google";
import NavBar from "./components/NavBar";

const roboto = Roboto({
  subsets: ["latin"],

  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Code Life",
  description: "Um blog feito por amigos para falar sobre a área da tecnologia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-purple-100 bg-no-repeat`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
