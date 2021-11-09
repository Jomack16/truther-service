import { Test, TestingModule } from '@nestjs/testing';
import { DenialService } from './denial.service';

describe('DenialService', () => {
  let service: DenialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DenialService],
    }).compile();

    service = module.get<DenialService>(DenialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
