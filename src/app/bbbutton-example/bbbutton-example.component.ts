import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-button-example-component',
  templateUrl: './bbbutton-example.component.html',
  styleUrls: ['./bbbutton-example.component.scss']
})
export class BBButtonExampleComponent implements OnInit {
  str: string;

  throwErr() {
    throw new Error("Shouldn't be clicked!!");
  }

  constructor() { }

  ngOnInit() {
  }

}
