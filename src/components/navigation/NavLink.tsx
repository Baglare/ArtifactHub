import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
  external?: boolean;
  active?: boolean;
  className?: string;
};

export function NavLink({ href, label, external, active = false, className }: NavLinkProps) {
  const linkClassName = [
    "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm leading-tight transition-all duration-300",
    active
      ? "bg-white/[0.08] text-[var(--theme-text-primary)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
      : "text-[var(--theme-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--theme-text-primary)]",
    className
  ]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a className={linkClassName} href={href} rel="noopener noreferrer" target="_blank">
        {label}
        <svg aria-hidden="true" className="h-3 w-3 opacity-60" fill="none" viewBox="0 0 12 12">
          <path d="M3.5 8.5 8.5 3.5M4.5 3.5h4v4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
        </svg>
      </a>
    );
  }

  return (
    <Link aria-current={active ? "page" : undefined} className={linkClassName} href={href}>
      {label}
    </Link>
  );
}
