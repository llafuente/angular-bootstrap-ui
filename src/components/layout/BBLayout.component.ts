import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "bb-layout",
  template: `
<div id="page-content-wrapper">
  <div class="navbar-placeholder"></div>
  <ng-content select="bb-navbar"></ng-content>

  <ng-content select="bb-section-content"></ng-content>

  <div class="footer-placeholder"></div>
  <ng-content select="bb-footer"></ng-content>
</div>
  `,
})
export class BBLayoutComponent {
  //@HostBinding("class.loading")
  @Input() footer = null; // sticky
  @Input() navbar = null; // sticky
}
