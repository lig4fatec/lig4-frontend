# ARCHITECTURE.md

Arquitetura do sistema LIG 4 (frontend).

## Visão geral

O LIG 4 é um jogo Connect 4 multiplayer com frontend em Vue 3 + Phaser 4 e backend em Quarkus.

## Stack tecnológica

| Tecnologia | Versão | Uso |
|---|---|---|
| Vue 3 | 3.5.x | UI framework (Composition API + `defineComponent`) |
| Vue Router | 4.x | Navegação SPA |
| Vite | 8.x | Build tool |
| Phaser 4 | 4.2.x | Engine de jogo |
| Pinia | 2.x | Estado global |
| TypeScript | 5.9 | Tipagem estática (`zero any`, `I` prefix) |
| vue-i18n | 11.x | Internacionalização `pt-BR`/`en-US` (`globalInjection: true`, `$t`) |
| lucide-vue-next | 1.x | Ícones SVG (`BaseIcon`) |
| SCSS | - | Estilização (RSCSS + CSS Custom Properties / tokens) |
| Storybook | 10.x | Documentação visual (`@storybook/vue3-vite`) |
| Vitest | 5.x | Testes unitários (`happy-dom`, `playwright` para stories) |
| ESLint | 10.x | Lint de código |
| Stylelint | - | Lint de SCSS (RSCSS) |

## Estrutura do código

```
src/
├── main.ts                          # Entry point (Pinia, Router, i18n)
├── App.vue                          # Root layout (ThemeProvider + RouterView)
├── test-setup.ts                    # Setup Vitest (i18n global)
│
├── router/                          # Vue Router
│   └── index.ts                     # Rotas lazy-loaded
│
├── locales/                         # i18n JSON
│   ├── pt-BR.json
│   ├── en-US.json
│   └── index.ts
│
├── lib/                             # Design system (dumb, sem negócio)
│   ├── i18n/                        # vue-i18n plugin (globalInjection:true)
│   ├── tokens/                      # CSS Custom Properties (_variables.scss)
│   ├── styles/                      # SCSS globais (reset, app-layout, etc.)
│   ├── icons/                       # lucide barrel (BaseIcon)
│   ├── composables/
│   │   ├── useTheme.ts              # data-theme + localStorage + prefers-color-scheme
│   │   ├── useLocale.ts             # pt-BR/en-US + localStorage + navigator.language
│   │   └── useBreakpoint.ts
│   ├── providers/
│   │   └── ThemeProvider.vue        # injeta data-theme
│   └── components/                  # SFC multi-arquivo: .vue (template) + .ts/.script.ts (props+lógica) + .scss + .stories.ts
│       ├── BaseButton/ BaseCard/ BaseInput/ BaseModal/ BaseAvatar/  # base (5)
│       ├── BaseBadge/ BaseTooltip/ BaseDivider/ BaseSpinner/ BaseIcon/ BaseChip/ BaseSkeleton/  # primitivos (7)
│       └── FormField/ ConfirmDialog/ GameCard/ ScoreDisplay/ PlayerInfo/  # composição (5)
│
├── shared/                          # Smart + serviços compartilhados
│   ├── components/Navbar/           # Navegação (usa useNavigation traduzido)
│   ├── composables/useNavigation.ts # navItems via i18n.global.t (reativo)
│   ├── composables/useWebSocket.ts
│   └── services/WebSocketService.ts
│
├── pages/                           # Views de rota (usam $t global)
│   ├── Home/ (Home.script.ts com gameModes computed via i18n)
│   ├── Game/ (status via $t)
│   ├── Settings/ (useTheme + useLocale + seletor idioma)
│   ├── Profile/ (level via $t)
│   └── Leaderboard/ (rank/wins via $t)
│
├── game/                            # Phaser 4 (Facade, Strategy, Command, DI)
├── stores/gameStore.ts
├── services/ApiService.ts, GameService.ts
│
├── types/                           # I prefix, zero any
│   ├── i18n.ts (IMessageSchema, ILocale)
│   ├── game.ts, events.ts, api.ts, navigation.ts, etc.
│
└── utils/constants.ts               # rotas, eventos, LOCALE_KEY, THEME_KEY
```

## Camadas de arquitetura

### `lib/` — Design System
Componentes UI genéricos, reutilizáveis, **sem lógica de negócio**. Prefix `Base` para base, sem prefix para composição. Tokens via CSS Custom Properties (`data-theme` light/dark + override dark).
- Nunca importa de `pages/`, `shared/`, `stores/`, `game/`
- Não importa `vue-i18n` diretamente; usa `$t` global (`globalInjection:true`) no template e `i18n.global.t` em `.ts` (reativo via `computed`)
- Props e lógica em `.ts/.script.ts` via `defineComponent` + `baseXProps` + `useX`; `.vue` contém apenas `<script lang="ts" src="./X.ts">` + `<template>`

### `shared/` — Componentes smart + serviços
Componentes com lógica de negócio usados em múltiplas páginas.
- Pode importar de `lib/`, `stores/`, `composables/`, `types/`, `lib/i18n`
- Inclui `useNavigation` (labels via `i18n.global.t`), `useWebSocket`, `WebSocketService`

### `pages/` — Views de rota
Cada página é uma rota no Vue Router, usa `$t` global (sem `useI18n` local).
- Importa de `lib/`, `shared/`, `stores/`, `composables/`, `lib/composables/useLocale`
- SFC multi-arquivo: `.vue` + `.script.ts` (ex: `Home.script.ts` com `gameModes` computed traduzido)

### `game/` — Lógica do jogo (Phaser)
Integração com Phaser 4. Não muda com a nova arquitetura.

## Regra de dependências

```
pages/  →  shared/*, lib/*, stores/*, composables/*, lib/i18n, lib/composables/useLocale
shared/ →  lib/*, stores/*, composables/*, types/*, lib/i18n
lib/    →  (apenas types, tokens, i18n via $t global) — nunca pages/shared/stores/game
game/   →  stores/*, types/*, utils/*
locales/ → (JSON puro)
```

**`lib/` nunca importa de `pages/`, `shared/`, `stores/`, `game/`.**

## Padrões de design

- **Facade** — `GameFacade` abstrai comunicação Vue ↔ Phaser
- **Strategy** — `IGameStrategy` para diferentes comportamentos de personagem
- **Command** — `ICommand` + `CommandHistory` para undo/redo
- **DI Container** — `GameContainer` com lazy initialization

## Convenções

### Vue
- Composition API + `defineComponent` (não `<script setup>` inline)
- SFC multi-arquivo: `.vue` (apenas `<script lang="ts" src="./X.ts">` + `<template>`) + `.ts/.script.ts` ( `baseXProps` + `useX` + `defineComponent({ props, emits, setup })` ) + `.scss` + `.stories.ts` — props e lógica sempre no `.ts`
- i18n: `vue-i18n` com `globalInjection:true`, uso em template via `$t('ns.key')` e em `.ts` via `i18n.global.t` dentro de `computed` (reativo à troca de `locale`)
- Componentes base prefixados com `Base` (5 base + 7 primitivos + 5 composição = 17 em `lib/components`)
- Estilos em SCSS separados (RSCSS), tokens importados via `lib/tokens/_variables.scss`

### TypeScript
- Zero `any` (ESLint `no-explicit-any`)
- Interfaces `I` prefix (`IMessageSchema`, `IBaseButtonProps`, `ILocale`)
- Constantes semânticas em `utils/constants.ts` + `THEME_KEY`/`LOCALE_KEY`
- Sem strings mágicas em `.ts` — todas via `$t`/`locales/*.json`

### SCSS (RSCSS) + Tokens
- Tokens semânticos como CSS Custom Properties em `lib/tokens/_variables.scss` (`--color-primary`, `--spacing-*`, `--radius-*`), override em `[data-theme="dark"]`
- RSCSS: Componentes 2+ palavras (`.game-board`), Elementos `>` (`.game-board > .title`), Variantes `-` (`.button.-active`), Helpers `_` (`._hidden`)
- Stylelint com `stylelint-rscss`

### i18n
- Locales `src/locales/pt-BR.json` / `en-US.json` espelhados (namespaces `common`, `nav`, `home`, `game`, `settings`, `profile`, `leaderboard`, `components`)
- Plugin `src/lib/i18n/index.ts` (`pt-BR` padrão, `fallback en-US`, `getInitialLocale()` via `localStorage` + `navigator.language`)
- Composable `useLocale.ts` (`locale` computed, `setLocale`, `toggleLocale`, `availableLocales`, `lang` attr)
- `src/test-setup.ts` injeta `i18n` global e força `pt-BR` nos testes

### Storybook
- `@storybook/vue3-vite` com `addon-a11y`, `addon-docs`; stories colocalizadas `.stories.ts`; decorator global com `ThemeProvider` + `i18n` e toolbar `locale` (`pt-BR`/`en-US`) em `.storybook/preview.ts`

## Rotas

| Rota | Página | Descrição |
|---|---|---|
| `/` | Home | Lobby — seleção de modo |
| `/game/:id?` | Game | Tela do jogo Connect 4 |
| `/settings` | Settings | Configurações |
| `/profile` | Profile | Perfil do jogador |
| `/leaderboard` | Leaderboard | Rankings |

## Integração com o backend

O `ApiService` se comunica com o backend Quarkus via REST API.
O `WebSocketService` e `useWebSocket` suportam comunicação em tempo real.

## Segurança

- [a definir]

## Observabilidade

- [a definir]
