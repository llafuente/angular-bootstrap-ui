import { Injectable, NgModule } from "@angular/core";
import {
  Resolve,
  RouterModule,
  Routes,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { RoutesWithBreadcrumbs } from "../angular-bootstrap-ui";
import {
  BBContentExampleComponent,
  BBBreadcrumbExampleComponent,
  BBLoadingPageExampleComponent,
  BBDirectivesExampleComponent,
  BBButtonExampleComponent,
  BBModalExampleComponent,
  BBCheckboxesExampleComponent,
  BBRadiosExampleComponent,
  BBInputsExampleComponent,
  BBTablesExampleComponent,
  BBCardExampleComponent,
  BBBadgesExampleComponent,
  BBTypographyExampleComponent,
  BBToastExampleComponent,
  BBAlertsExampleComponent,
  BBTabsExampleComponent,
  BBListsExampleComponent,
  BBStringListExampleComponent
} from "./app.module";
import { RootComponent } from "angular-common-module";
import { Resolve5s } from "./Resolve5s";

const routes: RoutesWithBreadcrumbs = [
  {
    path: "content",
    component: RootComponent,
    children: [
      {
        path: "lists",
        component: BBListsExampleComponent,
        data: {
          breadcrumb: "Lists",
        }
      },
      {
        path: "typography",
        component: BBTypographyExampleComponent,
        data: {
          breadcrumb: "typography",
        }
      },
      {
        path: "content",
        component: BBContentExampleComponent,
        data: {
          breadcrumb: "content",
        }
      },
      {
        path: "badges",
        component: BBBadgesExampleComponent,
        data: {
          breadcrumb: "Badges",
        }
      },
      {
        path: "tables",
        component: BBTablesExampleComponent,
        data: {
          breadcrumb: "Tables",
        }
      },
      {
        path: "alerts",
        component: BBAlertsExampleComponent,
        data: {
          breadcrumb: "alerts",
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
        path: "directives",
        component: BBDirectivesExampleComponent,
        data: {
          breadcrumb: "Validators",
        }
      },
      {
        path: "stringlist",
        component: BBStringListExampleComponent,
        data: {
          breadcrumb: "String list",
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
      {
        path: "toast",
        component: BBToastExampleComponent,
        data: {
          breadcrumb: "Toast",
        }
      },
      {
        path: "tabs",
        component: BBTabsExampleComponent,
        data: {
          breadcrumb: "Cards",
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

@NgModule({
  imports: [RouterModule.forRoot(routes as Routes, { useHash: true })],
  exports: [RouterModule],
  declarations: [],
  providers: [Resolve5s]
})
export class BootstrapUIExampleRouteModule {}
