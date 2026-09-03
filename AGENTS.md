# AGENTS.md

Ponto de entrada para agentes de IA no repositório lig4-frontend.

## Mapa da documentação

| Documento | Caminho | Descrição |
|---|---|---|
| README.md | `./README.md` | Visão geral do projeto |
| ARCHITECTURE.md | `./ARCHITECTURE.md` | Arquitetura e estrutura do código |
| CONTRIBUTING.md | `./CONTRIBUTING.md` | Fluxo de contribuição |
| ADRs | `./docs/adr/` | Decisões de arquitetura |
| PRDs | `./docs/prd/` | Requisitos do produto |

## Regras para agentes de IA

1. **Leia AGENTS.md primeiro** — este arquivo é o ponto de entrada obrigatório.
2. **Respeite as convenções** — TypeScript (zero `any`, interfaces com `I`), Vue (Composition API, SFC multi-arquivo), SCSS (RSCSS).
3. **Não altere docs sem pedido** — ADRs e PRDs são registados pela equipe.
4. **Valide antes de commitar** — rode `npm run build` para garantir lint + typecheck.
5. **Commits rastreados** — toda mensagem deve seguir o formato `PRD-XXXX: descrição`.

## Stack

- Vue 3 (Composition API + SFC multi-arquivo)
- Vite
- Phaser 4
- Pinia
- TypeScript 5.9
- SCSS (RSCSS)
- ESLint + Stylelint

## Comandos úteis

```sh
npm run dev          # Desenvolvimento
npm run build        # Build completo
npm run lint         # Lint TS
npm run lint:css     # Lint SCSS
npm run typecheck    # Typecheck
```
