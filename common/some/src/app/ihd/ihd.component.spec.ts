/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IhdComponent } from './ihd.component';

describe('IhdComponent', () => {
  let component: IhdComponent;
  let fixture: ComponentFixture<IhdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
