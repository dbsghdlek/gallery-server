import { Expose } from 'class-transformer';

export class BabyLog {
  constructor(time: Date, event: number, milk_amount: number, target: string) {
    this.time = time;
    this.event = event;
    this.milk_amount = milk_amount;
    this.target = target;
  }
  @Expose()
  readonly time: Date;
  @Expose()
  readonly event: number;
  @Expose()
  readonly milk_amount: number;
  @Expose()
  readonly target: string;
}
