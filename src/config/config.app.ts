import { ConfigApp } from '../types/config.app.type';

export const configApp = (): ConfigApp => {
  return {
    apiPort: Number(process.env.API_PORT) || 3000,
    postgres: {
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER || '',
      password: process.env.POSTGRES_PASSWORD || '',
      database: process.env.POSTGRES_DB || '',
    },
    version: '0.0.1',
  };
};
