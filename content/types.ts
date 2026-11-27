/** 0 = domingo, 1 = segunda ... 6 = sábado */
export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/** Horários no formato "HH:MM", no fuso de São Paulo. */
export type Period = { open: string; close: string };

/** Dia sem períodos = fechado. */
export type WeekSchedule = Record<Weekday, Period[]>;

export type UnitSlug = "centro" | "sao-cristovao" | "tupi-paulista";

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Aparece abaixo da imagem quando preenchida. */
  caption?: string;
};

export type Unit = {
  slug: UnitSlug;
  name: string;
  city: string;
  address: { street: string; district?: string; postalCode?: string };
  geo: { lat: number; lng: number };
  /** Somente números, com DDI 55 e DDD. */
  whatsapp: string;
  schedule: WeekSchedule;
  /** Frase curta sobre a unidade. */
  summary: string;
  facade: Photo;
  /** Fotos internas. A galeria aparece quando houver pelo menos uma. */
  photos: Photo[];
  maps: {
    /** Link "abrir no Google Maps". */
    link: string;
    /** URL do iframe do mapa (Google Maps > Compartilhar > Incorporar um mapa). */
    embed: string;
    /** URL do iframe do Street View. */
    streetView: string;
  };
  /** Nota do Google. Omita para não exibir. */
  google?: { rating: number; count: number };
  apps: {
    totalpass: { url: string; plan?: string };
    wellhub: { url: string; plan?: string; rating?: { value: number; count: number } };
  };
};

export type Review = {
  unit: UnitSlug;
  /** Primeiro nome e inicial do sobrenome. */
  author: string;
  stars: 1 | 2 | 3 | 4 | 5;
  /** Texto copiado palavra por palavra da fonte. */
  text: string;
  source: "Google";
};
