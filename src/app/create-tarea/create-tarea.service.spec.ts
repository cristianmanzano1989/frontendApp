import { TestBed } from '@angular/core/testing';

import { CreateTareaService } from './create-tarea.service';

describe('CreateTareaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateTareaService = TestBed.get(CreateTareaService);
    expect(service).toBeTruthy();
  });
});
