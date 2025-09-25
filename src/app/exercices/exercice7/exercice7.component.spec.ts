/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Exercice7Component } from './exercice7.component';

describe('Exercice7Component', () => {
  let component: Exercice7Component;
  let fixture: ComponentFixture<Exercice7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercice7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercice7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
