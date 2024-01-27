import { RateLimitExceptionFilter } from './throttler.filter';

describe('CustomThrottlerMessageGuard', () => {
  it('should be defined', () => {
    expect(new RateLimitExceptionFilter()).toBeDefined();
  });
});
