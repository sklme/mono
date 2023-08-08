import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GLOBAL_PREFIX } from 'src/constants/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局路径前缀
  app.setGlobalPrefix(GLOBAL_PREFIX);

  await app.listen(3000);
}
bootstrap();
