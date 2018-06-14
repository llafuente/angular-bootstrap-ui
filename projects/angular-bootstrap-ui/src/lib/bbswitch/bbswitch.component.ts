import { Component, OnInit, Input, Output, forwardRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { BBCheckBase } from "../bbcheck-base";

const UI_SWITCH_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BBSwitchComponent),
  multi: true,
};

@Component({
  selector: 'bb-switch',
  templateUrl: './bbswitch.component.html',
  styleUrls: ['./bbswitch.component.css'],

  providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR],
})
export class BBSwitchComponent extends BBCheckBase implements OnInit {
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

  ngOnInit() {
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
