import { Component } from "@angular/core";
/**
 * Create a page section
 *
 * Valid children
 * * bb-section-header
 * * bb-section-content
 * * bb-section-footer
 */
@Component({
  selector: "bb-section",
  template: `
<section class="container">
  <h1>
    <ng-content select="bb-section-header">
    </ng-content>
  </h1>

  <ng-content select="bb-section-content">
  </ng-content>

  <ng-content select="bb-section-footer">
  </ng-content>
</section>
`,
})
export class BBSectionComponent {}
