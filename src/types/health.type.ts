export enum HealthStatus {
  AVAILABLE = 'Available',
  UNAVAILABLE = 'Unavailable',
}

export type Health = {
  status: HealthStatus;
};
