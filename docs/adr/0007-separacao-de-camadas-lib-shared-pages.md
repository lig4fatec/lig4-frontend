# 0007. Separação de camadas: lib/, shared/, pages/

- **Data:** 2026-09-06
- **Estado:** Aceita

## Contexto

O projeto estava como uma single-view app com tudo em `App.vue`. Não havia separação entre componentes genéricos e componentes com regra de negócio, nem sistema de rotas.

## Decisão

Adotar separação em 3 camadas:

- **`lib/`** — Design system: componentes UI genéricos, dumb, prefixados com `Base` (BaseButton, BaseModal, BaseInput, BaseCard, BaseAvatar). Nunca importa de `pages/`, `shared/`, `stores/` ou `game/`.
- **`shared/`** — Componentes smart com lógica de negócio compartilhada (Navbar, ScoreBoard, etc.), composables e serviços. Pode importar de `lib/`.
- **`pages/`** — Views de rota, cada uma对应 uma rota no Vue Router.

## Consequências

- **Positivas:** reutilização de componentes, separação clara de responsabilidades, testabilidade.
- **Negativas:** mais pastas e arquivos para gerenciar.
