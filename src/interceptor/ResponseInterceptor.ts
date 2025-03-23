import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { ResponseDto } from '../app/dto/ResponseDto';
import { map, Observable } from 'rxjs';

export class ResponseInterceptor<T> implements NestInterceptor<ResponseDto<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        status: data.status,
        data: data,
        message: data.message,
      })),
    );
  }
}
