import { Component, OnInit, HostBinding, Input, forwardRef } from '@angular/core';
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
  selector: 'bb-radio',
  templateUrl: './bbradio.component.html',
  styleUrls: ['./bbradio.component.css'],

  providers: [BBRadioModelValueAccessor],
})
export class BBRadioComponent implements OnInit, ControlValueAccessor {
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

  ngOnInit() {
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
