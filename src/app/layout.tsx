import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import CursorFollower from "@/components/CursorFollower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexeraservices.com"),
  title: {
    default: "Nexera Services | Enterprise Software Development & AI Integration",
    template: "%s | Nexera Services",
  },
  description: "Nexera Services architects, develops, and scales modern end-to-end software solutions. We specialize in Custom Software, SaaS Engineering, Cloud DevOps, and AI Cognitive Systems.",
  keywords: [
    "Custom Software Development",
    "SaaS Product Engineering",
    "Mobile Application Development",
    "Cloud & DevSecOps Solutions",
    "AI Integration & Cognitive Systems",
    "Managed IT Services",
    "Nexera Services",
    "Enterprise Software Agency"
  ],
  authors: [{ name: "Nexera Services", url: "https://nexeraservices.com" }],
  creator: "Nexera Services",
  publisher: "Nexera Services",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nexera Services | Enterprise Software Development & AI Integration",
    description: "Nexera Services architects, develops, and scales modern end-to-end software solutions. We specialize in Custom Software, SaaS Engineering, Cloud DevOps, and AI Cognitive Systems.",
    url: "https://nexeraservices.com",
    siteName: "Nexera Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Nexera Services Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexera Services | Enterprise Software Development & AI Integration",
    description: "Nexera Services architects, develops, and scales modern end-to-end software solutions. We specialize in Custom Software, SaaS Engineering, Cloud DevOps, and AI Cognitive Systems.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nexeraservices.com/#organization",
        "name": "Nexera Services",
        "url": "https://nexeraservices.com",
        "logo": "https://nexeraservices.com/logo.png",
        "sameAs": [
          "https://github.com/nexeraservices",
          "https://linkedin.com/company/nexeraservices"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://nexeraservices.com/#service",
        "name": "Nexera Services",
        "url": "https://nexeraservices.com",
        "logo": "https://nexeraservices.com/logo.png",
        "image": "https://nexeraservices.com/logo.png",
        "description": "Nexera Services architects, develops, and scales modern end-to-end software solutions. We specialize in Custom Software Development, SaaS Engineering, Cloud DevOps, and AI Cognitive Systems.",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "knowsAbout": [
          "Custom Software Development",
          "SaaS & Web Product Engineering",
          "Mobile Application Engineering",
          "Cloud & DevSecOps Solutions",
          "AI Integration & Cognitive Systems",
          "Maintenance & Managed IT Services"
        ]
      }
    ]
  };

  return (
    <html lang="en" className="dark h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased bg-background text-foreground`}>
        <ThemeProvider>
          <CursorFollower />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
