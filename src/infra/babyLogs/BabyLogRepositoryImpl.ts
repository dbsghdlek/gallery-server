import { BabyLogRepository } from '../../application/babyLogs/BabyLog.reposiotry';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BabyLogsSchema } from './BabyLogs.schema';
import { Model } from 'mongoose';
import { plainToClass } from 'class-transformer';
import { BabyLog } from '../../domain/babyLogs/BabyLog';
import { ResponseHistory } from '../../application/babyLogs/dto/ResponseHistory';
import * as dayjs from 'dayjs';

@Injectable()
export class BabyLogRepositoryImpl implements BabyLogRepository {
  constructor(
    @InjectModel(BabyLogsSchema.name)
    private babyLogModel: Model<BabyLogsSchema>,
  ) {}

  async addLog(log: BabyLog) {
    const result = await this.babyLogModel.create(log);
    return plainToClass(ResponseHistory, result, {
      excludeExtraneousValues: true,
    });
  }

  async getLogsByTarget(target: string, searchDate: string) {
    const lastTime = dayjs(searchDate).endOf('day').toDate();
    const historyList = await this.babyLogModel
      .find({
        target: target,
        time: {
          $gte: dayjs(searchDate).startOf('day').toDate(),
          $lte: dayjs(searchDate).endOf('day').toDate(),
        },
      })
      .lean()
      .exec();

    return historyList.map((history) => {
      return plainToClass(ResponseHistory, history, {
        excludeExtraneousValues: true,
      });
    });
  }
}
