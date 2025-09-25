/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Exercice1Component } from './exercice1.component';

describe('Exercice1Component', () => {
  let component: Exercice1Component;
  let fixture: ComponentFixture<Exercice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
