import { Module } from '@nestjs/common';
import { TransformInterceptor } from './interceptors/transform.interceptor';

@Module({
  providers: [TransformInterceptor],
})
export class UtilsModule {}
