import type { Review } from "./types";

/** Data em que notas e depoimentos foram copiados. Atualize junto. */
export const reviewsCheckedAt = "27/11/2026";

/** Só depoimentos reais, palavra por palavra. */
export const reviews: Review[] = [
  {
    unit: "centro",
    author: "Mariana A.",
    stars: 5,
    source: "Google",
    text: "Treino na AcquaFit desde que abriu e gosto muito! A academia é super climatizada, sempre limpa e conta com instrutores atenciosos, que nos orientam durante os exercícios. Além disso, os horários de funcionamento se adequam muito bem à minha rotina. Recomendo demais! 💪",
  },
  {
    unit: "sao-cristovao",
    author: "Helder C.",
    stars: 5,
    source: "Google",
    text: "Os instrutores são educados e preparados. Os equipamentos e instalações estão atualizados.",
  },
  {
    unit: "centro",
    author: "Joao",
    stars: 5,
    source: "Google",
    text: "A academia é nova em folha, equipamentos (de qualidade)e estrutura toda nova e pensada. Sistema de ar condicionado, som e piscina são muito bons, e o atendimento tanto da recepção quanto dos professores é ótimo, qualquer dúvida, treino ou necessidade que se tenha eles estão ali para ajudar ou sugerir o melhor possível. Recomendo mesmo!",
  },
  {
    unit: "sao-cristovao",
    author: "Leonice L.",
    stars: 5,
    source: "Google",
    text: "Adoro! Lugar amplo, limpo. Gosto!",
  },
  {
    unit: "sao-cristovao",
    author: "Mariana A.",
    stars: 5,
    source: "Google",
    text: "Excelente academia, tudo muito limpo, climatizada! Super recomendo",
  },
  {
    unit: "sao-cristovao",
    author: "Lilian L.",
    stars: 5,
    source: "Google",
    text: "Perfeita, amooo essa academia",
  },
];
