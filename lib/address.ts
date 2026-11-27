import type { Unit } from "@/content/types";

export function fullAddress({ address, city }: Unit) {
  return [address.street, address.district, `${city} - SP`].filter(Boolean).join(", ");
}
