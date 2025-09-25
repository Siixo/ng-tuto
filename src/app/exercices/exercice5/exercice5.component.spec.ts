/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Exercice5Component } from './exercice5.component';

describe('Exercice5Component', () => {
  let component: Exercice5Component;
  let fixture: ComponentFixture<Exercice5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercice5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
