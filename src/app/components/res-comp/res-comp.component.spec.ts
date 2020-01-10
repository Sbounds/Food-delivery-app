import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResCompPage } from './res-comp.page';

describe('ResCompPage', () => {
  let component: ResCompPage;
  let fixture: ComponentFixture<ResCompPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResCompPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResCompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
