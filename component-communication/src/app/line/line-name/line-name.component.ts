import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-line-name',
  templateUrl: './line-name.component.html',
  styleUrls: ['./line-name.component.css']
})
export class LineNameComponent implements OnInit {

  @Input()
  lineNameInner: string;

  @Output()
  pushDataEvent: EventEmitter<string>;

  constructor() {
    this.pushDataEvent = new EventEmitter<string>();
  }

  ngOnInit(): void {
    if (this.lineNameInner == undefined)
      this.lineNameInner = '';
  }

  sendLineName() {
    this.pushDataEvent.emit(this.lineNameInner);
  }

}
