# ARCHITECTURE.md

Arquitetura do sistema LIG 4 (frontend).

## Visão geral

O LIG 4 é um jogo Connect 4 multiplayer com frontend em Vue 3 + Phaser 4 e backend em Quarkus.

## Stack tecnológica

| Tecnologia | Versão | Uso |
|---|---|---|
| Vue 3 | 3.5.x | UI framework (Composition API) |
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
├── types/                    # Interfaces e tipos centralizados
│   ├── game.ts               # IPiece, IGameContext, IGameState
│   ├── events.ts             # IEventMap, IEventHandler
│   ├── api.ts                # IApiResponse, IGameStateResponse, IMoveResponse
│   ├── character.ts          # ICharacter
│   └── composables.ts        # IUseGameReturn
│
├── utils/                    # Funções utilitárias puras
│   ├── character.ts          # createCharacter()
│   └── game.ts               # createGameConfig(), constantes do jogo
│
├── composables/              # Vue composables
│   └── useGame.ts            # Composable principal do jogo
│
├── stores/                   # Pinia stores
│   └── gameStore.ts          # Estado global do jogo
│
├── game/                     # Lógica do jogo (Phaser)
│   ├── EventBus.ts           # Event bus tipado
│   ├── facade/               # Padrão Facade (Vue ↔ Phaser)
│   │   └── GameFacade.ts
│   ├── scenes/               # Cenas Phaser
│   │   └── MainScene.ts
│   ├── strategies/           # Padrão Strategy
│   │   ├── IGameStrategy.ts
│   │   ├── HeroStrategy.ts
│   │   ├── MageStrategy.ts
│   │   └── StrategyFactory.ts
│   ├── commands/             # Padrão Command
│   │   ├── ICommand.ts
│   │   └── CommandHistory.ts
│   ├── container/            # DI Container
│   │   └── GameContainer.ts
│   └── models/               # Modelos de domínio
│       └── GameState.ts
│
├── services/                 # Serviços de negócio
│   ├── GameService.ts        # Lógica de negócio pura
│   └── ApiService.ts         # Comunicação com backend
│
├── styles/                   # Estilos SCSS (RSCSS)
│   ├── base/                 # Variáveis, reset
│   ├── components/           # Estilos por componente
│   └── helpers/              # Classes utilitárias
│
├── App.vue                   # Componente raiz (template)
├── App.script.ts             # Componente raiz (lógica)
└── main.ts                   # Entry point
```

## Padrões de design

- **Facade** — `GameFacade` abstrai comunicação Vue ↔ Phaser
- **Strategy** — `IGameStrategy` para diferentes comportamentos de personagem
- **Command** — `ICommand` + `CommandHistory` para undo/redo
- **DI Container** — `GameContainer` com lazy initialization

## Convenções

### Vue
- Composition API com `<script setup>`
- SFC multi-arquivo: `.vue` (template) + `.script.ts` (lógica)
- Estilos em SCSS separados

### TypeScript
- Zero `any` (bloqueado pelo ESLint)
- Interfaces prefixadas com `I`
- Tipos centralizados em `src/types/`
- Utils centralizados em `src/utils/`

### SCSS (RSCSS)
- Componentes: 2+ palavras (`.game-board`, `.ui-overlay`)
- Elementos: 1 palavra com `>` (`.game-board > .title`)
- Variantes: prefixo `-` (`.button.-active`)
- Helpers: prefixo `_` (`._hidden`)

## Integração com o backend

O `ApiService` se comunica com o backend Quarkus via REST API.

## Segurança

- [a definir]

## Observabilidade

- [a definir]
