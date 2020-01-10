import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResPage } from './dashboard-res.page';

describe('DashboardResPage', () => {
  let component: DashboardResPage;
  let fixture: ComponentFixture<DashboardResPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
