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
  AfterViewInit,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { NgModel } from "@angular/forms";
import {
  ComponentLoader,
  ComponentLoaderFactory,
  ModalBackdropComponent,
  TooltipDirective,
} from "ngx-bootstrap";

declare var jQuery;

const noop = () => {};
// tslint:disable-next-line:variable-name
const BBInputmodelVALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BBDatepickerComponent),
  multi: true,
};

@Component({
  selector: "bb-datepicker",
  template: `
<!--
  <div
  class="form-group">
  <label>Datepicker</label>

  <div class="form-control-container input-group">
-->

<ng-template #tolTemplate>
  <datepicker
    [(ngModel)]="dtModelValue"
    (ngModelChange)="writeValue(dtModelValue)"></datepicker>
  <div class="d-flex">
    <bb-button class="ml-auto" (click)="hideDatepicker()">{{ 'datepicker.close' | translate}}</bb-button>
    <!--
    <bb-button
      class="ml-auto"
      (click)="clearDatepicker()">{{ 'datepicker.clear' | translate}}</bb-button>
    -->
  </div>
</ng-template>

<bb-input-container
  [class]="containerClass"
  [addon]="true"
  [label]="label"
  [help]="help"
  [size]="size">
  <input
    id="{{name}}-id" class="form-control"
    type="text"
    [name]="name"
    [value]="modelValue ? (modelValue | date: format) : ''"
    [required]="required"
    [disabled]="disabled"
    (click)="showDatepicker()"
    #input=""
    bb-child="" />
  <div class="input-group-addon">
    <a
      [class.disabled]="disabled"
      (click)="showDatepicker()">
      <i
        class="fa fa-calendar"
        aria-hidden="true"></i>
    </a>

    <a
      [class.disabled]="disabled"
      (click)="clearDatepicker()">
      <i class="fa fa-times-circle"></i>

    </a>

    <div
      tooltipClass="datepicker-tooltip"
      #dpTooltip="bs-tooltip"
      triggers="focus"
      placement="left"
      [tooltip]="tolTemplate"></div>
  </div>
</bb-input-container>

<!--
  </div>
  <small *ngIf="help" id="{{name}}-help" class="form-text text-muted">{{help}}</small>

  </div>
-->
  `,
  providers: [BBInputmodelVALUE_ACCESSOR],
})

export class BBDatepickerComponent implements ControlValueAccessor, OnInit, OnChanges, AfterViewInit {
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

  ngAfterViewInit(): void {
    if (!this.name) {
      throw new Error("bb-datepicker: name is required");
    }
  }

  ngOnInit() {
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
    jQuery(this.backdropRef.instance.element.nativeElement).bind(
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
