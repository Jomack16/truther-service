import { Test, TestingModule } from '@nestjs/testing';
import { TruthController } from './truth.controller';

describe('TruthController', () => {
  let controller: TruthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TruthController],
    }).compile();

    controller = module.get<TruthController>(TruthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
