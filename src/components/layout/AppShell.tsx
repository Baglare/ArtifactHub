import type { ReactNode } from "react";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <LocaleProvider>
      <div aria-hidden="true" className="ambient">
        <div className="ambient__orb ambient__orb--a" />
        <div className="ambient__orb ambient__orb--b" />
        <div className="ambient__orb ambient__orb--c" />
        <div className="ambient__grid" />
        <div className="ambient__grain" />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col text-[var(--theme-text-primary)]">
        <Header />
        <main className="min-w-0 flex-1">{children}</main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
