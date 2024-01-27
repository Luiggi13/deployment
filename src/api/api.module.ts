import { Module } from '@nestjs/common';
import { FakesModule } from './fakes/fakes.module';

@Module({
  imports: [FakesModule],
  exports: [FakesModule],
})
export class ApiModule {}
