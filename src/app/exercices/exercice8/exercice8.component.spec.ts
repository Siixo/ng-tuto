/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Exercice8Component } from './exercice8.component';

describe('Exercice8Component', () => {
  let component: Exercice8Component;
  let fixture: ComponentFixture<Exercice8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercice8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercice8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
