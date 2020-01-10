import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelResAddCompPage } from './del-res-add-comp.page';

describe('DelResAddCompPage', () => {
  let component: DelResAddCompPage;
  let fixture: ComponentFixture<DelResAddCompPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelResAddCompPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelResAddCompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
