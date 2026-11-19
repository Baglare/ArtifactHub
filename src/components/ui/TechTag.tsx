type TechTagProps = {
  label: string;
  variant?: "default" | "compact";
};

export function TechTag({ label, variant = "default" }: TechTagProps) {
  return (
    <span
      className={`chip ${variant === "compact" ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs"}`}
    >
      {label}
    </span>
  );
}
