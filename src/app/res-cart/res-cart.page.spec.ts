import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResCartPage } from './res-cart.page';

describe('ResCartPage', () => {
  let component: ResCartPage;
  let fixture: ComponentFixture<ResCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResCartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
