import { Component, OnInit, Input } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";

@Component({
  selector: 'bb-router-change-loading',
  templateUrl: './bbrouter-change-loading.component.html',
  styleUrls: ['./bbrouter-change-loading.component.css']
})
export class BBRouterChangeLoadingComponent implements OnInit {
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

  ngOnInit() {
  }

}
