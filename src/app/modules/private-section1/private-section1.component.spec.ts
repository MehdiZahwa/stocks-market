import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSection1Component } from './private-section1.component';

describe('PrivateSection1Component', () => {
  let component: PrivateSection1Component;
  let fixture: ComponentFixture<PrivateSection1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateSection1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
