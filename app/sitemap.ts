import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { units } from "@/content/units";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url },
    ...units.map((unit) => ({ url: `${site.url}/unidades/${unit.slug}` })),
  ];
}
