import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "bb-footer",
  template: `
<footer class="container-fluid bg-light">
  <section class="container d-flex align-items-stretch">
    <ng-content></ng-content>
  </section>
</footer>
  `,
})
export class BBFooterComponent {
  @Input() header: string;
  @HostBinding("style.flex") private x = 1; // tslint:disable-line:no-unused-variable
}
