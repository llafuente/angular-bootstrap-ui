import { Component } from "@angular/core";

/**
 * Component to identify a header, it does nothing special just a container
 */
@Component({
  selector: "bb-section-header",
  template: "<ng-content></ng-content>",
})
export class BBSectionHeaderComponent {}
