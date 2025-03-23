import { Expose, Transform } from 'class-transformer';
import * as dayjs from 'dayjs';

export class ResponseHistory {
  @Expose()
  @Transform(({ value }) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'))
  time: Date;
  @Expose()
  event: string;
  @Expose()
  milk_amount: number;
  @Expose()
  target: string;
}
