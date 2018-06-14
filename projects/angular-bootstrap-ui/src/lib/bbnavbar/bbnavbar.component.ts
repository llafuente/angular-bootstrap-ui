import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bb-navbar',
  templateUrl: './bbnavbar.component.html',
  styleUrls: ['./bbnavbar.component.css']
})
export class BBNavbarComponent implements OnInit {
  @Input() appName: string;

  constructor() { }

  ngOnInit() {
  }

}
