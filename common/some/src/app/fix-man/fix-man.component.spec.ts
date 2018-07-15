/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FixManComponent } from './fix-man.component';

describe('FixManComponent', () => {
  let component: FixManComponent;
  let fixture: ComponentFixture<FixManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
