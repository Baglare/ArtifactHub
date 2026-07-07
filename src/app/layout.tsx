import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description.tr
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.defaultLocale}>
      <body>
        <header className="border-b border-neutral-800">
          <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-4 px-6 py-4 text-sm text-neutral-300">
            <Link className="font-semibold text-neutral-100" href="/">
              {siteConfig.title}
            </Link>
            {siteConfig.navigation.map((item) =>
              item.external ? (
                <a key={item.href} href={item.href} rel="noreferrer" target="_blank">
                  {item.label.tr}
                </a>
              ) : (
                <Link key={item.href} href={item.href}>
                  {item.label.tr}
                </Link>
              )
            )}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
