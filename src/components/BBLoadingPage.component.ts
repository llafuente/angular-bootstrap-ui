import { Component, HostBinding, Input } from "@angular/core";

/**
 * Create a full screen loading and set a spinner in the middle while loading=true
 * loading=false hides everything
 */
@Component({
  selector: "bb-loading-page",
  template: `
<div class="bb-loading-page-container" *ngIf="loading">
  <div class="sk-circle">
    <div class="sk-circle1 sk-child"></div>
    <div class="sk-circle2 sk-child"></div>
    <div class="sk-circle3 sk-child"></div>
    <div class="sk-circle4 sk-child"></div>
    <div class="sk-circle5 sk-child"></div>
    <div class="sk-circle6 sk-child"></div>
    <div class="sk-circle7 sk-child"></div>
    <div class="sk-circle8 sk-child"></div>
    <div class="sk-circle9 sk-child"></div>
    <div class="sk-circle10 sk-child"></div>
    <div class="sk-circle11 sk-child"></div>
    <div class="sk-circle12 sk-child"></div>
  </div>
</div>
  `,
})
export class BBLoadingPageComponent {
  /** display loading? */
  @HostBinding("class.loading")
  @Input()
  loading = false;
}
