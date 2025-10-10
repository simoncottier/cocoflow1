import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
// Import removed - using custom font configuration
import cn from "classnames";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

// Custom font configuration moved to globals.css

export const metadata: Metadata = {
  title: "CocoFlow - Soins énergétiques à Lausanne et environs",
  description: "Retrouver l'équilibre entre corps et esprit. Soins énergétiques personnalisés pour rétablir l'harmonie intérieure, libérer les tensions et favoriser le mieux-être global.",
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/cocoflow-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/cocoflow-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/cocoflow-logo.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/cocoflow-logo.png"
          color="#071531"
        />
        <link rel="shortcut icon" href="/cocoflow-logo.png" />
        <meta name="msapplication-TileColor" content="#071531" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#071531" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="font-apple-system" style={{backgroundColor: '#071531'}}>
        <div className="min-h-screen">{children}</div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
