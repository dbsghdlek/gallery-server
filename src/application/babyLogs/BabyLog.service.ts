import { BabyLogRepository } from './BabyLog.reposiotry';
import { Inject } from '@nestjs/common';
import InputLogDto from './dto/inputLogDto';
import { BabyLog } from '../../domain/babyLogs/BabyLog';
import * as dayjs from 'dayjs';

export class BabyLogService {
  constructor(
    @Inject('BABYLOG_REPOSITORY')
    private readonly babyLogRepository: BabyLogRepository,
  ) {}
  addLog(log: InputLogDto) {
    const date = dayjs().hour(log.hour).minute(log.minute).format('YYYY-MM-DD HH:mm:ss');
    const logInfo = new BabyLog(
      new Date(date),
      log.event,
      log.milk_amount,
      log.target,
    );
    const result = this.babyLogRepository.addLog(logInfo);
    return result;
  }

  getLogsByTarget(target: string, searchDate: string) {
    const searchData = this.babyLogRepository.getLogsByTarget(
      target,
      searchDate,
    );
    return searchData;
  }
}
