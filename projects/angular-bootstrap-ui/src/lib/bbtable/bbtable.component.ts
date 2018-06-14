import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bb-table',
  templateUrl: './bbtable.component.html',
  styleUrls: ['./bbtable.component.css']
})
export class BBTableComponent implements OnInit {
  @Input() condensed: boolean;
  @Input() dark: boolean;
  @Input() striped = true;
  @Input() bordered = true;
  @Input() hover = true;

  constructor() { }

  ngOnInit() {
  }

}
