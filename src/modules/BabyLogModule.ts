import { Module } from '@nestjs/common';
import { BabyLogRepositoryImpl } from '../infra/babyLogs/BabyLogRepositoryImpl';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BabyLogSchema,
  BabyLogsSchema,
} from '../infra/babyLogs/BabyLogs.schema';
import { BabyLogService } from '../application/babyLogs/BabyLog.service';
import { BabyLogController } from '../interface/babyLogs/BabyLog.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BabyLogsSchema.name, schema: BabyLogSchema },
    ]),
  ],
  providers: [
    BabyLogService,
    {
      provide: 'BABYLOG_REPOSITORY',
      useClass: BabyLogRepositoryImpl,
    },
  ],
  controllers: [BabyLogController],
})
export class BabyLogModule {}
