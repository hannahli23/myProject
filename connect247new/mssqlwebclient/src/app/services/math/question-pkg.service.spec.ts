import { TestBed, inject } from '@angular/core/testing';

import { QuestionPkgService } from './question-pkg.service';

describe('QuestionPkgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionPkgService]
    });
  });

  it('should be created', inject([QuestionPkgService], (service: QuestionPkgService) => {
    expect(service).toBeTruthy();
  }));
});
