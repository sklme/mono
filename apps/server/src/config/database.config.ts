import { registerAs } from '@nestjs/config';
import { isDev } from 'src/utils/env';

export class DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
}

const devConfig: DatabaseConfig = {
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 3306,
  username: process.env.DATABASE_USERNAME || 'dev',
  password: process.env.DATABASE_PASSWORD || 'dev123',
};

const prodConfig: DatabaseConfig = {
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 3306,
  username: process.env.DATABASE_USERNAME || 'prod',
  password: process.env.DATABASE_PASSWORD || 'prod123',
};

// TODO 需要添加validate https://docs.nestjs.com/techniques/configuration#custom-validate-function
export default registerAs('database', () => (isDev ? devConfig : prodConfig));
