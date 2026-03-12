import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import localFont from "next/font/local"
import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Navbar/Footer/Footer";
import ReduxProvider from "@/shared/ReduxProvider";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const clashDispaly = localFont({
  src: "../../fonts/clashDisplay/ClashDisplay-Semibold.otf",
  variable: "--font-clash",
});

export const metadata: Metadata = {
  title: {
    template: '%s | QuickHire',
    default: 'QuickHire',
  },
  description: "Runbd providing best Car Buy/Sell, Bike Buy/Sell, Car Rent, Workshops, Accessories, Exchange, Lawyer, Job & Services — All in One Click. Skip the hassle and delays — easily buy, sell, or access essential services anytime from one reliable and secure platform.",

  keywords: ["runbd", "Runbd", "রানবিডি", "রান", "car", "buy", "sell", "rent", "car rent", "car sell", "car buy", "bike buy", "bike sell", "bike", "bikes", "job", "jobs", "exchange", "workshop", "accessories", "exchange", "lawyer", "bangladesh cars", "used car", "used bike", "new car", "new bike", "bangladesh bike", "bangladesh workshop", "bangladesh lawyer", "গাড়ি", "নতুন গাড়ি", "পুরাতন গাডি", "গাড়ি বিক্রয়", "গাড়ি বিক্রি", "গাড়ি ক্রয়", "গাড়ি ভাড়া", "বাইক বিক্রয়", "বাইক বিক্রি", "বাইক ক্রয়", "মটরসাইকেল", "মটরসাইকেল বিক্রি", "মটরসাইকেল ক্রয়", "চাকরি", "ওয়ার্কশপ", "গাড়ির সরঞ্জাম", "উকিল", "বাইসাইকেল", "এক্সচেঞ্জ"],

  metadataBase: new URL('https://runbd.org'),

  openGraph: {
    title: 'Runbd - Buy/Sell & Services in Bangladesh',
    description: 'Skip the hassle and delays — easily buy, sell, or access essential services anytime from one reliable and secure platform - Runbd.',
    url: 'https://runbd.org',
    siteName: 'Runbd',
    images: ["https://runbd.org/og-image.png"],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Runbd - Buy/Sell & Services in Bangladesh',
    description: 'Skip the hassle and delays — easily buy, sell, or access essential services anytime from one reliable and secure platform - Runbd.',
    creator: '@runbd',
    images: ['https://runbd.org/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.png"
        />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </head>

      <body className={`${epilogue.variable} 
      ${clashDispaly.variable} 
       antialiased`}>


        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {/* <NextJsTopLoader /> */}

        <ReduxProvider>
          {children}
        </ReduxProvider>

      </body>
    </html>
  );
}
