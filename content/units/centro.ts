import type { Unit } from "@/content/types";
import { week } from "./shared";

export const centro: Unit = {
  slug: "centro",
  name: "Centro",
  city: "Dracena",
  address: {
    street: "R. Messias Ferreira da Palma, 65",
    district: "Centro",
    postalCode: "17900-000",
  },
  geo: { lat: -21.4881106, lng: -51.5291308 },
  whatsapp: "5518996949005",
  schedule: week({ saturday: [{ open: "08:00", close: "12:00" }] }),
  summary: "Musculação, treino funcional e piscina para natação e hidroginástica.",
  facade: {
    src: "/images/centro/fachada.webp",
    alt: "Fachada da AcquaFit Centro à noite, com painéis de treino e o número 65",
    width: 1080,
    height: 610,
  },
  photos: [],
  maps: {
    link: "https://www.google.com/maps/place/Academia+AcquaFit/@-21.4881106,-51.5291308,17z/data=!4m6!3m5!1s0x94913b405b1b7417:0x1275b79fc0d2e0cb!8m2!3d-21.4881106!4d-51.5291308!16s%2Fg%2F11gjwxhwl4",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.500413507436!2d-51.5291308!3d-21.4881106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94913b405b1b7417%3A0x1275b79fc0d2e0cb!2sAcademia%20AcquaFit!5e0!3m2!1spt-BR!2sbr",
    streetView:
      "https://www.google.com/maps/embed?pb=!4v1795810000000!6m8!1m7!1s4GSgDwiJRoJGPlrQpFosbw!2m2!1d-21.487917!2d-51.5291773!3f185!4f8!5f0.7820865974627469",
  },
  google: { rating: 4.7, count: 96 },
  apps: {
    totalpass: { url: "https://totalpass.com/br/academias/acqua-fit/", plan: "TP 2" },
    wellhub: {
      url: "https://wellhub.com/pt-br/search/partners/acquafit-metropolis-dracena/",
      plan: "Silver",
      rating: { value: 4.94, count: 48 },
    },
  },
};
