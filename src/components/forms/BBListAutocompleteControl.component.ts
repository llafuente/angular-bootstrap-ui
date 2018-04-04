import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { NgModel } from "@angular/forms";

const noop = () => {};
// tslint:disable-next-line:variable-name
const BBStringListModelValueAccessor = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BBListAutocompleteControlComponent),
  multi: true,
};

// TODO the first to add something ngx-bootstrap fail, why?

// abstract component

@Component({
  selector: "bb-autocomplete-list",
  template: `


<bb-static [label]="label">

  <div class="d-flex flex-wrap">
    <div class="d-inline-flex align-items-center p-2" *ngFor="let val of modelValue; let i = index">
      <span class="pr-1">{{val}}</span>
      <a [class.disabled]="disabled" (click)="removeString(i)">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
      </a>
    </div>

    <div class="d-inline-flex align-items-center p-2" *ngIf="!modelValue?.length">
      <alert type="info">
        {{emptyMessage}}
      </alert>
    </div>

    <div class="d-inline-flex align-items-center p-2">
      <input
        class="form-control d-inline-flex"
        type="text"
        [name]="name"
        id="{{name}}-id"
        [(ngModel)]="str"
        [disabled]="disabled"
        [typeahead]="typeahead"
        [typeaheadItemTemplate]="typeaheadItemTemplate"
        (keydown)="onKeyDown($event)"
        autocomplete="off"
        #input
        />

        <bb-button [disabled]="disabled || !str.length" (click)="addString()">{{buttonLabel}}</bb-button>

    </div>
  </div>

</bb-static>
  `,
  providers: [BBStringListModelValueAccessor],
})
export class BBListAutocompleteControlComponent implements ControlValueAccessor {
  // validation
  @Input() label: string;
  @Input() inputLabel: string;
  @Input() emptyMessage: string = null;
  @Input() buttonLabel: string = "Add";
  @Input() help: string;
  @Input() size: string;

  @Input() name: string; // really ?

  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() unique: boolean;

  @Input() typeahead: any[];
  @Input() typeaheadItemTemplate;

  @Output() onAdd: EventEmitter<string> = new EventEmitter<string>();
  @Output() onRemove: EventEmitter<string> = new EventEmitter<string>();

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

  onKeyDown($event) {
    if ($event.key == "Enter") {
      setTimeout(() => {
        this.addString();
      }, 250);
    }
  }

  removeString(idx: number) {
    const v = this.modelValue.splice(idx, 1);
    this.onRemove.next(v[0]);

    this.writeValue(this.modelValue);
  }
}
