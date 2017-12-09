import { TestBed, inject } from '@angular/core/testing';

import { DatosEstadoService } from './datos-estado.service';

describe('DatosEstadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosEstadoService]
    });
  });

  it('should be created', inject([DatosEstadoService], (service: DatosEstadoService) => {
    expect(service).toBeTruthy();
  }));
});
