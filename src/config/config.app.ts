import { ConfigApp } from './config.app.type';

export const configApp = (): ConfigApp => {
  return {
    apiPort: Number(process.env.API_PORT) || 3000,
  };
};
