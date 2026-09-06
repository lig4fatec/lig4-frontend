# PRD-0011. Página Game (integração com game/)

- **Data:** 2026-09-06
- **Estado:** Implementado

## Objetivo

Migrar a lógica do jogo de App.vue para uma página dedicada.

## Requisitos

- Renderizar game canvas via Phaser
- Sincronizar estado com Pinia store
- Exibir sidebar com info do jogo
- Botão de reiniciar quando game over
- Receber parâmetro de rota (game mode)

## Critérios de aceite

- Jogo funciona normalmente
- Sidebar mostra estado atual
- Reiniciar funciona
- `npm run build` passa
