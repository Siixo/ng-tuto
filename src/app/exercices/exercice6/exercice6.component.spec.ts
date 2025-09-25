/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Exercice6Component } from './exercice6.component';

describe('Exercice6Component', () => {
  let component: Exercice6Component;
  let fixture: ComponentFixture<Exercice6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercice6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
