import type { Metadata, Viewport } from "next";
import { Alegreya_Sans, JetBrains_Mono, Marcellus } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import { siteConfig } from "@/data/siteConfig";
import { absoluteUrl, siteUrl } from "@/lib/site";
import "@/styles/globals.css";

const sans = Alegreya_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sans"
});

const display = Marcellus({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
  variable: "--font-display"
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-mono"
});

const socialPreviewImage = absoluteUrl("/images/artifacthub-og.png");

export const viewport: Viewport = {
  themeColor: "#0b0e13",
  colorScheme: "dark"
};

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: `Baglare’s ${siteConfig.title}`,
    template: `%s | Baglare’s ${siteConfig.title}`
  },
  description: siteConfig.description.tr,
  applicationName: siteConfig.title,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `Baglare’s ${siteConfig.title}`,
    description: siteConfig.description.tr,
    url: "/",
    siteName: siteConfig.title,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: `Baglare’s ${siteConfig.title}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `Baglare’s ${siteConfig.title}`,
    description: siteConfig.description.tr,
    images: [socialPreviewImage]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${sans.variable} ${display.variable} ${mono.variable}`} lang={siteConfig.defaultLocale}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
