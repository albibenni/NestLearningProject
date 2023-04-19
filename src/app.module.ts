import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { CreationModule } from './creation/creation.module';
import { NestCourseModule } from './nest-course/nest-course.module';
import { MessagesModule } from './nest-course/messages/messages.module';
import { Folder2Controller } from './folder1/folder2.controller';

@Module({
  imports: [CoursesModule, CreationModule, NestCourseModule, MessagesModule],
  controllers: [AppController, Folder2Controller],
  providers: [AppService],
})
export class AppModule {}
