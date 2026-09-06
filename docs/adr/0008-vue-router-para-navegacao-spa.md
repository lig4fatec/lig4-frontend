# 0008. Vue Router para navegação SPA

- **Data:** 2026-09-06
- **Estado:** Aceita

## Contexto

O projeto não tinha sistema de rotas. A aplicação era uma single-view com controle de visibilidade via estado.

## Decisão

Adotar **Vue Router 4** para navegação SPA:

- Rotas lazy-loaded via `() => import()`
- Rotas definidas em `src/router/index.ts`
- Constantes de rota em `src/utils/constants.ts`

| Rota | Página |
|---|---|
| `/` | Home |
| `/game/:id?` | Game |
| `/settings` | Settings |
| `/profile` | Profile |
| `/leaderboard` | Leaderboard |

## Consequências

- **Positivas:** navegação nativa do browser, URLs limpas, code splitting automático.
- **Negativas:** dependência adicional (vue-router@4 para compatibilidade com pinia 2.x).
