import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { CreationController } from './creation/creation.controller';
import { CreationModule } from './creation/creation.module';

@Module({
  imports: [CoursesModule, CreationModule],
  controllers: [AppController, CreationController],
  providers: [AppService],
})
export class AppModule {}
