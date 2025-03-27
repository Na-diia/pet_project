import type { Metadata } from "next";
import {Bellefair, Barlow} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const bellefair = Bellefair({
  variable: "--font-bellefair",
  weight: "400",
  subsets: ['latin']
});

const barlow = Barlow({
  variable: "--font-barlow",
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
    <html lang="en">
         <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
         <link
         rel="icon"
         href="../app/favicon.png"
         type="image/<generated>"
         sizes="<generated>"
         />
        <meta name="theme-color" content="#fffeea"/>
      <body
        className={`${bellefair.className} ${barlow.className}  antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
