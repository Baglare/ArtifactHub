type TechTagProps = {
  label: string;
  variant?: "default" | "compact";
};

export function TechTag({ label, variant = "default" }: TechTagProps) {
  return (
    <span
      className={`inline-flex max-w-full items-center border border-[color:var(--theme-border)] bg-[var(--theme-surface)] text-[var(--theme-text-secondary)] ${
        variant === "compact" ? "px-2 py-0.5 text-xs" : "px-2 py-1 text-sm"
      }`}
    >
      {label}
    </span>
  );
}
