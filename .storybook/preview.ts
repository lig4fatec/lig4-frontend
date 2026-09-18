import type { Preview } from '@storybook/vue3-vite'
import { h, ref, watchEffect } from 'vue'
import { useTheme } from '../src/lib/composables/useTheme'

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
  decorators: [
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
