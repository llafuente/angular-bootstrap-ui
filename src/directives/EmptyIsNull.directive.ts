import { NgModel } from "@angular/forms";
import { Directive, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Rx";

@Directive({
  selector: '[empty-is-null][ngModel]'
})
export class EmptyIsNullDirective implements OnDestroy {
  subs: Subscription = null;

  constructor(private control: NgModel) {
    this.subs = this.control.update.subscribe((value) => {
      //console.log("old", this.control.value, "new", value);

      if (value === '') {
        //setTimeout(() => {
          this.control.viewToModelUpdate(null)
        //}, 0);
      }
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
