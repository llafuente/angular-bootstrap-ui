import {
  ChangeDetectorRef,
  Pipe,
  PipeTransform,
  OnDestroy,
  WrappedValue
} from "@angular/core";
import { Subject, Subscription } from "rxjs";

@Pipe({
  name: "isError",
  pure: false
})
export class IsErrorPipe implements OnDestroy, PipeTransform {
  result: Error = null;
  subject: Subject<any> = null;
  subscription: Subscription = null;

  constructor(private _ref: ChangeDetectorRef) {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  transform(value: Subject<any>): boolean | null {
    if (!this.subject) {
      if (value instanceof Subject) {
        this.subject = value;
        this.subscription = value.subscribe(
          response => {
            //console.log("IsErrorPipe.success", response);
            this.result = null;
            this._ref.markForCheck();
          },
          error => {
            //console.log("IsErrorPipe.error", error);
            this.result = error;
            this._ref.markForCheck();
          }
        );
      }
    } else if (value !== this.subject) {
      this.subscription.unsubscribe();
      this.subject = null;
      this.result = null;
      return this.transform(value);
    }

    return !!this.result;
  }
}
