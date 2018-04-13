import { Component, HostBinding, Input } from "@angular/core";


/**
 * Animated progress bar
 */
@Component({
  selector: "bb-progress",
  template: `
  <div class="progress progress-loop">
    <div class="progress-bar progress-bar-animated" role="progressbar"></div>
    <div class="progress-bar progress-bar-animated" role="progressbar"></div>
    <div class="progress-bar progress-bar-animated" role="progressbar"></div>
  </div>
  `,
})
export class BBProgressComponent {}
