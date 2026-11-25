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
    "relative inline-flex items-center gap-1 px-3 py-2 text-[15px] leading-tight transition-colors duration-300",
    "after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:bg-[var(--accent)] after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)]",
    active
      ? "text-[var(--accent-bright)] after:scale-x-100"
      : "text-[var(--theme-text-secondary)] after:scale-x-0 hover:text-[var(--theme-text-primary)] hover:after:scale-x-100",
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
