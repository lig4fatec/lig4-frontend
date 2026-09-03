# 0001. Estrutura de documentação e uso de IA

- **Data:** 2026-08-25
- **Estado:** Aceita

## Contexto

O frontend do projeto LIG 4 está em fase inicial. Antes de qualquer decisão técnica, a equipe identificou duas necessidades:

1. A equipe usará IA de formas variadas, sem critérios definidos sobre modelos, provedores e confidencialidade.
2. Sem uma fonte centralizada de informação, humanos e agentes de IA podem presumir tecnologias ou inventar decisões que nunca foram tomadas.

## Decisão

Adotar uma estrutura de documentação mínima, com o AGENTS.md como ponto de entrada obrigatório para agentes de IA:

- `AGENTS.md` — índice central e regras para agentes de IA.
- `ARCHITECTURE.md` — arquitetura do sistema.
- `CONTRIBUTING.md` — fluxo de contribuição.
- `docs/adr/` — registros de decisões de arquitetura.

## Consequências

- **Positivas:** agentes de IA têm instruções consistentes; decisões ficam rastreáveis.
- **Negativas:** custo de manutenção dos documentos.
