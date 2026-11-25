"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { getUiText, type UiTextKey } from "@/data/uiText";
import { useLocale } from "@/components/i18n/LocaleProvider";

type ButtonLinkVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  href: string;
  children?: ReactNode;
  label?: string;
  labelKey?: UiTextKey;
  variant?: ButtonLinkVariant;
  external?: boolean;
  className?: string;
};

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary:
    "border-[color:var(--accent)] bg-[var(--accent)] text-[var(--ink)] shadow-[0_8px_18px_-10px_rgba(0,0,0,0.9)] hover:-translate-y-0.5 hover:bg-[var(--accent-bright)] hover:border-[color:var(--accent-bright)]",
  secondary:
    "border-[color:var(--hairline-strong)] bg-transparent text-[var(--theme-text-primary)] hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[var(--accent-bright)]",
  ghost: "border-transparent bg-transparent text-[var(--theme-text-secondary)] hover:text-[var(--accent-bright)]"
};

export function ButtonLink({ href, children, label, labelKey, variant = "primary", external = false, className }: ButtonLinkProps) {
  const { locale } = useLocale();
  const content = children ?? (labelKey ? getUiText(labelKey, locale) : label);
  const buttonClassName = [
    "group/button inline-flex min-w-0 max-w-full items-center justify-center gap-2 rounded-[6px] border px-5 py-3 text-center text-[15px] font-medium leading-tight transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
    variantClasses[variant],
    className
  ]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a className={buttonClassName} href={href} rel="noopener noreferrer" target="_blank">
        {content}
        <svg aria-hidden="true" className="h-3 w-3 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" fill="none" viewBox="0 0 12 12">
          <path d="M3.5 8.5 8.5 3.5M4.5 3.5h4v4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </svg>
      </a>
    );
  }

  return (
    <Link className={buttonClassName} href={href}>
      {content}
    </Link>
  );
}
