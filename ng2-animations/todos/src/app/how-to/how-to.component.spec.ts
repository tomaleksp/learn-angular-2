/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HowToComponent } from './how-to.component';

describe('HowToComponent', () => {
  let component: HowToComponent;
  let fixture: ComponentFixture<HowToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
