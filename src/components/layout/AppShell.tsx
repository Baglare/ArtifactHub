import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[var(--theme-background)] text-[var(--theme-text-primary)]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
