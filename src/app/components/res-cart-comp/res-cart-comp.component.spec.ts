import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResCartCompPage } from './res-cart-comp.page';

describe('ResCartCompPage', () => {
  let component: ResCartCompPage;
  let fixture: ComponentFixture<ResCartCompPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResCartCompPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResCartCompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
