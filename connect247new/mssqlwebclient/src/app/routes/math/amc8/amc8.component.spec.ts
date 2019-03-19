import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Amc8Component } from './amc8.component';

describe('Amc8Component', () => {
  let component: Amc8Component;
  let fixture: ComponentFixture<Amc8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Amc8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Amc8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
