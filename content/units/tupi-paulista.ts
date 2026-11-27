import type { Unit } from "@/content/types";
import { week } from "./shared";

export const tupiPaulista: Unit = {
  slug: "tupi-paulista",
  name: "Tupi Paulista",
  city: "Tupi Paulista",
  address: { street: "Av. Brasil, 820", district: "Centro", postalCode: "17930-000" },
  geo: { lat: -21.3888193, lng: -51.5783462 },
  whatsapp: "5518997342371",
  schedule: week({ saturday: [{ open: "08:00", close: "12:00" }] }),
  summary: "A AcquaFit no centro de Tupi Paulista, na Avenida Brasil.",
  facade: {
    src: "/images/tupi-paulista/fachada.webp",
    alt: "Fachada azul-marinho da AcquaFit Tupi Paulista com o logo acima da entrada",
    width: 810,
    height: 720,
    focus: "center top",
  },
  photos: [],
  maps: {
    link: "https://www.google.com/maps/place/Academia+AcquaFit+Tupi+Paulista/@-21.3888193,-51.5783462,17z/data=!4m6!3m5!1s0x949125e3f9f878db:0xe06f757f1d7f0197!8m2!3d-21.3888193!4d-51.5783462!16s%2Fg%2F11w1vj49d2",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.0!2d-51.5783462!3d-21.3888193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949125e3f9f878db%3A0xe06f757f1d7f0197!2sAcademia%20AcquaFit%20Tupi%20Paulista!5e0!3m2!1spt-BR!2sbr",
    streetView:
      "https://www.google.com/maps/embed?pb=!4v1795810000000!6m8!1m7!1smmsJOCufCaw5cbsZ8XeJFw!2m2!1d-21.3885927!2d-51.5787144!3f75!4f5!5f0.7820865974627469",
  },
  apps: {
    totalpass: { url: "https://totalpass.com/br/" },
    wellhub: { url: "https://wellhub.com/pt-br/" },
  },
};
