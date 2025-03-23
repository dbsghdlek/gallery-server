import { BabyLog } from '../../domain/babyLogs/BabyLog';
import { ResponseHistory } from './dto/ResponseHistory';

export interface BabyLogRepository {
  getLogsByTarget(
    target: string,
    searchDate: string,
  ): Promise<ResponseHistory[]>;
  addLog(log: BabyLog): Promise<ResponseHistory>;
}
