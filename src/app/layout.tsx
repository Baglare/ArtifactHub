import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { siteConfig } from "@/data/siteConfig";
import "@/styles/globals.css";

const socialPreviewImage = "https://artifact-hub-xi.vercel.app/images/artifacthub-og.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://artifact-hub-xi.vercel.app/"),
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
    <html lang={siteConfig.defaultLocale}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
