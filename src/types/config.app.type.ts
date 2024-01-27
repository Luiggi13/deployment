export type ConfigApp = {
  apiPort: number;
  postgres: ConfigAppPostgres;
  ttl: number;
  limit: number;
};

export type ConfigAppPostgres = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
};
