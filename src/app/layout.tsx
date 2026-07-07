import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { siteConfig } from "@/data/siteConfig";
import "@/styles/globals.css";

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
    type: "website"
  },
  twitter: {
    card: "summary",
    title: `Baglare’s ${siteConfig.title}`,
    description: siteConfig.description.tr
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
