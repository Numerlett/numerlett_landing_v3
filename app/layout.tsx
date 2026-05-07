import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono-custom",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://numerlett.com"),
  title:
    "NumerLett | Technology & Marketing Services | Software Products India",
  description:
    "NumerLett offers world-class Technology Services, Digital Marketing Solutions, and proprietary Software Products including SEED Inventory Management System. Serving businesses globally from Bengaluru, India.",
  keywords: [
    "technology services",
    "marketing services",
    "software development",
    "digital marketing agency",
    "seo services",
    "web development",
    "ai solutions",
    "inventory management software",
    "seed inventory system",
    "it consulting",
    "cloud services",
    "data analytics",
    "brand strategy",
    "content marketing",
    "mobile app development",
    "marketing agency india",
    "tech company bengaluru",
  ],
  authors: [{ name: "NumerLett" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://numerlett.com/",
  },
  openGraph: {
    type: "website",
    siteName: "NumerLett",
    title: "NumerLett | Technology & Marketing Services | Software Products",
    description:
      "End-to-end Technology, Marketing, and Software solutions. From custom software development to AI-driven marketing - NumerLett delivers measurable results.",
    url: "https://numerlett.com/",
    images: [
      {
        url: "https://numerlett.com/og-image.jpg",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "NumerLett | Tech & Marketing Services",
    description:
      "Technology services, marketing solutions & software products. SEED - Smart Inventory Management System.",
    images: ["https://numerlett.com/twitter-card.jpg"],
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "12.9716;77.5946",
    ICBM: "12.9716, 77.5946",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      prefix="og: https://ogp.me/ns#"
      className={`${manrope.variable} ${outfit.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body
        className="numerlett min-h-full flex flex-col"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {children}
      </body>
    </html>
  );
}
