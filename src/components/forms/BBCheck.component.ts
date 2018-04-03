import { Component, forwardRef, Input, AfterViewInit } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { BBCheckBase } from "./BBCheckBase";

// tslint:disable-next-line:variable-name
const BBCheckModelValueAccessor = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BBCheckComponent),
  multi: true,
};

@Component({
  selector: "bb-check", //  ui-checkbox
  template: `
<div class="custom-control custom-checkbox"
  [class.form-control-required]="required"
  [class.has-danger]="model?.errors">

  <input
    id="{{name}}-id" class="custom-control-input"
    type="checkbox"
    [attr.name]="name"
    [(ngModel)]="boolModelValue"
    [required]="required"
    [disabled]="disabled"
    (ngModelChange)="writeValue(boolModelValue)"
    [ngModelOptions]="{standalone: true}" />
  <label class="custom-control-label" [attr.for]="name + '-id'"><ng-content></ng-content></label>
  <span class="custom-control-label-indicator"></span>
</div>
`,
  providers: [BBCheckModelValueAccessor],
})
export class BBCheckComponent extends BBCheckBase implements AfterViewInit {
  // required
  @Input() name: string = null;

  @Input() label: string = null;

  ngAfterViewInit(): void {
    if (!this.name) {
      throw new Error("bb-check: name is required");
    }
  }
}
