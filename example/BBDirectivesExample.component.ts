import { Component } from "@angular/core";

@Component({
  selector: "bb-directives-example-component",
  templateUrl: "./BBDirectivesExample.component.html",
})
export class BBDirectivesExampleComponent {
  example1: string;

  models = {
    number_no_comma: null,
    string_empty_null: null,
    integer: 100
  };
}
