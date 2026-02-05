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
  description: "Leading construction company in Chennai offering residential & commercial construction, turnkey projects, renovations, and complete interior execution.",
  keywords: "Construction company in Chennai offering residential & commercial construction, house and villa construction, turnkey projects, trusted local contractors near me",
  alternates: {
    canonical: "https://www.skrbuilder.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "SKR Builders And Promoters" }],
  openGraph: {
    title: "Residential & Commercial Construction in Chennai – SKR Builders",
    type: "website",
    url: "https://www.skrbuilder.com",
    siteName: "SKR Builders And Promoters",
    description: "SKR Builders & Promoters offer complete residential construction in Chennai with planning, approvals, RCC framework, site supervision, finishing works, and handover.",
    images: ["https://www.facebook.com/photo/?fbid=122095204365236866&set=pb.61587105986571.-2207520000"],
  },
  twitter: {
    card: "summary",
    site: "@skrbuilders",
    title: "SKR Builders And Promoters - best Construction Company in Chennai",
    description: "Leading construction company in Chennai offering residential and commercial construction services, turnkey projects, house and villa construction, and project management.",
    creator: "@skrbuilders",
    images: ["x.com/skrbuilders/photo"],
  },
  other: {
    "audience": "all",
    "contact": "",
    "revisit-after": "3 days",
    "language": "english",
    "distribution": "global",
    "rating": "general",
    "copyright": "by https://www.skrbuilder.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7QTGVKFRBE"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7QTGVKFRBE');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
