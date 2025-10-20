import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Forneça o caminho para o seu aplicativo Next.js para carregar next.config.js e .env no ambiente de teste
  dir: './',
});

// Adicione qualquer configuração personalizada do Jest a ser passada para createJestConfig
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Adicione mais opções de setup aqui
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Lida com mapeamento de alias de módulo (se você configurou no tsconfig.json)
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

// createJestConfig é exportado assim para garantir que o Next.js possa carregar a configuração do Jest corretamente
export default createJestConfig(config);