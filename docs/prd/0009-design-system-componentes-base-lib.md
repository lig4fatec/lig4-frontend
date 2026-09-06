# PRD-0009. Design system — componentes base (lib/)

- **Data:** 2026-09-06
- **Estado:** Implementado

## Objetivo

Criar biblioteca de componentes UI genéricos reutilizáveis.

## Requisitos

- Componentes: BaseButton, BaseModal, BaseInput, BaseCard, BaseAvatar
- SFC multi-arquivo (.vue + .script.ts)
- Estilos SCSS com padrão RSCSS
- Zero acoplamento com negócio
- Componentes dumb: apenas props e eventos

## Critérios de aceite

- Cada componente funciona isoladamente
- Estilos são reutilizáveis
- Zero imports de stores/ ou game/
- `npm run build` passa
