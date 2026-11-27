# Site da AcquaFit

Site informativo da academia AcquaFit, com unidades em Dracena (Centro e São Cristóvão) e em Tupi Paulista.

Feito com Next.js, TypeScript e Tailwind CSS. O conteúdo fica em arquivos na pasta `content/`, sem painel nem banco de dados.

**Vai editar o site? Leia primeiro o [CONTRIBUTING.md](CONTRIBUTING.md).**

## Rodar no computador

```bash
npm install
npm run dev
```

| Comando             | O que faz                                    |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Site local em http://localhost:3000          |
| `npm run format`    | Padroniza a formatação                       |
| `npm run lint`      | Procura erros comuns                         |
| `npm run typecheck` | Confere os tipos                             |
| `npm test`          | Testes (horários, links, dados das unidades) |
| `npm run build`     | Compila como na Vercel                       |

## Convidar quem vai editar

No GitHub: **Settings > Collaborators > Add people**. A pessoa aceita o convite por e-mail e segue o [CONTRIBUTING.md](CONTRIBUTING.md).

A `main` está protegida: só aceita Pull Request com a verificação **verificar** aprovada e o branch atualizado.

## Publicar na Vercel (primeira vez)

1. Entre em https://vercel.com com a conta do GitHub dona do repositório.
2. Clique em **Add New > Project** e importe `acquafit-site`.
3. Mantenha o preset **Next.js**. Não há variáveis de ambiente.
4. Clique em **Deploy**.

Depois disso, cada merge na `main` publica o site e cada PR ganha uma prévia.

Atenção:

- O plano gratuito (Hobby) da Vercel é para uso não comercial. Para o site oficial da academia, use o plano Pro.
- No Hobby, a Vercel pode bloquear a publicação de commits feitos por outras pessoas. Confira no primeiro PR de um colaborador.
- Com domínio próprio, atualize `url` em `content/site.ts`.

## Pendências para a academia confirmar

- [ ] Número do endereço no São Cristóvão: o site usa 56 (flow.page e Google); o TotalPass mostra 58.
- [ ] Domingo no São Cristóvão: o site usa 9h às 12h (flow.page); o TotalPass mostra fechado.
- [ ] TotalPass e Wellhub nas três unidades e o plano mínimo de cada uma.
- [ ] Autorização de uso das fotos, do logo e dos depoimentos.
- [ ] Logo oficial em arquivo vetorial (o atual é um redesenho provisório).
- [ ] Fotos internas em boa resolução (veja `public/images/FONTES.md`).
- [ ] O quadro do mapa do Google mostra a nota de cada unidade, inclusive a de Tupi Paulista. O site não controla esse quadro.
