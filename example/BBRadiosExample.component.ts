import { Component } from "@angular/core";

@Component({
  selector: "bb-radios-example-component",
  templateUrl: "./BBRadiosExample.component.html",
})
export class BBRadiosExampleComponent {
  radios: any = {
    mixValues: true,
    inlineRadio: 1,
    disabledRadio: 2,
    requiredRadio: 2,
  };
}
