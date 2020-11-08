import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-line-desc',
  templateUrl: './line-desc.component.html',
  styleUrls: ['./line-desc.component.css']
})
export class LineDescComponent implements OnInit {

  @Input()
  lineDescInner: string;

  @Output()
  pushDataEvent: EventEmitter<string>;

  constructor() {
    this.pushDataEvent = new EventEmitter<string>();
  }

  ngOnInit(): void {
    if (this.lineDescInner == undefined)
      this.lineDescInner = '';
  }

  sendLineDesc() {
    this.pushDataEvent.emit(this.lineDescInner);
  }

}
