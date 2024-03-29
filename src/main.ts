import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { ConfigService } from '@nestjs/config';
import { setupSwagger } from '@/config/config.swagger';
import { configStrings } from '@/config/config.strings';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: '*',
    credentials: true,
    methods: ['*'],
    allowedHeaders: ['*'],
  });

  app.setGlobalPrefix(configStrings().apiVersion);
  setupSwagger(app, configService);
  await app.listen(configService.get<number>('PORT') || 3000);
}
bootstrap();
