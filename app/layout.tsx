import type { Metadata } from "next";
import {Bellefair, Barlow_Condensed, Barlow} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const barlow_norm =Barlow({
  variable:"--font-barlow-norm",
  weight: "400",
  subsets: ['latin']
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  weight: "400",
  subsets: ['latin']
});

const bellefair = Bellefair({
  variable: "--font-bellefair",
  weight: "400",
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Space App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    className={`${bellefair.variable} ${barlow.variable} ${barlow_norm.variable}  antialiased`}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
         <link
         rel="icon"
         href="../app/icon.png"
         type="image/png"
         sizes="32x32"
         />
        <meta name="theme-color" content="#fffeea"/>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
