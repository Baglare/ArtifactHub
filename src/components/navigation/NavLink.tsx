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
    "text-sm leading-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-accent-primary)]",
    active ? "text-[var(--theme-text-primary)]" : "text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)]",
    className
  ]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a aria-current={active ? "page" : undefined} className={linkClassName} href={href} rel="noopener noreferrer" target="_blank">
        {label}
      </a>
    );
  }

  return (
    <Link aria-current={active ? "page" : undefined} className={linkClassName} href={href}>
      {label}
    </Link>
  );
}
