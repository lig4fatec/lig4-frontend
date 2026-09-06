# PRD-0010. Página Home/Lobby

- **Data:** 2026-09-06
- **Estado:** Implementado

## Objetivo

Criar tela inicial para seleção de modo de jogo.

## Requisitos

- Exibir opções de jogo (Local, Online, vs. Computador)
- Cada opção navega para a página Game com o modo selecionado
- Usa componentes BaseCard e RouterLink

## Critérios de aceite

- Página renderiza com as 3 opções
- Clique navega para `/game/:mode`
- Estilo consistente com o design system
