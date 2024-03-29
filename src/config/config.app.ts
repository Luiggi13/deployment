import { ConfigApp } from '@/types/config.app.type';

export const configApp = (): ConfigApp => {
  return {
    apiPort: Number(process.env.API_PORT) || 3000,
    limit: Number(process.env.THROTTLE_LIMIT) || 10,
    ttl: Number(process.env.THROTTLE_TTL) || 6000,
    postgres: {
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER || '',
      password: process.env.POSTGRES_PASSWORD || '',
      database: process.env.POSTGRES_DB || '',
    },
  };
};
