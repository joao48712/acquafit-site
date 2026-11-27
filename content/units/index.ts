import type { Unit } from "@/content/types";
import { centro } from "./centro";
import { saoCristovao } from "./sao-cristovao";
import { tupiPaulista } from "./tupi-paulista";

/** A ordem aqui é a ordem em que aparecem no site. */
export const units: Unit[] = [centro, saoCristovao, tupiPaulista];

export function getUnit(slug: string) {
  return units.find((unit) => unit.slug === slug);
}
