import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-alerts-example-component',
  templateUrl: './bbalerts-example.component.html',
  styleUrls: ['./bbalerts-example.component.scss']
})
export class BBAlertsExampleComponent implements OnInit {
  example1: string;

  alerts: string[] = [
    "default",
    "success",
    "info",
    "warning",
    "danger",
    "promo",
  ];

  constructor() { }

  ngOnInit() {
  }

}
