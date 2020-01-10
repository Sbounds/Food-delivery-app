import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusHistoryPage } from './cus-history.page';

describe('CusHistoryPage', () => {
  let component: CusHistoryPage;
  let fixture: ComponentFixture<CusHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusHistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
