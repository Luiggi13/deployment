import { ConfigStrings } from '@/types/config.strings.type';

export const configStrings = (): ConfigStrings => {
  return {
    apiVersion: 'api/v1',
    rateLimit:
      'You have exceeded the maximum allowed requests per minute. Please try again in 1 minute',
    notFound: 'The resource that you are looking for does not exist',
  };
};
