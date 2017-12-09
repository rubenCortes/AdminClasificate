import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoRegionComponent } from './estado-region.component';

describe('EstadoRegionComponent', () => {
  let component: EstadoRegionComponent;
  let fixture: ComponentFixture<EstadoRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
