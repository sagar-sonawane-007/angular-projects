import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-line-data',
  templateUrl: './line-data.component.html',
  styleUrls: ['./line-data.component.css']
})
export class LineDataComponent implements OnInit {

  constructor(private router: Router) {
    console.log('LINE HERE: ' + this.router.url);
  }

  ngOnInit(): void {
  }

}
