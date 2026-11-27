import type { Unit } from "@/content/types";
import { week } from "./shared";

export const saoCristovao: Unit = {
  slug: "sao-cristovao",
  name: "São Cristóvão",
  city: "Dracena",
  address: {
    street: "Av. São Cristóvão, 56",
    district: "Metrópole",
    postalCode: "17910-262",
  },
  geo: { lat: -21.4796294, lng: -51.5217142 },
  whatsapp: "5518997894216",
  schedule: week({
    saturday: [{ open: "14:00", close: "17:00" }],
    sunday: [{ open: "09:00", close: "12:00" }],
  }),
  summary:
    "Dois andares de musculação atrás de uma fachada de vidro, aberta também aos domingos.",
  facade: {
    src: "/images/sao-cristovao/fachada.webp",
    alt: "Projeto da fachada de vidro da AcquaFit São Cristóvão, com dois andares",
    width: 680,
    height: 428,
    caption: "Imagem do projeto da fachada",
  },
  photos: [],
  maps: {
    link: "https://www.google.com/maps/place/Academia+AcquaFit+-+S%C3%A3o+Crist%C3%B3v%C3%A3o/@-21.4796294,-51.5217142,17z/data=!4m6!3m5!1s0x94913b01d0899643:0x3b7b6e32296a7bd6!8m2!3d-21.4796294!4d-51.5217142!16s%2Fg%2F11lygdgc93",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.7!2d-51.5217142!3d-21.4796294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94913b01d0899643%3A0x3b7b6e32296a7bd6!2sAcademia%20AcquaFit%20-%20S%C3%A3o%20Crist%C3%B3v%C3%A3o!5e0!3m2!1spt-BR!2sbr",
    streetView:
      "https://www.google.com/maps/embed?pb=!4v1795810000000!6m8!1m7!1sxhIdiWJF9mGJdVIhZkFSAQ!2m2!1d-21.4796358!2d-51.5217162!3f165!4f10!5f0.7820865974627469",
  },
  google: { rating: 5, count: 14 },
  apps: {
    totalpass: {
      url: "https://totalpass.com/br/academias/acquafit-academia-sao-cristovao/",
      plan: "TP 2",
    },
    wellhub: { url: "https://wellhub.com/pt-br/" },
  },
};
