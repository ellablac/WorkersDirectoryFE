import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeePositionComponent } from './emplyee-position.component';

describe('EmplyeePositionComponent', () => {
  let component: EmplyeePositionComponent;
  let fixture: ComponentFixture<EmplyeePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplyeePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplyeePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
