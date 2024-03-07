const commonConfig = {
  rootDir: 'src',
  transform: { '^.+\\.(ts|tsx)?$': 'ts-jest' },
  setupFilesAfterEnv: ['<rootDir>/../jest.setup.ts'],
  collectCoverageFrom: ['<rootDir>/(components|hooks)/**/*.[jt]s?(x)'],
  coverageDirectory: '../coverage',
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
    },
  },
};

module.exports = {
  projects: [
    {
      ...commonConfig,
      displayName: 'client',
      testEnvironment: 'jsdom',
      testMatch: ['**/*.test.[jt]s?(x)', '!**/*.server.test.[jt]s?(x)'],
    },
    {
      ...commonConfig,
      displayName: 'server',
      testEnvironment: 'node',
      testMatch: ['**/*.server.test.[jt]s?(x)'],
    },
  ],
};
