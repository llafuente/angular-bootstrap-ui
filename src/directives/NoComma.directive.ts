import { Directive } from "@angular/core";

@Directive({
  selector:
    "[no-comma][formControlName],[no-comma][formControl],[no-comma][ngModel]",
  host: {
    "(keydown)": "onKeydown($event)",
  },
})
export class NoCommaDirective {
  onKeydown($event: KeyboardEvent) {
    if (
      // obviously prevent ,
      $event.key == "," ||
      // also prevent . if there is another one
      ($event.key == "." &&
        ($event.srcElement as HTMLInputElement).value.indexOf(".") !== -1)
    ) {
      $event.preventDefault();
    }
  }
}
