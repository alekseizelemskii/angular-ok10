/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FullUserComponent } from './full-user.component';

describe('FullUserComponent', () => {
  let component: FullUserComponent;
  let fixture: ComponentFixture<FullUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
