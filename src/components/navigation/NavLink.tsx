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
    "text-sm transition-colors",
    active ? "text-[var(--theme-text-primary)]" : "text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)]",
    className
  ]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a className={linkClassName} href={href} rel="noreferrer" target="_blank">
        {label}
      </a>
    );
  }

  return (
    <Link className={linkClassName} href={href}>
      {label}
    </Link>
  );
}
