import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
  OnInit,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { NgModel } from "@angular/forms";

const noop = () => {};
// tslint:disable-next-line:variable-name
const BBStringListModelValueAccessor = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BBStringListControlComponent),
  multi: true,
};

@Component({
  selector: 'bb-string-list',
  templateUrl: './bbstring-list-control.component.html',
  styleUrls: ['./bbstring-list-control.component.css'],

  providers: [BBStringListModelValueAccessor],
})
export class BBStringListControlComponent implements OnInit, ControlValueAccessor {
  // validation
  @Input() label: string;
  @Input() inputLabel: string;
  @Input() buttonLabel: string = "Add";
  @Input() help: string;
  @Input() size: string;

  @Input() name: string; // really ?

  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() unique: boolean;

  @Output() onAdd: EventEmitter<string> = new EventEmitter<string>();
  @Output() onRemove: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(NgModel) model: NgModel;
  str: string = "";
  modelValue: string[];

  _onTouchedCallback: () => void = noop;
  _onChangeCallback: (_: any) => void = noop;

  writeValue(value: any) {
    this.modelValue = value;

    this._onChangeCallback(this.modelValue);
  }

  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

  addString() {
    if (!this.modelValue || !Array.isArray(this.modelValue)) {
      this.modelValue = [];
    }
    if (this.unique) {
      if (this.modelValue.indexOf(this.str) === -1) {
        this.modelValue.push(this.str);
        this.onAdd.next(this.str);
      }
    } else {
      this.modelValue.push(this.str);
      this.onAdd.next(this.str);
    }

    this.writeValue(this.modelValue);
    this.str = ""; // reset
  }

  removeString(idx: number) {
    const v = this.modelValue.splice(idx, 1);
    this.onRemove.next(v[0]);

    this.writeValue(this.modelValue);
  }

  ngOnInit() {
  }

}
