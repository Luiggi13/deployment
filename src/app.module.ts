import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ConfigModule } from '@nestjs/config';
import { configApp } from '@/config/config.app';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD, APP_FILTER } from '@nestjs/core';
import { RateLimitExceptionFilter } from '@/core/filters/throttler.filter';
import { CoreModule } from '@/core/core.module';
import { ApiModule } from '@/api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configApp],
      envFilePath: ['.env'],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: configApp().postgres.host,
      port: configApp().postgres.port,
      username: configApp().postgres.username,
      password: configApp().postgres.password,
      database: configApp().postgres.database,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ThrottlerModule.forRoot([
      {
        ttl: configApp().ttl,
        limit: configApp().limit,
      },
    ]),
    CoreModule,
    ApiModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_FILTER,
      useClass: RateLimitExceptionFilter,
    },
  ],
})
export class AppModule {}
