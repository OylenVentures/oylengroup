import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_HOST_URI || "http://localhost:3000",
  ),
  title:
    "OylenGroup — A Group of Trailblazing Ventures for Every Modern Challenge",
  description:
    "OylenGroup engineers, scales, and operates sovereign-grade platforms spanning resilient cloud infrastructure, scam-free direct PropTech, ultra-fast fintech telecommunications, and high-impact venture incubation.",
  keywords: [
    "Oylen Group",
    "Conglomerate",
    "Real Estate",
    "Fintech",
    "Agritech",
    "Healthtech",
    "Smart Living",
    "Precision Farming",
    "Telemedicine",
  ],
  authors: [
    { name: "Philip Oyelegbin", url: "https://philip.oyelegbin.name.ng" },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Oylen Group | Scaling Innovation & Sustainable Growth",
    description:
      "Oylen Group is a leading global conglomerate driving technology-enabled advancements across Fintech, Real Estate, Agritech, and Healthtech.",
    url: process.env.NEXT_PUBLIC_HOST_URI,
    type: "website",
    locale: "en_US",
    images: "./opengraph-image.png",
    siteName: "Oylen Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oylen Group | Scaling Innovation & Sustainable Growth",
    description:
      "Oylen Group is a leading global conglomerate driving technology-enabled advancements across Fintech, Real Estate, Agritech, and Healthtech.",
    images: [`${process.env.NEXT_PUBLIC_HOST_URI}/opengraph-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "./apple-touch-icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "./apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "./apple-touch-icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-background text-on-background font-body pb-16 lg:pb-0">
        {children}
      </body>
    </html>
  );
}
