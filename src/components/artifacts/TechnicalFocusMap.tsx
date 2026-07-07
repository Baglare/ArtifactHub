import Link from "next/link";
import { getFocusAreaById } from "@/lib/focusAreas";
import type { Artifact, FocusArea, FocusAreaId } from "@/types/artifact";

type TechnicalFocusMapProps = {
  artifacts: Artifact[];
  focusAreaIds: FocusAreaId[];
};

type FocusAreaGroup = {
  focusArea: FocusArea;
  artifacts: Artifact[];
};

export function TechnicalFocusMap({ artifacts, focusAreaIds }: TechnicalFocusMapProps) {
  const groups: FocusAreaGroup[] = focusAreaIds
    .map((focusAreaId) => {
      const focusArea = getFocusAreaById(focusAreaId);
      if (!focusArea) {
        return undefined;
      }

      return {
        focusArea,
        artifacts: artifacts.filter((artifact) => artifact.focusAreaIds.includes(focusAreaId))
      };
    })
    .filter((group): group is FocusAreaGroup => Boolean(group));

  if (!groups.length) {
    return null;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {groups.map((group) => (
        <section className="border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-5" key={group.focusArea.id}>
          <h3 className="text-lg font-semibold text-[var(--theme-text-primary)]">{group.focusArea.label.tr}</h3>
          {group.focusArea.description ? (
            <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">{group.focusArea.description.tr}</p>
          ) : null}

          {group.artifacts.length ? (
            <ul className="mt-4 flex flex-wrap gap-3 text-sm text-[var(--theme-text-secondary)]">
              {group.artifacts.map((artifact) => (
                <li key={artifact.id}>
                  <Link className="underline underline-offset-4 hover:text-[var(--theme-text-primary)]" href={`/artifacts/${artifact.slug}`}>
                    {artifact.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}
