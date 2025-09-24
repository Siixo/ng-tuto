/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TpComponent } from './tp.component';

describe('TpComponent', () => {
  let component: TpComponent;
  let fixture: ComponentFixture<TpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
