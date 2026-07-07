import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { siteConfig } from "@/data/siteConfig";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: `Baglare’s ${siteConfig.title}`,
    template: `%s | Baglare’s ${siteConfig.title}`
  },
  description: siteConfig.description.tr,
  applicationName: siteConfig.title
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
