# PRD-0013. Design System — tokens, temas e Storybook

- **Data:** 2026-09-16
- **Estado:** Proposta

## Objetivo

Consolidar o design system como fonte de verdade para componentes UI, tokens semânticos, sistema de temas (dark/light) e documentação visual via Storybook. O sistema atual possui 5 componentes base e 4 variáveis SCSS sem suporte a troca de tema em runtime.

## Requisitos

### Tokens de Design

- Migrar variáveis SCSS para CSS Custom Properties com camada semântica.
- Paleta de cores: primary, secondary, accent, success, danger, warning, neutral (escala 100-900), surface, background, text, border.
- Escala de tipografia: font-size (xs→3xl), font-weight, line-height.
- Escala de espaçamento: 0→16 (base 4px).
- Border-radius: none, sm, md, lg, xl, full.
- Contornos (borders): none, thin, medium, thick — sem sombreamento.
- Duração e easing para transições.
- Breakpoints: manter mobile (480px), tablet (768px), adicionar desktop (1024px).

### Sistema de Temas

- Implementar via atributo `data-theme` no `<html>`.
- CSS Custom Properties com valores light por default + override em `[data-theme="dark"]`.
- `ThemeProvider.vue` como wrapper raiz que injeta a classe.
- `useTheme()` composable para alternância e persistência em `localStorage`.
- Respeitar `prefers-color-scheme` do sistema operacional na primeira visita.
- Integrar com a página Settings existente (substituir `ref` local por `useTheme`).

### Componentes Primitivos (atualização)

- **BaseButton**: adicionar variant `ghost` e `outline`.
- **BaseCard**: adicionar prop `bordered` e slot `actions` no header.
- **BaseInput**: adicionar prop `hint` e indicador de required.
- **BaseModal**: adicionar close-on-backdrop e transições CSS.
- **BaseAvatar**: sem mudanças.

### Componentes Primitivos (novos)

- **BaseBadge**: indicadores de status (win/loss/draw).
- **BaseTooltip**: tooltips em hover.
- **BaseDivider**: divisor horizontal/vertical.
- **BaseSpinner**: estados de carregamento (extrair do BaseButton).
- **BaseIcon**: wrapper para ícones SVG.
- **BaseChip**: tags/labels removíveis.
- **BaseSkeleton**: placeholders de carregamento.

### Componentes de Composição (novos)

- **FormField**: composição de Label + Input + Error + Hint.
- **ConfirmDialog**: modal de confirmação reutilizável.
- **GameCard**: extrair da Home page para `lib/components/`.
- **ScoreDisplay**: exibição de placar com ícones.
- **PlayerInfo**: avatar + nome + nível.

### Ícones

- Lucide Icons (leve, tree-shakeable, SVG).
- Barrel export em `src/lib/icons/index.ts`.
- Wrapper `BaseIcon` para uso nos componentes.

### Storybook

- Configurar `@storybook/vue3-vite` com addon-essentials, addon-themes, addon-a11y.
- Stories (`.stories.ts`) e documentação (`.mdx`) ficam **colocalizados** com o componente em `src/lib/components/ComponentName/`.
- Stories de tokens em `src/styles/tokens/` (Colors.mdx, Typography.mdx, Spacing.mdx, Borders.mdx).
- Decorator global com ThemeProvider para preview dark/light.
- Suporte a MCP (Model Context Protocol) para integração com agentes de IA.
- Documentação é feita via arquivos `.mdx` (sem autodocs).

### Estrutura de pastas resultante

```
src/lib/
├── components/
│   ├── BaseButton/
│   │   ├── BaseButton.vue
│   │   ├── BaseButton.script.ts
│   │   ├── BaseButton.spec.ts
│   │   ├── BaseButton.stories.ts
│   │   └── BaseButton.mdx
│   ├── BaseCard/
│   │   └── ...
│   └── ... (demais componentes)
├── composables/
│   ├── useTheme.ts
│   └── useBreakpoint.ts
├── icons/
│   └── index.ts
└── providers/
    └── ThemeProvider.vue

src/styles/
├── tokens/
│   ├── Colors.mdx
│   ├── Typography.mdx
│   ├── Spacing.mdx
│   └── Borders.mdx
└── base/
    └── _variables.scss (atualizado com CSS custom properties)
```

## Critérios de aceite

- Tokens definidos como CSS Custom Properties com override para dark mode.
- `useTheme()` alterna tema e persiste em `localStorage`.
- `ThemeProvider` aplicado na raiz da aplicação.
- Página Settings usa `useTheme()` em vez de `ref` local.
- Todos os 5 componentes base atualizados para usar tokens.
- 7 novos primitivos criados seguindo padrão SFC multi-arquivo.
- 5 novos componentes de composição criados.
- Storybook configurado e funcional (`npm run storybook`).
- Cada componente de `lib/` possui `.stories.ts` e `.mdx` colocalizados.
- Documentação de tokens renderiza no Storybook.
- `npm run build` passa sem erros.
- `npm run lint` e `npm run lint:css` passam sem erros.
- `npm run typecheck` passa sem erros.
- Zero imports de `pages/`, `shared/`, `stores/`, `game/` em `lib/`.
