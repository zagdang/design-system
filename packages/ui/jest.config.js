
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'jest-transform-css'
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest'],
    '\\.css$': 'jest-transform-css'
  }
}