export type ConfigApp = {
  apiPort: number;
};

export type ConfigAppRedis = {
  enabled: boolean;
  host: string;
  port: number;
  username: string;
  password: string;
};

export type ConfigAppPostgres = {
  type: 'postgres' | 'mongodb' | 'mssql' | 'mysql' | 'sqlite' | 'cockroachdb';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
};
