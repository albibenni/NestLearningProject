import { Module } from '@nestjs/common';
import { CreationService } from './creation.service';

@Module({
  providers: [CreationService],
})
export class CreationModule {}
