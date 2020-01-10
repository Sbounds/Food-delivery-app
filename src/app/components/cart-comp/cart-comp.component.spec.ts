import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCompPage } from './cart-comp.page';

describe('CartCompPage', () => {
  let component: CartCompPage;
  let fixture: ComponentFixture<CartCompPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCompPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
