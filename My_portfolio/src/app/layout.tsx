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
    "Portfolio of Smruti Prakash Rout - Software Developer, Linux Developer, DevOps Engineer, and Fullstack Developer from India.",
  keywords: [
    "Smruti",
    "Smruti Prakash Rout",
    "Software Developer",
    "Software Developer in India",
    "DevOps Engineer",
    "Linux Developer",
    "Fullstack Developer",
    "DevSmuti",
  ],
  openGraph: {
    title: "Smruti Prakash Rout | Software Developer",
    description:
      "Portfolio of Smruti Prakash Rout - Software Developer, Linux Developer, DevOps Engineer, and Fullstack Developer.",
    url: "https://devsmuti.vercel.app",
    siteName: "DevSmuti Portfolio",
    type: "website",
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