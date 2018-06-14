import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-directives-example-component',
  templateUrl: './bbdirectives-example.component.html',
  styleUrls: ['./bbdirectives-example.component.scss']
})
export class BBDirectivesExampleComponent implements OnInit {
  example1: string;

  models = {
    number_no_comma: null,
    string_empty_null: null,
    integer: 100
  };

  constructor() { }

  ngOnInit() {
  }

}
