import { Test, TestingModule } from '@nestjs/testing';
import { TruthService } from './truth.service';

describe('TruthService', () => {
  let service: TruthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TruthService],
    }).compile();

    service = module.get<TruthService>(TruthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
