const commonConfig = {
  rootDir: 'src',
  transform: { '^.+\\.(ts|tsx)?$': 'ts-jest' },
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
      setupFilesAfterEnv: ['<rootDir>/../jest.setup.ts'],
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
