const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
  testTimeout: 20000,
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
