import { Component } from "@angular/core";

@Component({
  selector: "bb-alerts-example-component",
  templateUrl: "./BBAlertsExample.component.html",
})
export class BBAlertsExampleComponent {
  example1: string;

  alerts: string[] = [
    "default",
    "success",
    "info",
    "warning",
    "danger",
    "promo",
  ];
}
