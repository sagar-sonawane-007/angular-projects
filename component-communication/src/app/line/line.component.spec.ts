import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LineDataComponent } from './line-data/line-data.component';
import { LineDescComponent } from './line-desc/line-desc.component';
import { LineNameComponent } from './line-name/line-name.component';

import { LineComponent } from './line.component';

describe('LineComponent', () => {
  let component: LineComponent;
  let fixture: ComponentFixture<LineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineComponent,
        LineNameComponent,
        LineDataComponent,
        LineDescComponent
      ],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
