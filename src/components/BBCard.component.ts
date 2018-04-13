import { Component, HostBinding, Input } from "@angular/core";

// NOTE all whitespace removal (no identation) it's on purpose
// to support css :empty

/**
 * Create a Card
 */
@Component({
  selector: "bb-card",
  template: `
<div class="card d-flex flex-column" style="flex: 1">
  <div class="card-header">
    <h2 *ngIf="header">{{header}}</h2>
    <ng-content *ngIf="!header" select="bb-section-header"></ng-content>
  </div>

  <div class="card-body"><ng-content select="bb-section-content"></ng-content></div>

  <div class="card-footer mt-auto"><ng-content select="bb-section-footer"></ng-content></div>
</div>

  `,
})
export class BBCardComponent {
  /** header text */
  @Input() header: string;
  @HostBinding("style.flex") private x = 1; // tslint:disable-line:no-unused-variable
}
