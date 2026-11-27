import { Apps } from "@/components/sections/Apps";
import { Faq } from "@/components/sections/Faq";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Modalities } from "@/components/sections/Modalities";
import { Reviews } from "@/components/sections/Reviews";
import { Units } from "@/components/sections/Units";
import { units } from "@/content/units";

export default function Home() {
  return (
    <>
      <Hero />
      <Modalities />
      <Units />
      <Gallery photos={units.flatMap((unit) => unit.photos)} />
      <Apps units={units} />
      <Reviews units={units} />
      <Faq />
    </>
  );
}
