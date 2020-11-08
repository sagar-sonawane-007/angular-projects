import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineNameComponent } from './line-name.component';

describe('LineNameComponent', () => {
  let component: LineNameComponent;
  let fixture: ComponentFixture<LineNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
