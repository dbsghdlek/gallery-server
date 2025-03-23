import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Expose } from 'class-transformer';

@Schema()
export class BabyLogsSchema {
  @Prop()
  @Expose()
  id: number;
  @Prop()
  @Expose()
  readonly time: Date;
  @Prop()
  @Expose()
  readonly event: string;
  @Prop()
  @Expose()
  readonly milk_amount: number;
  @Prop()
  @Expose()
  readonly target: string;
}

export const BabyLogSchema = SchemaFactory.createForClass(BabyLogsSchema);
