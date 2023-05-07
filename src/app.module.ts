import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { NestCourseModule } from './nest-course/nest-course.module';
import { MessagesModule } from './nest-course/messages/messages.module';
import { UsersModule } from './myCV/users/users.module';
import { ReportsModule } from './myCV/reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './myCV/users/user.entity';
import { Report } from './myCV/reports/report.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Report], // our entities
      synchronize: true,
    }),
    CoursesModule,
    NestCourseModule,
    MessagesModule,
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
