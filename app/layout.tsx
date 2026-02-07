import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Construction Company in Chennai | Residential & Commercial",
  description:
    "Leading construction company in Chennai offering residential & commercial construction, turnkey projects, renovations, and complete interior execution.",

  keywords:
    "construction company in chennai, residential construction, commercial construction, house construction, villa construction, turnkey projects",

  // ✅ Google Search Console verification
  verification: {
    google: "googlea07427e417fd9f63",
  },

  alternates: {
    canonical: "https://www.skrbuilder.com/",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "SKR Builders And Promoters" }],

  openGraph: {
    title: "Residential & Commercial Construction in Chennai – SKR Builders",
    description:
      "SKR Builders & Promoters offer complete residential and commercial construction in Chennai with end-to-end execution.",
    url: "https://www.skrbuilder.com/",
    siteName: "SKR Builders And Promoters",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics – MUST be in HEAD */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7QTGVKFRBE"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7QTGVKFRBE');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
