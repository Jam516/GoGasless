import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// // use sans for reading text
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// // use mono for titles
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: 'GoGasless',
  description: "GoGasless tracks apps that are pushing crypto forward with gas-free user experiences.",
  keywords: [
    "ERC-4337",
    "paymaster",
    "smart wallet",
    "account abstraction",
  ],
  authors: [
    {
      name: "0xKofi",
      url: "https://0xkofi.com",
    },
  ],
  creator: "0xKofi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gogasless.io",
    title: "GoGasless",
    description: "GoGasless tracks apps that are pushing crypto forward with gas-free user experiences.",
    siteName: "GoGasless",
    // images: [
    //   {
    //     url: "https://i.imgur.com/kxUawXn.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Arbigrants",
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Arbigrants",
  //   description: "Arbitrum Foundation Grants Data",
  //   images: ["https://i.imgur.com/kxUawXn.png"],
  //   creator: "@0xKofi",
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* put in body = className={`${geistSans.variable} ${geistMono.variable} antialiased`} */}
        <div className="relative flex min-h-screen flex-col px-[10%]">
          <SiteHeader />
          <Separator />
          {children}
          <Separator />
          <SiteFooter />
        </div>
      </body>
    </html >
  );
}
