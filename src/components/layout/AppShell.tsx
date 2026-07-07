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
      <div className="min-h-screen bg-[var(--theme-background)] text-[var(--theme-text-primary)]">
        <Header />
        <main className="min-w-0">{children}</main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
