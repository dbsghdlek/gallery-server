import * as process from 'node:process';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Global, Module } from '@nestjs/common';

const envFileName: string =
  process.env.NODE_ENV === 'production'
    ? '../../env/production.env'
    : process.env.NODE_ENV === 'stage'
      ? '../../env/stage.env'
      : '../../env/development.env';

dotenv.config({
  path: path.join(__dirname, envFileName),
});

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      port: 5432,
      entities: [path.join(__dirname, '..', '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
  ],
})
export class ConfigModule {}
