import { Component, forwardRef, HostBinding, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const noop = () => {};
// tslint:disable-next-line:variable-name
const BBRadioModelValueAccessor = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BBRadioComponent),
  multi: true,
};
// autoid counter
let autoid = 0;

/**
 * Note: bb-radio don't have required itself
 * because there is no a good way to position the asterisk
 */
@Component({
  selector: "bb-radio",
  template: `
<div class="custom-control custom-radio"
  [class.form-control-required]="required">

  <input
    [id]="id"
    class="custom-control-input"
    type="radio"
    [attr.name]="name"
    [value]="value"
    [checked]="isChecked()"
    [disabled]="disabled"
    [required]="required" />
  <label (click)="clicked()" class="custom-control-label" [attr.for]="id"><ng-content></ng-content></label>
</div>
  `,
  providers: [BBRadioModelValueAccessor],
})
export class BBRadioComponent implements ControlValueAccessor {
  @Input() name: string;
  @Input() value: string | number;

  @Input() required: boolean;

  @HostBinding("class.disabled")
  @Input()
  disabled: boolean;

  @Input()
  id: string = null;

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

    if (!this.id) {
      this.id = this.name + (++autoid);
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
