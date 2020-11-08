import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LineDataComponent } from './line-data.component';

describe('LineDataComponent', () => {
  let component: LineDataComponent;
  let fixture: ComponentFixture<LineDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineDataComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
