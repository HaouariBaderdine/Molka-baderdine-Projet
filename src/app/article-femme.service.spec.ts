import { TestBed } from '@angular/core/testing';

import { ArticleFemmeService } from './article-femme.service';

describe('ArticleFemmeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleFemmeService = TestBed.get(ArticleFemmeService);
    expect(service).toBeTruthy();
  });
});
