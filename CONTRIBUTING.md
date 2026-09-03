# CONTRIBUTING.md

Diretrizes para contribuir com o projeto LIG 4 (frontend).

## Antes de contribuir

1. Leia o [README.md](README.md) para entender o projeto.
2. Consulte [ARCHITECTURE.md](ARCHITECTURE.md) para conhecer a estrutura do sistema.
3. Verifique os [ADRs existentes](docs/adr/) — eles explicam as decisões já tomadas.

## Fluxo de contribuição

### 1. Issues

- Toda mudança deve partir de uma issue (bug, feature, dúvida, proposta de decisão).

### 2. Branches

- Crie branches a partir de `main`.
- Convenção: `feat/nome-curto`, `fix/nome-curto`, `docs/nome-curto`.

### 3. Commits

- Formato: `PRD-XXXX: descrição curta do que foi feito`
- Validação pelo hook `githooks/commit-msg`:
  ```sh
  git config core.hooksPath githooks
  ```

### 4. Pull Requests

- PRs devem referenciar a issue correspondente.
- Descreva **o quê** mudou e **por quê**.

## Convenções de código

### TypeScript
- Zero `any` — o build falha se encontrar `any`.
- Interfaces prefixadas com `I`.
- Tipos em `src/types/`, utils em `src/utils/`.

### Vue
- Composition API (`<script setup>`).
- SFC multi-arquivo: `.vue` + `.script.ts`.

### SCSS (RSCSS)
- Componentes: 2+ palavras (`.game-board`).
- Elementos: 1 palavra com `>` (`.game-board > .title`).
- Variantes: prefixo `-` (`.button.-active`).

## Scripts disponíveis

```sh
npm run dev          # Servidor de desenvolvimento
npm run build        # Build completo (lint + typecheck + vite)
npm run lint         # Lint de TypeScript
npm run lint:css     # Lint de SCSS
npm run typecheck    # Verificação de tipos
```
