/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IhCComponent } from './ih-c.component';

describe('IhCComponent', () => {
  let component: IhCComponent;
  let fixture: ComponentFixture<IhCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
