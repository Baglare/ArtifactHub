import type { LocalizedText } from "@/types/artifact";

type LimitationListProps = {
  limitations: LocalizedText[];
};

export function LimitationList({ limitations }: LimitationListProps) {
  if (!limitations.length) {
    return null;
  }

  return (
    <ul className="list-disc space-y-2 pl-5 text-[var(--theme-text-secondary)]">
      {limitations.map((limitation) => (
        <li key={limitation.tr}>{limitation.tr}</li>
      ))}
    </ul>
  );
}
