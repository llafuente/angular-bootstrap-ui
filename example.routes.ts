import { Injectable, NgModule } from "@angular/core";
import {
  Resolve,
  RouterModule,
  Routes,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { RoutesWithBreadcrumbs } from "./src/components/BBBreadcrumb.component";
import {
  BBContentExampleComponent,
  BBBreadcrumbExampleComponent,
  BBLoadingPageExampleComponent,
  BBValidatorsExampleComponent,
  BBButtonExampleComponent,
  BBModalExampleComponent,
  BBCheckboxesExampleComponent,
  BBRadiosExampleComponent,
  BBInputsExampleComponent,
  BBTablesExampleComponent,
  BBCardExampleComponent,
} from "./example.module";
import { RootComponent } from "angular-common-module/src/Root.component";
import { Resolve5s } from "./example/Resolve5s";

const routes: RoutesWithBreadcrumbs = [
  {
    path: "content",
    component: RootComponent,
    children: [
      {
        path: "content",
        component: BBContentExampleComponent,
        data: {
          breadcrumb: "content",
        }
      },
      {
        path: "tables",
        component: BBTablesExampleComponent,
        data: {
          breadcrumb: "Tables",
        }
      },
    ]
  },
  {
    path: "forms",
    component: RootComponent,
    children: [
      {
        path: "buttons",
        component: BBButtonExampleComponent,
        data: {
          breadcrumb: "Buttons",
        }
      },
      {
        path: "checkboxes",
        component: BBCheckboxesExampleComponent,
        data: {
          breadcrumb: "Checkboxes",
        }
      },
      {
        path: "radios",
        component: BBRadiosExampleComponent,
        data: {
          breadcrumb: "Radios",
        }
      },
      {
        path: "inputs",
        component: BBInputsExampleComponent,
        data: {
          breadcrumb: "Inputs",
        }
      },
      {
        path: "validators",
        component: BBValidatorsExampleComponent,
        data: {
          breadcrumb: "Validators",
        }
      },
    ]
  },
  {
    path: "components",
    component: RootComponent,
    children: [
      {
        path: "cards",
        component: BBCardExampleComponent,
      },
      {
        path: "modals",
        component: BBModalExampleComponent,
        data: {
          breadcrumb: "Modals",
        }
      },
    ]
  },


  {
    path: "loading",
    component: BBLoadingPageExampleComponent,
    resolve: {
      wait5s: Resolve5s,
    },
    data: {
      breadcrumb: "Loading screen example",
    }
  },
  {
    path: "breadcrumb",
    component: BBBreadcrumbExampleComponent,
    data: {
      breadcrumb: "Breadcrumb",
    },
    children: [
      {
        path: "level-1a",
        component: RootComponent,
        data: {
          breadcrumb: "Level 1 A",
        },
        children: [{
          path: "level-2",
          component: RootComponent,
          data: {
            breadcrumb: "Level 2",
          },
        }]
      },
      {
        path: "level-1b",
        component: RootComponent,
        data: {
          breadcrumb: "Level 1 B",
          breadcrumbLink: false,
        },
        children: [{
          path: "level-2",
          component: RootComponent,
          data: {
            breadcrumb: "Level 2",
          },
        }]
      },
      {
        path: "level-1c",
        component: RootComponent,
        data: {
          breadcrumb: "Level 1 C has a very long breadcrumb that will have ellipsis when it's not the primary",
        },
        children: [{
          path: "level-2",
          component: RootComponent,
          data: {
            breadcrumb: "Level 2",
          },
        }]
      },
      {
        path: "complex",
        component: RootComponent,
        data: {
          breadcrumb: function (router: ActivatedRouteSnapshot) {
            return "wtf!?";
          }
        },
      },
    ]
  },
];
console.log(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes as Routes, { useHash: true })],
  exports: [RouterModule],
  declarations: [RootComponent],
  providers: [Resolve5s]
})
export class BootstrapUIExampleRouteModule {}
