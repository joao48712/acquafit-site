export const site = {
  name: "AcquaFit Academia",
  /** Troque quando houver domínio próprio. */
  url:
    process.env.VERCEL_PROJECT_PRODUCTION_URL !== undefined
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  description:
    "Musculação, funcional, hidroginástica e natação em Dracena e Tupi Paulista. Veja horários, unidades e fale pelo WhatsApp.",
  instagram: "https://www.instagram.com/acquafit_academia/",
  facebook: "https://www.facebook.com/acquafitdracenasp/",
};

export const modalities = [
  {
    name: "Musculação",
    text: "Treino de força com instrutores no salão para orientar a execução.",
    where: "Dracena e Tupi Paulista",
  },
  {
    name: "Funcional",
    text: "Movimentos que trabalham o corpo inteiro: força, equilíbrio e fôlego.",
    where: "Consulte a sua unidade",
  },
  {
    name: "Natação",
    text: "Treino na piscina para aprender a nadar ou ganhar condicionamento.",
    where: "Unidade Centro",
  },
  {
    name: "Hidroginástica",
    text: "Exercício dentro d'água, com baixo impacto nas articulações.",
    where: "Unidade Centro",
  },
];

export const apps = {
  totalpass: {
    name: "TotalPass",
    text: "Seu plano corporativo TotalPass vale na AcquaFit.",
  },
  wellhub: {
    name: "Wellhub",
    text: "Antigo Gympass. Faça o check-in pelo aplicativo e treine.",
  },
} as const;
