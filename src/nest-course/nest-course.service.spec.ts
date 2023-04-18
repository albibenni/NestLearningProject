import { Test, TestingModule } from '@nestjs/testing';
import { NestCourseService } from './nest-course.service';

describe('NestCourseService', () => {
  let service: NestCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestCourseService],
    }).compile();

    service = module.get<NestCourseService>(NestCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
