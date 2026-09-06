# ARCHITECTURE.md

Arquitetura do sistema LIG 4 (frontend).

## Visão geral

O LIG 4 é um jogo Connect 4 multiplayer com frontend em Vue 3 + Phaser 4 e backend em Quarkus.

## Stack tecnológica

| Tecnologia | Versão | Uso |
|---|---|---|
| Vue 3 | 3.5.x | UI framework (Composition API) |
| Vue Router | 4.x | Navegação SPA |
| Vite | 8.x | Build tool |
| Phaser 4 | 4.2.x | Engine de jogo |
| Pinia | 2.x | Estado global |
| TypeScript | 5.9 | Tipagem estática |
| SCSS | - | Estilização (RSCSS) |
| ESLint | 10.x | Lint de código |
| Stylelint | - | Lint de SCSS |

## Estrutura do código

```
src/
├── main.ts                          # Entry point
├── App.vue                          # Root layout (router-view)
│
├── router/                          # Vue Router
│   └── index.ts                     # Rotas da aplicação
│
├── pages/                           # Views de rota
│   ├── Home/                        # Lobby / tela inicial
│   ├── Game/                        # Tela do jogo
│   ├── Settings/                    # Configurações
│   ├── Profile/                     # Perfil do jogador
│   └── Leaderboard/                 # Placar / rankings
│
├── lib/                             # Design system (componentes dumb)
│   └── components/
│       ├── BaseButton/              # Botão genérico
│       ├── BaseModal/               # Modal/dialog
│       ├── BaseInput/               # Input de texto
│       ├── BaseCard/                # Card container
│       └── BaseAvatar/              # Avatar do jogador
│
├── shared/                          # Componentes smart + serviços compartilhados
│   ├── components/
│   │   └── Navbar/                  # Navegação entre páginas
│   ├── composables/
│   │   ├── useNavigation.ts         # Itens de navegação
│   │   └── useWebSocket.ts          # Composable WebSocket
│   └── services/
│       └── WebSocketService.ts      # Cliente WebSocket singleton
│
├── game/                            # Lógica do jogo (Phaser)
│   ├── EventBus.ts                  # Event bus tipado
│   ├── facade/                      # Padrão Facade (Vue ↔ Phaser)
│   ├── scenes/                      # Cenas Phaser
│   ├── strategies/                  # Padrão Strategy
│   ├── commands/                    # Padrão Command
│   ├── container/                   # DI Container
│   └── models/                      # Modelos de domínio
│
├── stores/                          # Pinia stores
│   └── gameStore.ts                 # Estado global do jogo
│
├── services/                        # Serviços de negócio
│   ├── GameService.ts               # Lógica de negócio pura
│   └── ApiService.ts                # Comunicação com backend
│

├── types/                           # Interfaces e tipos
│   ├── game.ts                      # IPiece, IGameContext, IGameState
│   ├── events.ts                    # IEventMap, IEventHandler
│   ├── api.ts                       # IApiResponse, IGameStateResponse
│   ├── character.ts                 # ICharacter
│   ├── composables.ts               # IUseGameReturn
│   └── navigation.ts               # INavItem, IGameMode, IPlayer, IScoreEntry
│
├── utils/                           # Funções utilitárias
│   ├── game.ts                      # createGameConfig(), constantes do jogo
│   ├── character.ts                 # createCharacter()
│   └── constants.ts                 # Constantes semânticas (rotas, eventos, etc.)
│
└── styles/                          # Estilos SCSS (RSCSS)
    ├── base/                        # Variáveis, reset
    ├── lib/                         # Estilos dos componentes base
    ├── shared/                      # Estilos dos componentes compartilhados
    ├── components/                  # Estilos por componente
    └── helpers/                     # Classes utilitárias
```

## Camadas de arquitetura

### `lib/` — Design System
Componentes UI genéricos, reutilizáveis, **sem lógica de negócio**. Prefixed com `Base`.
- Nunca importa de `pages/`, `shared/`, `stores/`, `game/`
- Apenas recebe props e emite eventos

### `shared/` — Componentes smart + serviços
Componentes com lógica de negócio usados em múltiplas páginas.
- Pode importar de `lib/`, `stores/`, `composables/`, `types/`
- Inclui composables compartilhados e serviços (WebSocket)

### `pages/` — Views de rota
Cada página é uma rota no Vue Router.
- Importa de `lib/`, `shared/`, `stores/`, `composables/`
- Segue padrão SFC multi-arquivo

### `game/` — Lógica do jogo (Phaser)
Integração com Phaser 4. Não muda com a nova arquitetura.

## Regra de dependências

```
pages/  →  shared/*, lib/*, stores/*, composables/*
shared/ →  lib/*, stores/*, composables/*, types/*
lib/    →  (apenas types básicos)
game/   →  stores/*, types/*, utils/*
```

**`lib/` nunca importa de `pages/`, `shared/`, `stores/`, `game/`.**

## Padrões de design

- **Facade** — `GameFacade` abstrai comunicação Vue ↔ Phaser
- **Strategy** — `IGameStrategy` para diferentes comportamentos de personagem
- **Command** — `ICommand` + `CommandHistory` para undo/redo
- **DI Container** — `GameContainer` com lazy initialization

## Convenções

### Vue
- Composition API com `<script setup>`
- SFC multi-arquivo: `.vue` (template) + `.script.ts` (lógica)
- Componentes base prefixados com `Base`
- Estilos em SCSS separados (RSCSS)

### TypeScript
- Zero `any` (bloqueado pelo ESLint)
- Interfaces prefixadas com `I`
- Constantes semânticas em `utils/constants.ts`
- Sem strings mágicas em código `.ts`

### SCSS (RSCSS)
- Componentes: 2+ palavras (`.game-board`, `.ui-overlay`)
- Elementos: 1 palavra com `>` (`.game-board > .title`)
- Variantes: prefixo `-` (`.button.-active`)
- Helpers: prefixo `_` (`._hidden`)

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
