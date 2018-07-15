/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DQSignOffComponent } from './dqsign-off.component';

describe('DQSignOffComponent', () => {
  let component: DQSignOffComponent;
  let fixture: ComponentFixture<DQSignOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DQSignOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DQSignOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
