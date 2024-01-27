import { configStrings } from '@/config/config.strings';
import { HttpStatus } from '@nestjs/common';
import { match } from 'ts-pattern';

export const checkStatusCode = (valor: HttpStatus): string => {
  type Result = { type: HttpStatus };

  const res: Result = { type: valor };

  const output = match(res)
    .with({ type: 429 }, () => configStrings().rateLimit)
    .with({ type: 404 }, () => configStrings().notFound);
  return output.run();
};
