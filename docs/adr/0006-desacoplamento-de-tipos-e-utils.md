# 0006. Desacoplamento de tipos e utils

- **Data:** 2026-09-03
- **Estado:** Aceita

## Contexto

Tipos estavam duplicados em 3 arquivos (`Piece` em `gameStore.ts`, `GameState.ts`, `GameService.ts`) e funções utilitárias estavam espalhadas.

## Decisão

Criar diretórios centralizados:

- `src/types/` — todas as interfaces e tipos (prefixo `I`)
- `src/utils/` — funções utilitárias puras

Tipos consolidados:
- `IPiece`, `IGameContext`, `IGameState` → `types/game.ts`
- `IEventMap`, `IEventHandler` → `types/events.ts`
- `IApiResponse`, `IGameStateResponse`, `IMoveResponse` → `types/api.ts`
- `ICharacter` → `types/character.ts`

Utils:
- `createGameConfig()`, constantes → `utils/game.ts`
- `createCharacter()` → `utils/character.ts`

## Consequências

- **Positivas:** zero duplicação, imports centralizados, melhor refatoração.
- **Negativas:** mais uma camada de import.
