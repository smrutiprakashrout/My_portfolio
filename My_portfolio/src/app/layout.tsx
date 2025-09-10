import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Smruti Prakash Rout | Software Developer Portfolio",
  description:
    "Portfolio of Smruti Prakash Rout - Software Developer, Linux Administrator, DevOps Engineer, and Fullstack Developer from India.",
  keywords: [
    "Smruti",
    "Smruti Prakash Rout",
    "Smruti_On_Linux",
    "smruti prakash rout",
    "smruti_on_linux",
    "devsmruti",
    "Software Developer",
    "Software Developer in India",
    "DevOps Engineer",
    "Linux Developer",
    "Fullstack Developer",
    "DevSmruti",
  ],
  applicationName: "DevSmruti",
  openGraph: {
    title: "Smruti Prakash Rout | Software Developer Portfolio",
    description:
      "Portfolio of Smruti Prakash Rout - Software Developer, Linux Developer, DevOps Engineer, and Fullstack Developer.",
    url: "https://devsmruti.vercel.app",
    siteName: "DevSmruti",
    type: "website",
    images: [
      {
        url: "https://devsmruti.vercel.app/favicon.png",
        width: 512,
        height: 512,
        alt: "DevSmruti Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smruti Prakash Rout | Software Developer Portfolio",
    description:
      "Portfolio of Smruti Prakash Rout - Software Developer, Linux Developer, DevOps Engineer, and Fullstack Developer.",
    images: ["https://devsmruti.vercel.app/favicon.png"],
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
        {/* Favicons for all browsers */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#111827" />

        {/* JSON-LD structured data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "DevSmruti",
              url: "https://devsmruti.vercel.app/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://devsmruti.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}