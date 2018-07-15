/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FixInstrComponent } from './fix-instr.component';

describe('FixInstrComponent', () => {
  let component: FixInstrComponent;
  let fixture: ComponentFixture<FixInstrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixInstrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixInstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
