import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineNameComponent } from './line-name/line-name.component';
import { LineDataComponent } from './line-data/line-data.component';
import { LineDescComponent } from './line-desc/line-desc.component';
import { LineComponent } from './line.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LineNameComponent, LineDataComponent, LineDescComponent, LineComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [LineComponent]
})
export class LineModule { }
