import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";

import { plainToInstance } from "class-transformer";
import { map } from "rxjs";

interface ClassConstructor {
  new (...args: any): object;
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor) {}

  intercept(_context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((data) => {
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}
