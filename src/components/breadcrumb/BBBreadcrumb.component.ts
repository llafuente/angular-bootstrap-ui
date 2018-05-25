import { Component, Input, OnInit, Injector, Type } from "@angular/core";
import { Router, ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Params, PRIMARY_OUTLET, Route, ResolveData, LoadChildren, RunGuardsAndResolvers } from "@angular/router";
import "rxjs/add/operator/filter";

export declare type BreadcrumbCallback =
  (router: ActivatedRouteSnapshot) => string;

export interface IBreadcrumb {
  label: string;
  // params: Params;
  // url: string;
  routerLink: any[];
};

/**
 * This is a ripped interface from @angular/router because cannot override
 * types in the interface
 * Use it until it gives you problems :)
 */
export interface RouteWithBreadcrumbs {
  path?: string;
  pathMatch?: string;
  //matcher?: UrlMatcher; // this isn't exported by @angular/router...
  component?: Type<any>;
  redirectTo?: string;
  outlet?: string;
  canActivate?: any[];
  canActivateChild?: any[];
  canDeactivate?: any[];
  canLoad?: any[];
  data?: {
    breadcrumb?: string | BreadcrumbCallback,
    breadcrumbLink?: boolean,
    [name: string]: any;
  },
  resolve?: ResolveData;
  children?: RouteWithBreadcrumbs[];
  loadChildren?: LoadChildren;
  runGuardsAndResolvers?: RunGuardsAndResolvers;
};
export declare type RoutesWithBreadcrumbs = RouteWithBreadcrumbs[];

/**
 * Reverse ActivatedRoute and return the first non-undefined key in params
 */
export function getFromResolve<T>(snapshot: ActivatedRouteSnapshot, key: string): T {
  do {
    const d = snapshot.data;

    if (d && d[key] !== undefined) {
      return d[key] as T;
    }

    snapshot = snapshot.parent;
  } while (snapshot);

  return null;
}

const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
const ROUTE_DATA_BREADCRUMBLINK: string = "breadcrumbLink";

// NOTE active class cannot be used, because all is active ^.^
// router.isActive(breadcrumb.url)
// routerLinkActive="active"
@Component({
  selector: "bb-breadcrumb",
  template: `
<ol class="breadcrumb" *ngIf="!(hideIfEmpty && breadcrumbs.length == 0)">
  <li class="breadcrumb-item" *ngFor="let breadcrumb of breadcrumbs" tooltip="{{ breadcrumb.label | translate }}">
    <a *ngIf="breadcrumb.routerLink" [routerLink]="breadcrumb.routerLink">{{ breadcrumb.label | translate }}</a>
    <span *ngIf="!breadcrumb.routerLink">{{ breadcrumb.label | translate }}</span>
  </li>
</ol>
  `
})
export class BreadcrumbComponent implements OnInit {
  /**
   * Ignore the first X levels. Usefull when everything is under a section
   * but you don't want to be displayed
   */
  @Input() ignoredLevels: number = 0;
  @Input() hideIfEmpty: boolean = true;

  breadcrumbs: IBreadcrumb[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public injector: Injector,
  ) {}

  /**
   * Listen to NavigationEnd events
   */
  ngOnInit() {
    // subscribe to the NavigationEnd event
    this.router.events.filter(event => event instanceof NavigationEnd)
    .subscribe((event: NavigationEnd) => {
      // set breadcrumbs
      let root: ActivatedRoute = this.activatedRoute.root;

      this.breadcrumbs = [{
        label: "breadcrumb.home",
        // params: undefined,
        // url: "/",
        routerLink: ["/"] // NOTE home must not have params, angular rules
      }].concat(
        this.getBreadcrumbs(root)
      ).slice(this.ignoredLevels);
    });
  }

  /**
   * Returns array of IBreadcrumb objects that represent the breadcrumb
   *
   * @class DetailComponent
   * @method getBreadcrumbs
   * @param {ActivateRoute} route
   * @param {string} url
   * @param {IBreadcrumb[]} breadcrumbs
   */
  private getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: IBreadcrumb[]=[]): IBreadcrumb[] {
    // get the child routes
    let children: ActivatedRoute[] = route.children;

    // return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    // iterate over each children
    for (let child of children) {
      // verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      const snapshot = child.snapshot;
      // get the route's URL segment
      const routeURL: string = snapshot.url.map(segment => segment.path).join("/");

      // append route URL to URL
      url += `/${routeURL}`;

      // verify the custom data property "breadcrumb" is specified on the route
      if (!snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }


      const hasLink = snapshot.data[ROUTE_DATA_BREADCRUMBLINK] !== false;
      let label: string|BreadcrumbCallback = snapshot.data[ROUTE_DATA_BREADCRUMB];

      if ("function" === typeof label) {
        label = label(snapshot);
      }

      // do not display an empty label
      if (!label) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // add breadcrumb
      breadcrumbs.push({
        label: label,
        // params: snapshot.params,
        // url: url,
        routerLink: hasLink ? [url, snapshot.params] : null,
      });

      // recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
