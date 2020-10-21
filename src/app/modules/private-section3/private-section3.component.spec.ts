import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSection3Component } from './private-section3.component';

describe('PrivateSection3Component', () => {
  let component: PrivateSection3Component;
  let fixture: ComponentFixture<PrivateSection3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateSection3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
