import { Component, HostBinding, Input } from "@angular/core";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";

@Component({
  selector: "bb-router-change-loading",
  template: `
<bb-loading-page [loading]="routerChanging"></bb-loading-page>
  `,
})
export class BBRouterChangeLoadingComponent {
  @Input() delay = 500;
  delayChange: any;
  routerChanging: boolean = false;

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.delayChange = setTimeout(() => {
          this.routerChanging = true;
        }, this.delay);
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        clearTimeout(this.delayChange);
        this.routerChanging = false;
      }
    });
  }
}
