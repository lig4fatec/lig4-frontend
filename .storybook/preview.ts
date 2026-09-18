import type { Preview } from '@storybook/vue3-vite'
import { h } from 'vue'
import { useTheme } from '../src/lib/composables/useTheme'
import i18n from '../src/lib/i18n'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo'
    }
  },
  globalTypes: {
    locale: {
      description: 'Idioma',
      defaultValue: 'pt-BR',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'pt-BR', title: 'Português (BR)' },
          { value: 'en-US', title: 'English (US)' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const locale = context.globals.locale as string
      if (locale && (locale === 'pt-BR' || locale === 'en-US')) {
        const current = i18n.global.locale as unknown as string | { value: string }
        if (typeof current === 'string') {
          ;(i18n.global.locale as unknown as string) = locale
        } else {
          current.value = locale
        }
        document.documentElement.setAttribute('lang', locale)
      }
      return {
        setup() {
          return () => h(story())
        },
      }
    },
    (story) => {
      const { theme, toggleTheme } = useTheme()

      return {
        setup() {
          return () => h('div', {
            'data-theme': theme.value,
            style: {
              padding: '20px',
              minHeight: '100vh',
              backgroundColor: theme.value === 'dark' ? '#1a1a1a' : '#ffffff',
            }
          }, [
            h('div', {
              style: {
                position: 'fixed',
                top: '10px',
                right: '10px',
                zIndex: 9999,
              }
            }, [
              h('button', {
                onClick: toggleTheme,
                style: {
                  padding: '8px 16px',
                  cursor: 'pointer',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: theme.value === 'dark' ? '#333' : '#fff',
                  color: theme.value === 'dark' ? '#fff' : '#333',
                }
              }, `Tema: ${theme.value === 'dark' ? 'Escuro' : 'Claro'}`)
            ]),
            h(story())
          ])
        }
      }
    }
  ],
};

export default preview;
