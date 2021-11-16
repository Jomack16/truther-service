import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { TransformInterceptor } from './utils/interceptors/transform.interceptor';

async function bootstrap() {
  dotenv.config();
  const port = 3000;
  const globalPrefix = 'api';
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/${globalPrefix}`);
  });
}
bootstrap();
