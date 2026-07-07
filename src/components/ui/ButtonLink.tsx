import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  href: string;
  children?: ReactNode;
  label?: string;
  variant?: ButtonLinkVariant;
  external?: boolean;
  className?: string;
};

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary:
    "border-[color:var(--theme-accent-primary)] bg-[var(--theme-accent-primary)] text-[var(--theme-background)] hover:bg-[var(--theme-accent-secondary)]",
  secondary:
    "border-[color:var(--theme-border)] bg-[var(--theme-surface-raised)] text-[var(--theme-text-primary)] hover:border-[color:var(--theme-accent-primary)]",
  ghost:
    "border-transparent bg-transparent text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)]"
};

export function ButtonLink({
  href,
  children,
  label,
  variant = "primary",
  external = false,
  className
}: ButtonLinkProps) {
  const content = children ?? label;
  const buttonClassName = [
    "inline-flex min-w-0 max-w-full items-center justify-center border px-3 py-2 text-center text-sm font-medium leading-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent-primary)]",
    variantClasses[variant],
    className
  ]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a className={buttonClassName} href={href} rel="noopener noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return (
    <Link className={buttonClassName} href={href}>
      {content}
    </Link>
  );
}
