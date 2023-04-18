import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';

@Injectable()
export class CoursesService {
  mockData = COURSES;

  getCourses(): Promise<any> {
    return Promise.resolve(this.mockData);
  }

  getCourseById(courseId): Promise<any> {
    const id = Number(courseId);
    const course = this.mockData.filter((singleData) => {
      if (singleData.id === id) return singleData;
    });
    return new Promise((resolve) => {
      if (!course) throw new HttpException('Course does not exist', 404);
      resolve(course);
    });
  }

  addCourse(course): Promise<any> {
    return new Promise((resolve) => {
      this.mockData.push(course);
      resolve(this.mockData);
    });
  }

  deleteCourse(courseId): Promise<any> {
    const id = Number(courseId);
    const index = this.mockData.findIndex((course) => {
      if (course.id === id) return course;
    });
    return new Promise((resolve) => {
      if (index === -1) throw new HttpException('Course does not exist', 404);
      this.mockData.splice(index, 1);
      resolve(this.mockData);
    });
  }
}
