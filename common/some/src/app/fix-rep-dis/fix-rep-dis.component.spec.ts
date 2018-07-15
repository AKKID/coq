/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FixRepDisComponent } from './fix-rep-dis.component';

describe('FixRepDisComponent', () => {
  let component: FixRepDisComponent;
  let fixture: ComponentFixture<FixRepDisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixRepDisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixRepDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
