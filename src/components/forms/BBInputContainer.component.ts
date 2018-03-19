import { Component, HostBinding, Input } from "@angular/core";
import { BBChildComponent } from "./BBChild.component";

///
/// Component that wrap input element
///
@Component({
  selector: "bb-input-container",
  template: `
<div
  class="form-group"
  [class.form-group-required]="required"
  [class.form-group-disabled]="disabled"
  [class.has-sucess]="child.ngControl?.errors === null"
  [class.has-danger]="child.ngControl?.errors !== null">
  <label
    [class.form-label-lg]="size == 'lg'"
    [class.form-label-sm]="size == 'sm'"
    *ngIf="label?.length">{{label}}</label>
  <div
    class="form-control-container"
    [class.input-group]="addon || preAddon || postAddon">
    <div
      class="input-group-addon"
      *ngIf="preAddon">{{preAddon}}</div>
    <ng-content></ng-content>
    <div
      class="input-group-addon"
      *ngIf="postAddon">{{postAddon}}</div>
  </div>
  <small
    id="{{name}}-help" class="form-text text-muted"
    *ngIf="help">{{help}}</small>
</div>
`,
  host: {
    class: "form-control-container",
  },
})
export class BBInputContainerComponent {
  // optional
  @Input() label: string;

  @Input() inline: string;
  @Input() help: string;

  /**
   * Enable classes for group-addon on continer so you can
   * add a custom addon
   */
  @Input() addon: true;
  /**
   * Text before/left your control
   */
  @Input() preAddon: string;
  /**
   * Text after/right your control
   */
  @Input() postAddon: string;
  @Input() size: string;

  // validation
  public disabled: boolean;
  public required: boolean;

  @HostBinding("class.focused") focused = false;

  @HostBinding("class.notempty") notEmpty = false;

  child: BBChildComponent;

  ngOnInit(): void {
    // preAddong occupy the same space as label, so if found move label up
    this.notEmpty = !!this.preAddon;
  }

  setNotEmpty(b: boolean) {
    this.notEmpty = !!this.preAddon || b;
  }

  ngAfterViewInit(): void {
    if (this.size && ["sm", "lg"].indexOf(this.size) === -1) {
      throw new Error("bb-input-container: size must be sm or lg");
    }

    if (!this.child) {
      throw new Error("bb-input-container requires a bb-child children");
    }
  }
}
