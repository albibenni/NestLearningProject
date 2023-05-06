import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { CreationModule } from './creation/creation.module';
import { NestCourseModule } from './nest-course/nest-course.module';
import { MessagesModule } from './nest-course/messages/messages.module';
import { Folder2Controller } from './folder1/folder2.controller';
import { UsersModule } from './myCV/users/users.module';
import { ReportsModule } from './myCV/reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './myCV/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User], // our entities
      synchronize: true,
    }),
    CoursesModule,
    CreationModule,
    NestCourseModule,
    MessagesModule,
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController, Folder2Controller],
  providers: [AppService],
})
export class AppModule {}
