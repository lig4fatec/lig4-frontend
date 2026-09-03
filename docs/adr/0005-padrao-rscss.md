# 0005. Padrão RSCSS para estilos

- **Data:** 2026-09-03
- **Estado:** Aceita

## Contexto

O projeto precisa de uma metodologia de CSS escalável e manutenível.

## Decisão

Adotar RSCSS (Reasonable System for CSS Stylesheet Structure):

- **Componentes:** 2+ palavras separadas por `-` (`.game-board`, `.ui-overlay`)
- **Elementos:** 1 palavra, selecionados com `>` (`.game-board > .title`)
- **Variantes:** prefixo `-` (`.button.-active`)
- **Helpers:** prefixo `_` (`._hidden`)
- Sempre usar child selector `>` ao invés de descendant

Estrutura de pastas:
```
src/styles/
├── base/         # Variáveis, reset
├── components/   # Estilos por componente
└── helpers/      # Classes utilitárias
```

## Consequências

- **Positivas:** código CSS organizado, escalável, sem conflitos.
- **Negativas:** curva de aprendizado para quem conhece BEM.
