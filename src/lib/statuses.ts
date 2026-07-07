import { statuses } from "@/data/statuses";
import type { Status, StatusId } from "@/types/artifact";

export function getAllStatuses(): Status[] {
  return [...statuses];
}

export function getStatusById(statusId: StatusId): Status | undefined {
  return statuses.find((status) => status.id === statusId);
}
