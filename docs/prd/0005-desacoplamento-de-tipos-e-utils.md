# PRD-0005. Desacoplamento de tipos e utils

- **Data:** 2026-09-03
- **Estado:** Implementado

## Objetivo

Centralizar tipagens e funções utilitárias para evitar duplicação.

## Requisitos

- `src/types/` com todas as interfaces (prefixo `I`)
- `src/utils/` com funções utilitárias puras
- Zero duplicação de tipos

## Critérios de aceite

- `Piece` não está duplicado
- Imports usam `@/types` e `@/utils`
- Typecheck passa
