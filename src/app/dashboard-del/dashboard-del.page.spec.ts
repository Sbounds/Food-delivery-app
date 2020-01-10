import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDelPage } from './dashboard-del.page';

describe('DashboardDelPage', () => {
  let component: DashboardDelPage;
  let fixture: ComponentFixture<DashboardDelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
