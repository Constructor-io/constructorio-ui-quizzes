module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  features: {
    interactionsDebugger: true
  },
  docs: {
    //👇 See the table below for the list of supported options
    autodocs: 'tag',
    defaultName: 'Docs',
  },
    /*
   * 👇 The `config` argument contains all the other existing environment variables.
   * Either configured in an `.env` file or configured on the command line.
   */
  env: (config) => ({
    ...config,
    LOGGER: true,
  }),
};
