# lig4-frontend

Frontend do projeto LIG 4 — Connect 4 multiplayer.

## Stack

- **Vue 3** — `defineComponent` + SFC multi-arquivo (`.vue` src-only + `.ts` props+lógica)
- **Vite** — Build
- **Phaser 4** — Engine de jogo
- **Pinia** — Estado global
- **TypeScript 5.9** — `zero any`, `I` prefix
- **vue-i18n 11** — `pt-BR`/`en-US` com `$t` global
- **lucide-vue-next** — Ícones (`BaseIcon`)
- **SCSS** — RSCSS + tokens CSS Custom Properties (`data-theme`)
- **Storybook 10** — `@storybook/vue3-vite` + a11y
- **Vitest 5** — `happy-dom` + `playwright` (stories), `setupFiles` com `i18n`
- **ESLint / Stylelint** — RSCSS

## Documentação

| Documento | Conteúdo |
|---|---|
| [AGENTS.md](AGENTS.md) | Ponto de entrada para agentes de IA |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Arquitetura do sistema |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Como contribuir |
| [docs/adr/](docs/adr/) | Registros de decisões de arquitetura |
| [docs/prd/](docs/prd/) | Requisitos do produto |

## Como rodar

```sh
npm install
npm run dev
```

## Scripts

| Script | Descrição |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Build (lint + typecheck + vite) |
| `npm run preview` | Preview build |
| `npm run typecheck` | `vue-tsc --noEmit` |
| `npm run lint` / `lint:fix` | ESLint TS |
| `npm run lint:css` | Stylelint SCSS (RSCSS) |
| `npm run test` | Vitest `unit` (happy-dom, `pt-BR` forçado) |
| `npm run test:all` | Todos projetos (unit + storybook browser) |
| `npm run test:storybook` | Só stories (playwright chromium) |
| `npm run storybook` | Storybook `6006` (toolbar `locale`/`theme`) |
| `npm run build-storybook` | Build Storybook |
