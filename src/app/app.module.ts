import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as process from 'node:process';
import * as path from 'node:path';
import * as dotenv from 'dotenv';
import { ConfigModule } from '../config/ConfigModule';
import GalleryModule from '../modules/Gallery.module';
import GalleryLikesModule from '../modules/GalleryLikes.module';
import UsersModule from '../modules/Users.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CommentModule } from '../modules/Comment.module';
import { BabyLogModule } from '../modules/BabyLogModule';

let envFileName = '../env/development.env';
switch (process.env.NODE_ENV) {
  case 'production':
    envFileName = '../env/production.env';
    break;
}

dotenv.config({ path: path.join(__dirname, envFileName) });

@Module({
  imports: [
    ConfigModule,
    GalleryModule,
    GalleryLikesModule,
    UsersModule,
    CommentModule,
    BabyLogModule,
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname + process.env.FILE_PATH),
      serveRoot: '/resource',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
