const base = require('./jest.base.config.js');

module.exports = {
  ...base,
  collectCoverageFrom: [...base.collectCoverageFrom, 'src/app/**/*.ts'],
  coverageDirectory: 'coverage/app',
  globals: {
    ...base.globals,
    'ts-jest': {
      ...base.globals['ts-jest'],
      tsConfig: 'tsconfig.base.spec.json'
    }
  },
  displayName: {
    name: 'app',
    color: 'blue'
  },
  name: 'app',
  roots: [`<rootDir>/src/app`],
  testPathIgnorePatterns: [...base.testPathIgnorePatterns]
};
