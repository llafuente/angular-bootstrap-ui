import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "bb-button",
  template: `
<button
  class="btn btn-{{btn}}"
  [class.input-aligned]="inputAligned"
  type="button"
  [class.disabled]="disabled"
  [disabled]="disabled">
  <ng-content></ng-content>
</button>
  `,
})
export class BBButtonComponent {
  @HostBinding("class.disabled")
  @Input()
  disabled: boolean;
  @Input() btn = "primary";
  /**
   * Align button to be vertical aligned with an input
   */
  @Input() inputAligned: boolean = false;
}
