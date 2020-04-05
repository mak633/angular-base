module.exports = {
  collectCoverageFrom: [
    '!**/main.*ts',
    '!**/main.server.ts',
    '!**/*.module.ts',
    '!**/*.routes.ts',
    '!**/*.mocks.ts',
    '!**/*.model.ts',
    '!**/*.constants.ts',
    '!**/*.constant.ts',
    '!**/*.enum.ts',
    '!**/*animation.ts',
    '!**/index.ts',
    '!**/*.config.ts',
    '!**/*.actions.ts',
    '!**/*-version.ts',
    '!src/environments/**',
    '!src/common/jest-global-mocks.ts',
    '!src/common/jest-mocks.ts',
    '!src/common/jest.helpers.ts',
    '!src/common/jest.ts',
    '!src/polyfills.ts',
    '!src/typings.d.ts',
    '!**/node_modules/**'
  ],
  coverageReporters: ['text', 'cobertura', 'html'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 40,
      lines: 70,
      statements: 60
    }
  },
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer'
      ],
      diagnostics: false
    }
  },
  moduleNameMapper: {
    '@environment': '<rootDir>/src/environments/environment',
    '@root/(.*)': '<rootDir>/$1',
    "@shared/*": ["./src/app/shared/*"],
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/jest.ts'],
  snapshotSerializers: [
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  testMatch: ['**.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  rootDir: './',
  transformIgnorePatterns: [
    'node_modules/(?!(ramda/es|@ngrx|angular2-ui-switch|ng-inline-svg|ng-dynamic|@angular/common/locales|date-fns/esm))'
  ]
};
