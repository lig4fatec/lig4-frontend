# PRD-0012. Serviço WebSocket para multiplayer

- **Data:** 2026-09-6
- **Estado:** Implementado

## Objetivo

Criar infraestrutura para comunicação em tempo real.

## Requisitos

- `WebSocketService` singleton com padrão observer
- `useWebSocket` composable para componentes
- Constantes de evento em `utils/constants.ts`
- Tratamento de conexão/desconexão

## Critérios de aceite

- Serviço conecta, envia e recebe mensagens
- Composable gerencia ciclo de vida
- `npm run build` passa
