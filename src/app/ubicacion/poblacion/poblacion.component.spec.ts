import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoblacionComponent } from './poblacion.component';

describe('PoblacionComponent', () => {
  let component: PoblacionComponent;
  let fixture: ComponentFixture<PoblacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoblacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoblacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
