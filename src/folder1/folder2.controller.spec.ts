import { Test, TestingModule } from '@nestjs/testing';
import { Folder2Controller } from './folder2.controller';

describe('Folder2Controller', () => {
  let controller: Folder2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Folder2Controller],
    }).compile();

    controller = module.get<Folder2Controller>(Folder2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
