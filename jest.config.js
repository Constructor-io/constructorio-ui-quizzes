module.exports = {
  rootDir: 'src',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  collectCoverageFrom: ['<rootDir>/components/**/*.[jt]s?(x)'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  coverageDirectory: '../coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/../jest.setup.ts'],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
    },
  },
};
