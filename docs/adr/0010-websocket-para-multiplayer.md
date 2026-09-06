# 0010. WebSocket para multiplayer

- **Data:** 2026-09-06
- **Estado:** Aceita

## Contexto

O jogo é multiplayer e precisa de comunicação em tempo real entre jogadores.

## Decisão

Adotar **WebSocket** como protocolo de comunicação:

- `WebSocketService` em `shared/services/` — cliente singleton com padrão observer
- `useWebSocket` em `shared/composables/` — composable Vue para componentes
- Constantes de evento em `utils/constants.ts` (WS_EVENT_CONNECT, etc.)

## Consequências

- **Positivas:** comunicação em tempo real, baixa latência, suporte nativo do browser.
- **Negativas:** require tratamento de reconexão, estado de conexão visível ao usuário.
