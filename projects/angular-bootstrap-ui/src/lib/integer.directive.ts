import { Directive } from "@angular/core";

@Directive({
  selector:
    "input[integer]",
  host: {
    "(keydown)": "onKeydown($event)",
  },
})
export class IntegerDirective {
  onKeydown($event: KeyboardEvent) {
    if (
      // obviously prevent comma
      $event.key == "," ||
      // also prevent dot
      $event.key == "." ||
      // obviously prevent exponets
      $event.key == "e"
    ) {
      $event.preventDefault();
    }
  }
}
