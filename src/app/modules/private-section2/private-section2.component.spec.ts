import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSection2Component } from './private-section2.component';

describe('PrivateSection2Component', () => {
  let component: PrivateSection2Component;
  let fixture: ComponentFixture<PrivateSection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateSection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
