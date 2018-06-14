import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'bb-footer',
  templateUrl: './bbfooter.component.html',
  styleUrls: ['./bbfooter.component.css']
})
export class BBFooterComponent implements OnInit {
  @Input() header: string;

  constructor() { }

  ngOnInit() {
  }

}
