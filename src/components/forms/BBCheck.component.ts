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
  selector: "bb-check",
  template: `
<label
  class="custom-control ui-checkbox"
  [class.form-group-required]="required"
  [class.has-danger]="model?.errors">
  <input
    id="{{name}}-id" class="custom-control-input"
    type="checkbox"
    [name]="name"
    [(ngModel)]="boolModelValue"
    [required]="required"
    [disabled]="disabled"
    (ngModelChange)="writeValue(boolModelValue)"
    [ngModelOptions]="{standalone: true}" />
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description"><ng-content></ng-content></span>
</label>
`,
  providers: [BBCheckModelValueAccessor],
})
export class BBCheckComponent extends BBCheckBase implements AfterViewInit {
  // required
  @Input() name: string;

  @Input() label: string;
  @Input() placeholder: string;

  ngOnInit(): void {
    this.placeholder = this.placeholder || "";
  }

  ngAfterViewInit(): void {
    if (!this.name) {
      throw new Error("bb-check: name is required");
    }
  }
}
