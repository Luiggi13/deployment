// swagger-setup.ts
import * as express from 'express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';
import { join } from 'path';

export const setupSwagger = (
  app: INestApplication,
  configService: ConfigService,
) => {
  if (configService.get<string>('NODE_ENV') === 'production') {
    const swaggerPath = join(__dirname, '..', 'node_modules/swagger-ui-dist');
    app.use('/swagger-ui', express.static(swaggerPath));
  } else {
    app.use('/swagger-ui', express.static('node_modules/swagger-ui-dist'));
  }

  const configSwagger = new DocumentBuilder()
    .setTitle('Project Developers Team')
    .setDescription('PD description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('/info', app, document);
};
