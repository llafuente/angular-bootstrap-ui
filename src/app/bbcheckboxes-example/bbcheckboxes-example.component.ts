import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-checkboxes-example-component',
  templateUrl: './bbcheckboxes-example.component.html',
  styleUrls: ['./bbcheckboxes-example.component.scss']
})
export class BBCheckboxesExampleComponent implements OnInit {
  checkboxes: any = {
    check3: true,
  };
  switches: any = {};

  constructor() { }

  ngOnInit() {
  }

}
