import './custom-styles-story.css';
import './storybook-styles.css';
import '../src/styles.css'

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: ['Quiz', ['Component', 'Hooks', 'Specific Examples', 'Style Customizations', 'Questions', 'Results', 'Full Quiz e2e tests']],
    },
  },
  layout: 'fullscreen',
  viewMode: 'docs',
  previewTabs: {
    'storybook/docs/panel': { index: -1 }
  },
  backgrounds: {
    default: 'light',
  },
  docs: {
    toc: true, // 👈 Enables the table of contents
  },
};
