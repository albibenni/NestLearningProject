import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  async getCourses() {
    return await this.courseService.getCourses();
  }
  @Get(':courseId')
  async getCourseById(@Param('courseId') courseId: string) {
    return await this.courseService.getCourseById(courseId);
  }

  @Post()
  async createCourse(@Body() createCourseDto: CreateCourseDto) {
    return await this.courseService.addCourse(createCourseDto);
  }
  @Delete()
  async deleteCourse(@Query() query: any) {
    return await this.courseService.deleteCourse(query.courseId);
  }
}
