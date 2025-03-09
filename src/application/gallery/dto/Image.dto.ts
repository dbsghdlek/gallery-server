import { Expose } from 'class-transformer';

export class ImageDto {
  @Expose()
  id: number;
  @Expose()
  fileName: string;
  @Expose()
  thumbnail: string;
  @Expose()
  pictureDate: string;
  @Expose()
  registerDate: string;
}
