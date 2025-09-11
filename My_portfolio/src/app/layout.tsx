import type { Metadata, Viewport } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: 'swap', // Improves loading performance
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  display: 'swap', // Improves loading performance
});

// Separate viewport export for better performance
export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Allow zooming for accessibility
}

export const metadata: Metadata = {
  metadataBase: new URL('https://devsmruti.vercel.app'),
  
  title: {
    default: "Smruti Prakash Rout | Software Developer Portfolio",
    template: "%s | DevSmruti" // For page-specific titles
  },
  
  description:
    "Portfolio of Smruti Prakash Rout - Expert Software Developer, Linux Administrator, DevOps Engineer, and Fullstack Developer from India. Specializing in modern web technologies, cloud infrastructure, and scalable solutions.",
  
  keywords: [
    // Primary keywords
    "Smruti Prakash Rout",
    "DevSmruti",
    "Software Developer India",
    "Fullstack Developer",
    "DevOps Engineer",
    "Linux Administrator",
    "smruti on linux",
    
    // Secondary keywords  
    "React Developer",
    "Next.js Developer", 
    "Node.js Developer",
    "Python Developer",
    "Cloud Engineer",
    "Portfolio Website",
    
    // Location-based
    "Software Developer Bhubaneswar",
    "Developer Odisha",
    "Indian Software Engineer",
    
    // Technical skills
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "System Administrator",
    "Container Orchestration",
    "Microservices",
    
    // Additional SEO Keywords
    "JavaScript Developer",
    "TypeScript Developer",
    "AWS Developer",
    "Docker Specialist",
    "Kubernetes Expert",
    "CI/CD Pipeline",
    "API Development",
    "Database Design",
    "MongoDB Developer",
    "PostgreSQL Expert",
    "Redis Caching",
    "GraphQL Developer",
    "REST API Developer",
    "Mobile App Developer",
    "React Native Developer",
    "Flutter Developer",
    "Machine Learning Engineer",
  ],
  
  authors: [{ name: "Smruti Prakash Rout", url: "https://devsmruti.vercel.app" }],
  creator: "Smruti Prakash Rout",
  publisher: "DevSmruti",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  applicationName: "DevSmruti Portfolio",
  
  // Updated favicon configuration with new icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  
  // PWA manifest
  // manifest: '/manifest.json',
  
  // Enhanced Open Graph
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: "https://devsmruti.vercel.app",
  //   siteName: "DevSmruti - Smruti Prakash Rout Portfolio",
  //   title: "Smruti Prakash Rout | Expert Software Developer & DevOps Engineer",
  //   description:
  //     "Explore the portfolio of Smruti Prakash Rout - Expert in full-stack development, DevOps automation, Linux administration, and cloud solutions. Based in India.",
  //   images: [
  //     {
  //       url: "/og-image.png", // Create a proper OG image (1200x630)
  //       width: 1200,
  //       height: 630,
  //       alt: "DevSmruti - Smruti Prakash Rout Portfolio",
  //       type: "image/png",
  //     },
  //   ],
  // },
  
  // Enhanced Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle", // Add your Twitter handle
    creator: "@your_twitter_handle",
    title: "Smruti Prakash Rout | Expert Software Developer & DevOps Engineer",
    description:
      "Portfolio showcasing expertise in full-stack development, DevOps, Linux administration, and modern web technologies.",
    images: ["/og-image.png"],
  },
  
  // Additional SEO metadata
  alternates: {
    canonical: "https://devsmruti.vercel.app",
  },
  
  category: 'technology',
  classification: 'Software Development Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Next.js App Directory automatically serves these from /app */}
        {/* No manual link tags needed for favicon.ico, icon.png, apple-icon.png when in /app */}
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Enhanced JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "WebSite"],
              name: "Smruti Prakash Rout",
              alternateName: "DevSmruti",
              url: "https://devsmruti.vercel.app",
              image: "https://devsmruti.vercel.app/profile-photo.jpg", // Add your photo
              sameAs: [
                // Add your social media profiles
                "https://github.com/smrutiofficial",
                "https://www.linkedin.com/in/smrutiprakashrout",
                "https://www.instagram.com/smruti_on_linux/",
                "https://youtube.com/@smrutionlinux"
              ],
              jobTitle: "Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "DevSmruti", // or your company
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhubaneswar", // Your city
                addressRegion: "Odisha", // Your state
                addressCountry: "IN"
              },
              description: "Expert Software Developer specializing in full-stack development, DevOps, and Linux administration",
              knowsAbout: [
                "Software Development",
                "DevOps",
                "Linux Administration", 
                "Full Stack Development",
                "Cloud Computing",
                "Web Development",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "AWS",
                "Docker",
                "Kubernetes",
                "CI/CD",
                "API Development",
                "Database Design",
                "System Architecture"
              ],
            }),
          }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Sitemap for search engines */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
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