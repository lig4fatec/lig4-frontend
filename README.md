# lig4-frontend

Frontend do projeto LIG 4 — Jogo da Velha (Connect 4) multiplayer.

## Stack

- **Vue 3** — Composition API + SFC multi-arquivo (`.vue` + `.script.ts` + `.styles.scss`)
- **Vite** — Build tool
- **Phaser 4** — Engine de jogo
- **Pinia** — Gerenciamento de estado global
- **TypeScript** — Tipagem estática
- **SCSS** — Estilização com padrão RSCSS
- **ESLint** — Lint de código
- **Stylelint** — Lint de estilos

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
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção (lint + typecheck + vite build) |
| `npm run preview` | Preview do build |
| `npm run typecheck` | Verificação de tipos |
| `npm run lint` | Lint de TypeScript |
| `npm run lint:fix` | Lint com correção automática |
| `npm run lint:css` | Lint de SCSS |
