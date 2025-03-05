import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as process from 'node:process';
import * as path from 'node:path';
import * as dotenv from 'dotenv';
import { ConfigModule } from './config/ConfigModule';
import GalleryModule from "./gallery/gallery.module";
import GalleryLikesModule from "./galleryLikes/galleryLikes.module";

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
