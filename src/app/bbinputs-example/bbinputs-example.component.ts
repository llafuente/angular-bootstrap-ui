import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-inputs-example-component',
  templateUrl: './bbinputs-example.component.html',
  styleUrls: ['./bbinputs-example.component.scss']
})
export class BBInputsExampleComponent implements OnInit {

  inputs: any = {
    isDisabled: true,
    isRequired: true,
  };
  entity: any = {
    textarea: `
      Bacon ipsum dolor amet cow short ribs jowl ribeye fatback.
      Pork spare ribs boudin kevin capicola sirloin leberkas flank cow pig.
      Leberkas frankfurter bresaola chicken ground round porchetta, tri-tip filet mignon alcatra short loin pig rump pork loin kielbasa.
      Doner bacon fatback, shank spare ribs shoulder sirloin pork filet mignon.
      Corned beef beef spare ribs, cow prosciutto pig kevin andouille tongue capicola jerky pork rump ribeye filet mignon.
      Turducken shoulder burgdoggen, tail beef jerky chuck corned beef boudin pork belly swine.
      `,
  };

  selectValues = [
    {
      a: 1,
      b: 2,
    },
    {
      a: 1,
      b: 3,
    },
    {
      a: 1,
      b: 4,
    },
  ];

  selectValue = {
    a: 1,
    b: 2,
  };

  constructor() { }

  selectCompare(a, b) {
    if (a === null && b !== null) {
      return false;
    }
    if (a !== null && b === null) {
      return false;
    }

    return a.a == b.a && a.b == b.b;
  }

  ngOnInit() {
  }

}
