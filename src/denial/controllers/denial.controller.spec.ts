import { Test, TestingModule } from '@nestjs/testing';
import { DenialController } from './denial.controller';

describe('DenialController', () => {
  let controller: DenialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DenialController],
    }).compile();

    controller = module.get<DenialController>(DenialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
