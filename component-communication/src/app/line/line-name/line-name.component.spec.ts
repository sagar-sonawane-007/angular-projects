import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LineNameComponent } from './line-name.component';

describe('LineNameComponent', () => {
  let component: LineNameComponent;
  let fixture: ComponentFixture<LineNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineNameComponent],
      imports: [FormsModule]
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
