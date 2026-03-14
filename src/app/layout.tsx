import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import localFont from "next/font/local"
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
    default: 'QuickHire - Find Your Dream Job in Bangladesh',
  },
  description: "QuickHire is Bangladesh's leading job portal — find full-time, part-time, remote, and freelance jobs across all industries. Post jobs, apply instantly, and connect with top employers. Your next career move starts here.",

  keywords: [
    // English
    "quickhire", "QuickHire", "job", "jobs", "job portal", "job board",
    "find job", "job search", "apply job", "job circular", "career",
    "recruitment", "hiring", "employer", "employee", "resume", "cv",
    "full time job", "part time job", "remote job", "freelance job",
    "bangladesh job", "dhaka job", "job vacancy", "job opportunity",
    "entry level job", "fresher job", "experienced job", "government job",
    "private job", "ngo job", "it job", "software job", "engineering job",
  ],

  metadataBase: new URL('https://quickhire.com'),

  openGraph: {
    title: 'QuickHire - Find Your Dream Job in Bangladesh',
    description: "Bangladesh's leading job portal — find full-time, part-time, remote, and freelance jobs. Connect with top employers and apply instantly.",
    url: 'https://quickhire.com',
    siteName: 'QuickHire',
    images: ["https://quickhire.com/og-image.png"],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'QuickHire - Find Your Dream Job in Bangladesh',
    description: "Bangladesh's leading job portal — find full-time, part-time, remote, and freelance jobs. Connect with top employers and apply instantly.",
    creator: '@quickhire',
    images: ['https://quickhire.com/og-image.png'],
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
