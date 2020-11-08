import { Component, OnInit, ViewChild } from '@angular/core';
import { LineDataComponent } from './line-data/line-data.component';
import { LineDescComponent } from './line-desc/line-desc.component';
import { LineNameComponent } from './line-name/line-name.component';
import { LineModel } from './line.model';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  lineData: LineModel;

  @ViewChild(LineNameComponent) child1: LineNameComponent;
  @ViewChild(LineDataComponent) child2: LineDataComponent;
  @ViewChild(LineDescComponent) child3: LineDescComponent;

  constructor() { }

  ngOnInit(): void {
    this.lineData = { lineName: 'name1', plant: 'plant1', technology: 'tech1', line: 'line1', description: 'desc1' };
  }

  sendMessage() {
    this.child1.sendLineName();
    this.child2.sendLineData();
    this.child3.sendLineDesc();
  }

  getLineName(lineName: string) {
    this.lineData.lineName = lineName;
    console.log('after 1 : ' + JSON.stringify(this.lineData));
  }

  getLineData(lineDataFromEvent: LineModel) {
    this.lineData.plant = lineDataFromEvent.plant;
    this.lineData.technology = lineDataFromEvent.technology;
    this.lineData.line = lineDataFromEvent.line;
    console.log('after 2 : ' + JSON.stringify(this.lineData));
  }

  getLineDesc(lineDesc: string) {
    this.lineData.description = lineDesc;
    console.log('after 3 : ' + JSON.stringify(this.lineData));
  }
} 
