import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCustPage } from './dashboard-cust.page';

describe('DashboardCustPage', () => {
  let component: DashboardCustPage;
  let fixture: ComponentFixture<DashboardCustPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCustPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
