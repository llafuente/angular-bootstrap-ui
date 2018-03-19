import { Component, Input } from "@angular/core";

@Component({
  selector: "bb-navbar",
  template: `
<header>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand p-0" href="#">
        <i class="brand-icon"></i>
        <span class="app-icon"></span>
        <span class="app-name">{{appName}}</span>
      </a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <ng-content select=".nav-item.left"></ng-content>
        </ul>
        <ul class="navbar-nav">
          <ng-content select=".nav-item.right"></ng-content>
        </ul>
      </div>
    </div>
  </nav>
</header>
  `, // <ng-content select="bb-nav-right"></ng-content>
})
export class BBNavbarComponent {
  @Input() appName: string;
}
