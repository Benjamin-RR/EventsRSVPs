import { Suspense } from "react";

import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";

import '../styles/globals.css';

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmSans",
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: {
    default: "Uplift Church",
  },
  description: "Dive deeper in faith, purpose & community.",
  applicationName: "Uplift Church",
  referrer: "origin-when-cross-origin",
  keywords: ["uplift church", "church", "christian", "faith", "community", "purpose", "worship", "sermons", "events", "rsvps"],
  authors: [{ name: "Uplift Church", url: "https://upliftchurch.com" }],
  creator: "Uplift Church",
  publisher: "Uplift Church",
  metadataBase: new URL("https://upliftchurch.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en": "/",
      "en-CA": "/",
      "en-GB": "/",
    },
  },
  openGraph: {
    title: "Uplift Church",
    description: "Dive deeper in faith, purpose & community.",
    url: "https://upliftchurch.com",
    siteName: "Uplift Church",
    images: [
      {
        url: "/Uplift church.png",
        width: 762,
        height: 580,
        alt: "Uplift Church"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uplift Church",
    description: "Dive deeper in faith, purpose & community.",
    images: ["/Uplift church.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en" darkmode="dark" className={`${dmSans.variable} text-base md:text-lg lg:text-xl`}>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#FFD500" />
        <meta name="color-scheme" content="light dark" />
        <meta name='impact-site-verification' value='579d36b3-03a5-4e1b-b61d-bb16b69c938e'></meta>
      </head>
      <body className="prose font-sans w-full min-h-screen flex flex-col items-center text-[white] bg-[black]  overflow-x-hidden z-[1] relative mainBody">
        <Suspense fallback={<Loading />}>
          <Header />
          <main className="flex-1 w-full max-w-2xl px-4 md:px-6">
            {children}
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
export default MainLayout;
