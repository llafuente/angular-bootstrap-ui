import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bb-layout',
  templateUrl: './bblayout.component.html',
  styleUrls: ['./bblayout.component.css']
})
export class BBLayoutComponent implements OnInit {
  //@HostBinding("class.loading")
  @Input() footer = null; // sticky
  @Input() navbar = null; // sticky

  constructor() { }

  ngOnInit() {
  }

}
