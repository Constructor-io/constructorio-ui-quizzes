const commonConfig = {
  transform: { '^.+\\.(ts|tsx)?$': 'ts-jest' },
  collectCoverageFrom: ['src/(components|hooks)/**/*.[jt]s?(x)'],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
};

module.exports = {
  projects: [
    {
      ...commonConfig,
      displayName: 'client',
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['./jest.setup.ts'],
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
