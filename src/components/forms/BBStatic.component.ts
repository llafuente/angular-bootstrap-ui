import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "bb-static",
  template: `
<div class="form-group">
  <label
    [class.form-label-lg]="size == 'lg'"
    [class.form-label-sm]="size == 'sm'"
    *ngIf="label?.length">{{label}}</label>
  <div class="form-control-container">
    <p class="form-control-static">
      <ng-content></ng-content>
    </p>
  </div>
  <small
    class="form-text text-muted"
    *ngIf="help">{{help}}</small>
</div>
`,
  host: {
    class: "form-control-container focused",
  },
})
export class BBStaticComponent {
  // optional
  @Input() label: string;

  @Input() size: string;
  @Input() inline: string;
  @Input() help: string;

  @HostBinding("class.notempty") @Input() align = false;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.size && ["sm", "lg"].indexOf(this.size) === -1) {
      throw new Error("bb-input: size must be sm or lg");
    }
  }
}
