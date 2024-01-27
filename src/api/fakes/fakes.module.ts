import { Module } from '@nestjs/common';
import { FakesController } from './fakes.controller';
import { FakesService } from './fakes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fakes } from './fakes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fakes])],
  controllers: [FakesController],
  providers: [FakesService],
})
export class FakesModule {}
