import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class SerializeInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    handler: CallHandler<any>,
  ): Observable<any> {
    //     run something before the request is handled by the request handler
    console.log('Running before handler', context);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return handler.handle().pipe(
      map((data: any) => {
        //     run something before the response is sent out
        console.log('Running before response is sent out', data);
      }),
    );
  }
}

// export function Serilize<T>(dto: ClassConstructor<T>) {
//   return UseInterceptors(new SerializeInterceptor(dto));
// }
//
// export class SerializeInterceptor<T> implements NestInterceptor {
//   constructor(private dto: ClassConstructor<T>) {}
//   intercept(context: ExecutionContext, next: CallHandler): Observable<T> {
//
//     return next.handle().pipe(
//         map((data: T) => {
//
//           return plainToClass(this.dto, data, {
//             excludeExtraneousValues: true,
//           });
//         }),
//     );
//   }
// }
