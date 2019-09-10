import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdpostPage } from './adpost.page';

describe('AdpostPage', () => {
  let component: AdpostPage;
  let fixture: ComponentFixture<AdpostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdpostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
