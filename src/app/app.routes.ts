import { Injectable, NgModule } from "@angular/core";
import {
  Resolve,
  RouterModule,
  Routes,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { RoutesWithBreadcrumbs } from "angular-bootstrap-ui";

import { RootComponent } from './root/root.component';
import { BBAlertsExampleComponent } from './bbalerts-example/bbalerts-example.component';
import { BBBadgesExampleComponent } from './bbbadges-example/bbbadges-example.component';
import { BBBreadcrumbExampleComponent } from './bbbreadcrumb-example/bbbreadcrumb-example.component';
import { BBButtonExampleComponent } from './bbbutton-example/bbbutton-example.component';
import { BBCardExampleComponent } from './bbcard-example/bbcard-example.component';
import { BBCheckboxesExampleComponent } from './bbcheckboxes-example/bbcheckboxes-example.component';
import { BBContentExampleComponent } from './bbcontent-example/bbcontent-example.component';
import { BBDirectivesExampleComponent } from './bbdirectives-example/bbdirectives-example.component';
import { BBFormsExampleComponent } from './bbforms-example/bbforms-example.component';
import { BBInputsExampleComponent } from './bbinputs-example/bbinputs-example.component';
import { BBListsExampleComponent } from './bblists-example/bblists-example.component';
import { BBLoadingPageExampleComponent } from './bbloading-page-example/bbloading-page-example.component';
import { BBModalExampleComponent } from './bbmodal-example/bbmodal-example.component';
import { BBRadiosExampleComponent } from './bbradios-example/bbradios-example.component';
import { BBStringListExampleComponent } from './bbstring-list-example/bbstring-list-example.component';
import { BBTableExampleComponent } from './bbtable-example/bbtable-example.component';
import { BBTabsExampleComponent } from './bbtabs-example/bbtabs-example.component';
import { BBToastExampleComponent } from './bbtoast-example/bbtoast-example.component';
import { BBTypographyExampleComponent } from './bbtypography-example/bbtypography-example.component';

import { Resolve5s } from "./resolve5s";


export function getRouterWTF(router: ActivatedRouteSnapshot) {
  return "wtf!?";
}

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
        component: BBTableExampleComponent,
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
          breadcrumb: getRouterWTF
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
export class AppRoutes {}
