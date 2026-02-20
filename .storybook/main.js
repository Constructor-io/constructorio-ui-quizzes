module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    defaultName: 'Docs'
  },
  env: (config) => ({
    ...config,
    LOGGER: true,
  }),
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldRemoveUndefinedFromOptional: true,
      shouldExtractLiteralValuesFromEnum: true,
      savePropValueAsString: true,
      skipChildrenPropWithoutDoc: false,
      typePropName: 'type',
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  async viteFinal(config) {
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@axe-core/react'] = require.resolve('@axe-core/react');

    config.plugins = config.plugins || [];
    config.plugins.push({
      name: 'raw-md-loader',
      transform(code, id) {
        if (id.endsWith('.md')) {
          return `export default ${JSON.stringify(code)};`;
        }
      },
    });
    return config;
  },
};
