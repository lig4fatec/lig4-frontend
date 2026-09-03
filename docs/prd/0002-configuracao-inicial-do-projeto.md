# PRD-0002. Configuração inicial do projeto

- **Data:** 2026-09-03
- **Estado:** Implementado

## Objetivo

Configurar o projeto com a stack definida no ADR-0003.

## Requisitos

- Vite como build tool
- Vue 3 com Composition API
- Phaser 4 como engine de jogo
- Pinia para estado global
- TypeScript com strict mode
- ESLint com regra `no-explicit-any`
- Stylelint para SCSS

## Critérios de aceite

- `npm run dev` inicia o servidor
- `npm run build` executa com sucesso
- `npm run lint` passa sem erros
- Zero `any` no código
