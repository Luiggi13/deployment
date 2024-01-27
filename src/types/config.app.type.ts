export type ConfigApp = {
  apiPort: number;
  postgres: ConfigAppPostgres;
  version: string;
  ttl: number;
  limit: number;
};

export type ConfigAppRedis = {
  enabled: boolean;
  host: string;
  port: number;
  username: string;
  password: string;
};

export type ConfigAppPostgres = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
};
