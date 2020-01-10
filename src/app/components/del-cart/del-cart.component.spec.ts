import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelCartPage } from './del-cart.page';

describe('DelCartPage', () => {
  let component: DelCartPage;
  let fixture: ComponentFixture<DelCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelCartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
