import { focusAreas } from "@/data/focusAreas";
import type { FocusArea, FocusAreaId } from "@/types/artifact";

export function getAllFocusAreas(): FocusArea[] {
  return [...focusAreas].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getFocusAreaById(focusAreaId: FocusAreaId): FocusArea | undefined {
  return focusAreas.find((focusArea) => focusArea.id === focusAreaId);
}

export function getFocusAreaMap(): Map<FocusAreaId, FocusArea> {
  return new Map(focusAreas.map((focusArea) => [focusArea.id, focusArea]));
}
