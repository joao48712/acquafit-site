# Como contribuir sem gerar conflito

## Regras

1. **Ninguém envia direto para a `main`.** Toda mudança entra por Pull Request (PR).
2. **Um branch por tarefa**, curto: horas ou poucos dias.
3. **PR pequeno.** Uma seção, uma unidade ou um assunto por vez.
4. **Avise antes de começar:** abra uma issue (ou comente nela) dizendo que vai fazer.

## Preparar o computador (uma vez)

Instale o [Git](https://git-scm.com) e o [Node.js 24](https://nodejs.org). Aceite o convite de colaborador enviado pelo GitHub e rode:

```bash
git clone https://github.com/joao48712/acquafit-site.git
cd acquafit-site
npm install
npm run dev
```

O site abre em http://localhost:3000.

## Fazer uma mudança

Comece sempre pela `main` atualizada:

```bash
git switch main
git pull
git switch -c conteudo/horario-tupi
```

Prefixos de branch: `feat/` (novidade), `fix/` (correção), `conteudo/` (textos, fotos, dados).

Depois de editar:

```bash
npm run format
npm run lint
npm test
npm run build
git add -A
git commit -m "conteudo: atualiza horário de Tupi Paulista"
git push -u origin HEAD
```

Abra o PR no GitHub. Quando a verificação **verificar** ficar verde, use **Squash and merge**. O branch é apagado automaticamente.

## Se o GitHub disser que o branch está desatualizado

```bash
git switch main
git pull
git switch -
git merge main
```

Sem conflito: `git push`. Com conflito:

1. `git status` mostra os arquivos em conflito.
2. Em cada um, procure `<<<<<<<`, `=======` e `>>>>>>>`. Deixe o texto correto (às vezes os dois lados) e apague os marcadores.
3. `npm run format`, `npm test` e `npm run build`.
4. `git add -A`, `git commit` e `git push`.

Na dúvida, rode `git merge --abort` e fale com quem alterou o mesmo arquivo. **Nunca** use `git push --force`.

Conflito no `package-lock.json`: não edite à mão. Rode `git checkout --theirs package-lock.json` e depois `npm install`.

## Onde mexer

Cada assunto fica em um arquivo próprio, para que duas pessoas raramente editem o mesmo.

| Quero mudar                                                     | Arquivo                                                                  |
| --------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Endereço, telefone, horário, mapa, nota ou fotos de uma unidade | `content/units/<unidade>.ts`                                             |
| Depoimentos                                                     | `content/reviews.ts`                                                     |
| Perguntas frequentes                                            | `content/faq.ts`                                                         |
| Modalidades, redes sociais, TotalPass e Wellhub                 | `content/site.ts`                                                        |
| Uma seção da página                                             | `components/sections/<seção>.tsx`                                        |
| Arquivos de imagem                                              | `public/images/<unidade>/` (anote a origem em `public/images/FONTES.md`) |
| Cores e tipografia                                              | `app/globals.css` (avise a equipe antes)                                 |

Instalar ou atualizar pacotes (`package.json`) e mudar cores globais: faça em um PR separado.

## Cuidados com o conteúdo

- Depoimento só entra se for real, copiado palavra por palavra, com a fonte.
- Não publique preço, nota ou serviço que a academia não confirmou.
- O repositório é público: nunca envie senhas, chaves ou dados de alunos.
