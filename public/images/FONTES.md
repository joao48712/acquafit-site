# Origem das imagens

| Arquivo                      | Origem                                       | Observação                                           |
| ---------------------------- | -------------------------------------------- | ---------------------------------------------------- |
| `centro/fachada.webp`        | Foto fornecida pelo responsável do projeto   | Cortada na parte de baixo                            |
| `sao-cristovao/fachada.webp` | Imagem fornecida pelo responsável do projeto | Parece um render do projeto; o site avisa na legenda |
| `tupi-paulista/fachada.webp` | Foto fornecida pelo responsável do projeto   | Convertida de JPEG XL                                |

A academia precisa autorizar o uso de todas as imagens.

## Como adicionar fotos internas

1. Salve o arquivo em `public/images/<unidade>/` (WebP ou JPG, de preferência com 1600 px de largura ou mais).
2. Em `content/units/<unidade>.ts`, inclua em `photos`:

   ```ts
   { src: "/images/centro/salao.webp", alt: "Salão de musculação da unidade Centro", width: 1600, height: 1200 }
   ```

3. Anote a origem nesta tabela. A galeria aparece sozinha na página inicial e na da unidade.
