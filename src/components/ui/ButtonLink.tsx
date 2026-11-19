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
    "border-transparent bg-[linear-gradient(135deg,#fff,color-mix(in_srgb,var(--theme-accent-primary)_55%,#fff))] text-[#0b0b12] shadow-[0_10px_30px_-12px_color-mix(in_srgb,var(--theme-accent-primary)_70%,transparent)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-14px_color-mix(in_srgb,var(--theme-accent-primary)_85%,transparent)]",
  secondary:
    "border-[color:var(--hairline-strong)] bg-white/[0.04] text-[var(--theme-text-primary)] backdrop-blur hover:-translate-y-0.5 hover:border-[color:color-mix(in_srgb,var(--theme-accent-primary)_45%,transparent)] hover:bg-white/[0.07]",
  ghost:
    "border-transparent bg-transparent text-[var(--theme-text-secondary)] hover:bg-white/[0.05] hover:text-[var(--theme-text-primary)]"
};

export function ButtonLink({
  href,
  children,
  label,
  labelKey,
  variant = "primary",
  external = false,
  className
}: ButtonLinkProps) {
  const { locale } = useLocale();
  const content = children ?? (labelKey ? getUiText(labelKey, locale) : label);
  const buttonClassName = [
    "group/button inline-flex min-w-0 max-w-full items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-center text-sm font-medium leading-tight transition-all duration-300 ease-out",
    variantClasses[variant],
    className
  ]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a className={buttonClassName} href={href} rel="noopener noreferrer" target="_blank">
        {content}
        <span aria-hidden="true" className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5">
          ↗
        </span>
      </a>
    );
  }

  return (
    <Link className={buttonClassName} href={href}>
      {content}
    </Link>
  );
}
