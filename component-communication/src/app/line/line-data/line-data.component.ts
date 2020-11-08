import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LineModel } from '../line.model';

@Component({
  selector: 'app-line-data',
  templateUrl: './line-data.component.html',
  styleUrls: ['./line-data.component.css']
})
export class LineDataComponent implements OnInit {

  @Input()
  plantInner: string;
  @Input()
  technologyInner: string;
  @Input()
  lineInner: string;
  plants: string[];

  @Output()
  pushDataEvent: EventEmitter<LineModel>;

  constructor() {
    this.pushDataEvent = new EventEmitter<LineModel>();
  }

  ngOnInit(): void {

    this.plants = ['plant1', 'plant2', 'plant3', 'plant4', 'plant5'];

    if (this.plantInner == undefined)
      this.plantInner = '';
    if (this.technologyInner == undefined)
      this.technologyInner = '';
    if (this.lineInner == undefined)
      this.lineInner = '';
  }

  sendLineData() {
    this.pushDataEvent.emit({ plant: this.plantInner, technology: this.technologyInner, line: this.lineInner });
  }
}
