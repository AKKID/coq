/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FixRepComponent } from './fix-rep.component';

describe('FixRepComponent', () => {
  let component: FixRepComponent;
  let fixture: ComponentFixture<FixRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
