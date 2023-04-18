import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { CreationModule } from './creation/creation.module';
import { NestCourseModule } from './nest-course/nest-course.module';

@Module({
  imports: [CoursesModule, CreationModule, NestCourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
