# PRD-0014. Configuração de i18n para pt-BR e en-US

- **Data:** 2026-09-18
- **Estado:** Implementado

## Objetivo

Adicionar suporte a internacionalização (i18n) no frontend com dois idiomas iniciais — `pt-BR` (padrão) e `en-US` — permitindo troca em runtime, persistência da preferência e detecção do idioma do navegador, sem strings hardcoded nas páginas e componentes do design system.

## Requisitos

### Plugin e Configuração

- Instalar `vue-i18n@11` com `legacy: false` (Composition API) e `globalInjection: true` para uso via `$t` global em templates.
- Criar plugin `src/lib/i18n/index.ts` que exporta `i18n` com `locale: 'pt-BR'`, `fallbackLocale: 'en-US'`, `messages` carregadas de `src/locales/`.
- Registrar `app.use(i18n)` em `src/main.ts` antes de `app.mount`.
- Suporte a interpolação (`$t('greeting', { name })`), pluralização e `datetime`/`number` formats por locale.
- Tipos seguros: `src/types/i18n.ts` com `IMessageSchema` e `defineI18n` para autocomplete de chaves de `$t`.

### Locales

- Arquivos `src/locales/pt-BR.json` e `src/locales/en-US.json` com estrutura espelhada e namespaces: `common`, `nav`, `home`, `game`, `settings`, `profile`, `leaderboard`, `errors`, `components`.
- Exemplo de chave: `home.title`, `game.turn`, `settings.language`, `components.confirmDialog.confirm`.
- Validar em build que ambos os JSONs possuem as mesmas chaves (script `validate-locales.ts` ou teste unitário).

### Composable e Persistência

- `src/lib/composables/useLocale.ts` com `locale` (computed), `setLocale(lang: 'pt-BR' | 'en-US')`, `toggleLocale()`, persistência em `localStorage` (`lig4:locale`) e detecção inicial via `navigator.language` (fallback `pt-BR`).
- Integrar com `useTheme`? Não acoplar; ambos lidos em `ThemeProvider`/`I18nProvider` se necessário, mas `useLocale` é independente.
- Expor `availableLocales` para seletor.

### UI e Integração

- Adicionar seletor de idioma em `src/pages/Settings/Settings.vue` (substituir `ref` mock atual) usando `BaseButton`/`BaseCard` e `useLocale`.
- Opcional: exibir seletor compacto em `src/shared/components/Navbar/Navbar.vue` para troca rápida.
- Migrar todas as strings hardcoded das `pages/` (`Home`, `Game`, `Settings`, `Profile`, `Leaderboard`) e dos componentes `lib/components` (`ConfirmDialog`, `BaseButton` slots, `GameCard`, `PlayerInfo`, `ScoreDisplay`, `FormField`) para `$t('chave')` global em templates (e `i18n.global.t` em `.ts` quando necessário), sem `useI18n()` local.
- Manter `lib/` sem import de `pages/`/`shared/`/`stores`/`game/`; `lib/components` usam `$t` global (não importam `vue-i18n` diretamente).

### Storybook e Testes

- Configurar decorator global em `.storybook/preview.ts` com `app.use(i18n)` e toolbar de locale para preview `pt-BR`/`en-US`.
- Stories de exemplo devem demonstrar troca de idioma.
- Testes unitários em `src/lib/composables/useLocale.spec.ts` para `setLocale`, persistência e fallback.
- Testes de componentes devem envolver `global.plugins: [i18n]` no `mount` (atualizar `BaseButton.test.ts`, `BaseCard.test.ts`, etc.).

### Estrutura de pastas resultante

```
src/
├── locales/
│   ├── pt-BR.json
│   ├── en-US.json
│   └── index.ts          # re-export + type
├── lib/
│   ├── i18n/
│   │   └── index.ts      # createI18n()
│   ├── composables/
│   │   ├── useTheme.ts
│   │   └── useLocale.ts
│   └── types/
│       └── i18n.ts
```

## Critérios de aceite

- `vue-i18n` configurado com `pt-BR` padrão e `en-US` fallback, registrado em `main.ts`.
- Arquivos `pt-BR.json` e `en-US.json` existem, com chaves idênticas e namespaces definidos.
- `useLocale()` troca idioma em runtime, persiste em `localStorage` e restaura no reload; respeita `navigator.language` na primeira visita.
- Seletor em `Settings` (e opcional `Navbar`) alterna `pt-BR`/`en-US` e reflete imediatamente em toda a UI.
- Nenhuma string visível ao usuário permanece hardcoded em `pages/` ou `lib/components` — todas via `$t()` global.
- Storybook exibe toolbar de idioma e renderiza stories em ambos os locales.
- `npm run build`, `npm run lint`, `npm run typecheck`, `npm run test` (com `vue-i18n` mockado nos testes) passam sem erros.
- `npm run lint` garante `zero any` e `I` prefix para `IMessageSchema`; `lib/` continua sem imports de `pages/`/`shared/`/`stores/`/`game/`.
