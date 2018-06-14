import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-radios-example-component',
  templateUrl: './bbradios-example.component.html',
  styleUrls: ['./bbradios-example.component.scss']
})
export class BBRadiosExampleComponent implements OnInit {
  radios: any = {
    mixValues: true,
    inlineRadio: 1,
    disabledRadio: 2,
    requiredRadio: 2,
  };

  constructor() { }

  ngOnInit() {
  }

}
