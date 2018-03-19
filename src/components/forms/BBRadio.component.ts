import { Component, forwardRef, HostBinding, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const noop = () => {};
// tslint:disable-next-line:variable-name
const BBRadioModelValueAccessor = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BBRadioComponent),
  multi: true,
};

@Component({
  selector: "bb-radio",
  template: `
<label
  class="custom-control ui-radio"
  (click)="clicked()">
  <input
    class="custom-control-input"
    type="radio"
    [name]="name"
    [value]="value"
    [checked]="isChecked()"
    [disabled]="disabled" />
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">
    <ng-content></ng-content>
  </span>
</label>

  `,
  providers: [BBRadioModelValueAccessor],
})
export class BBRadioComponent implements ControlValueAccessor {
  // required
  @Input() name: string;
  @Input() value: string | number;

  @HostBinding("class.disabled")
  @Input()
  disabled: boolean;

  private _onTouchedCallback: () => void = noop;
  private _onChangeCallback: (_: any) => void = noop;
  private modelValue: string | number = "";

  ngAfterViewInit(): void {
    if (!this.name) {
      throw new Error("bb-radio: name is required");
    }

    if (this.value === undefined) {
      throw new Error("bb-radio: value is required");
    }
  }

  clicked() {
    this.writeValue(this.value);
  }

  // @ControlValueAccessor interface
  writeValue(value: any) {
    this.modelValue = value;
    this._onChangeCallback(value);
  }

  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

  isChecked(): boolean {
    return this.modelValue == this.value;
  }
}
