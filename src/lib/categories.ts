import { categories } from "@/data/categories";
import type { Category, CategoryId } from "@/types/artifact";

export function getAllCategories(): Category[] {
  return [...categories];
}

export function getCategoryById(categoryId: CategoryId): Category | undefined {
  return categories.find((category) => category.id === categoryId);
}
