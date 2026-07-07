import { TechTag } from "@/components/ui/TechTag";

type TechStackListProps = {
  items: string[];
  limit?: number;
  variant?: "default" | "compact";
};

export function TechStackList({ items, limit, variant = "default" }: TechStackListProps) {
  if (!items.length) {
    return null;
  }

  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;
  const extraCount = typeof limit === "number" ? Math.max(items.length - limit, 0) : 0;

  return (
    <ul className="flex min-w-0 flex-wrap gap-2">
      {visibleItems.map((item) => (
        <li key={item}>
          <TechTag label={item} variant={variant} />
        </li>
      ))}
      {extraCount > 0 ? (
        <li>
          <TechTag label={`+${extraCount}`} variant={variant} />
        </li>
      ) : null}
    </ul>
  );
}
