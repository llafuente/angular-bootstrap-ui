import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { BBCheckBase } from "./BBCheckBase";

// styles from: https://github.com/yuyang041060120/angular2-ui-switch

const UI_SWITCH_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BBSwitchComponent),
  multi: true,
};
// TODO change support
@Component({
  selector: "bb-switch",
  template: `
<div class="form-group">
  <span
    class="switch"
    [class.checked]="boolModelValue"
    [class.disabled]="disabled"
    [class.switch-large]="size === 'large'"
    [class.switch-medium]="size === 'medium'"
    [class.switch-small]="size === 'small'"
    [style.background-color]="boolModelValue ? color : defaultBgColor"
    [style.border-color]="defaultBoColor"
    (click)="writeValue(!boolModelValue)">
    <small [style.background]="getSwitchColor()"></small>
  </span>
  <label
    *ngIf="boolModelValue"
    (click)="writeValue(!boolModelValue)">{{checkedMessage}}</label>
  <label
    *ngIf="!boolModelValue"
    (click)="writeValue(!boolModelValue)">{{uncheckedkMessage}}</label>
  <input
    id="{{name}}-id" class="custom-control-input"
    style="dispaly:none"
    type="checkbox"
    [name]="name"
    [(ngModel)]="boolModelValue"
    [required]="required"
    [disabled]="disabled"
    (ngModelChange)="writeValue(boolModelValue)"
    [ngModelOptions]="{standalone: true}" />
</div>
`,
  providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR],
})
export class BBSwitchComponent extends BBCheckBase {
  @Input()
  set disabled(v: boolean) {
    this._disabled = v !== false;
  }

  get disabled() {
    return this._disabled;
  }

  @Input()
  set reverse(v: boolean) {
    this._reverse = v !== false;
  }

  get reverse() {
    return this._reverse;
  }

  @Input() name: string = null;
  @Input() checkedMessage: string = null;
  @Input() uncheckedkMessage: string = null;

  @Input() size = "medium";
  @Output() change = new EventEmitter<boolean>();
  @Input() color = "rgb(100, 189, 99)";
  @Input() switchOffColor = "";
  @Input() switchColor = "#fff";
  defaultBgColor = "#fff";
  defaultBoColor = "#dfdfdf";

  private _disabled: boolean;
  private _reverse: boolean;

  getSwitchColor() {
    if (this.reverse) {
      return !this.boolModelValue
        ? this.switchColor
        : this.switchOffColor || this.switchColor;
    }
    return this.boolModelValue
      ? this.switchColor
      : this.switchOffColor || this.switchColor;
  }

  ngAfterViewInit() {
    if (!this.name) {
      throw new Error("bb-switch: name is required");
    }

    if (this.checkedMessage === null) {
      throw new Error("bb-switch requires checkedMessage");
    }

    if (this.uncheckedkMessage === null) {
      throw new Error("bb-switch requires uncheckedkMessage");
    }
  }
}
