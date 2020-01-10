import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCompletedPage } from './dashboard-completed.page';

describe('DashboardCompletedPage', () => {
  let component: DashboardCompletedPage;
  let fixture: ComponentFixture<DashboardCompletedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCompletedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCompletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
