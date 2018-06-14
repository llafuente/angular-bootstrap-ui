import {
  Component,
  ComponentRef,
  ElementRef,
  forwardRef,
  HostBinding,
  Input,
  OnInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { NgModel } from "@angular/forms";
import {
  ComponentLoader,
  ComponentLoaderFactory,
  ModalBackdropComponent,
  TooltipDirective,
} from "ngx-bootstrap";

import $ from "jquery";

const noop = () => {};
// tslint:disable-next-line:variable-name
const BBInputmodelVALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BBDatepickerComponent),
  multi: true,
};

@Component({
  selector: 'bb-datepicker',
  templateUrl: './bbdatepicker.component.html',
  styleUrls: ['./bbdatepicker.component.css'],

  providers: [BBInputmodelVALUE_ACCESSOR],
})
export class BBDatepickerComponent implements ControlValueAccessor, OnInit, OnChanges {
  // bbInputContainer
  @Input() label: string;
  @Input() help: string;
  @Input() size: string;
  @Input() containerClass: string = "";

  // required
  @Input() name: string;
  @Input() format: string = "yyyy-MM-dd";

  // optional
  @Input() placeholder: string;

  // validation
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;

  // backdrop
  private backdropRef: ComponentRef<ModalBackdropComponent>;
  private _backdropLoader: ComponentLoader<ModalBackdropComponent>;

  // ControlValueAccessor
  private _onTouchedCallback: () => void = noop;
  private _onChangeCallback: (_: any) => void = noop;
  modelValue: Date;
  dtModelValue: Date;

  @ViewChild(TooltipDirective) dpTooltip: TooltipDirective;

  public constructor(clf: ComponentLoaderFactory) {
    this._backdropLoader = clf.createLoader<ModalBackdropComponent>(
      null,
      null,
      null,
    );
  }

  ngOnInit() {
    if (!this.name) {
      throw new Error("bb-datepicker: name is required");
    }

    this.containerClass += " form-control-container always-focused";
  }

  showDatepicker() {
    this.dtModelValue = this.modelValue;

    this._backdropLoader
      .attach(ModalBackdropComponent)
      .to("body")
      .show({ isAnimated: true });
    this.backdropRef = this._backdropLoader._componentRef;
    // backdrop click close!
    $(this.backdropRef.instance.element.nativeElement).bind(
      "click",
      this.hideDatepicker.bind(this),
    );

    this.dpTooltip.show();
  }

  clearDatepicker() {
    this.dtModelValue = null;
    this.writeValue(null);
  }

  hideDatepicker() {
    if (this.backdropRef !== null) {
      this._backdropLoader.hide();
      this.backdropRef = null;
      this.dpTooltip.hide();
    }
  }

  // @ControlValueAccessor interface
  writeValue(value: any) {
    let eq = this.modelValue === value; // null === null
    if (!eq && this.modelValue instanceof Date && value instanceof Date) {
      eq = this.modelValue.getTime() === value.getTime();
    }

    if (!eq) {
      this.modelValue = value;
      this.hideDatepicker();
      this._onChangeCallback(value);
    }
  }

  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}
