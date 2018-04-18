import { Component } from "@angular/core";

@Component({
  selector: "bb-button-example-component",
  templateUrl: "./BBButtonExample.component.html",
})
export class BBButtonExampleComponent {
  str: string;

  throwErr() {
    throw new Error("Shouldn't be clicked!!");
  }
}
