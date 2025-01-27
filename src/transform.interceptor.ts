import { CallHandler, ExecutionContext } from '@nestjs/common'
import { NestInterceptor } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { map } from 'rxjs/operators'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((data) => {
        return data?.meta ? data : { data }
      }),
    )
  }
}
