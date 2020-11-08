import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LineDescComponent } from './line-desc.component';

describe('LineDescComponent', () => {
  let component: LineDescComponent;
  let fixture: ComponentFixture<LineDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineDescComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
