import rawData from "@/data/move-nest.json";
import type { MoveNestTemplateData, MoveNestSections } from "@/types/movenest.types";

const templateData = rawData as unknown as MoveNestTemplateData;

export function getMoveNestSections(): MoveNestSections {
  return templateData.categories.MoveNest.sections;
}

export function getMoveNestSection<K extends keyof MoveNestSections>(key: K): MoveNestSections[K] {
  return templateData.categories.MoveNest.sections[key];
}
