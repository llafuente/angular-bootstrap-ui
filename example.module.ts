import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, NgModel } from "@angular/forms";
import { ToastyConfig, ToastyModule } from "ng2-toasty";

import { BootstrapUIModule } from './index';

import { BBContentExampleComponent } from './example/BBContentExample.component';
export { BBContentExampleComponent } from './example/BBContentExample.component';

import { BBCardExampleComponent } from "./example/BBCardExample.component";
export { BBCardExampleComponent } from "./example/BBCardExample.component";

import { BBBadgesExampleComponent } from "./example/BBBadgesExample.component";
export { BBBadgesExampleComponent } from "./example/BBBadgesExample.component";

import { BBBreadcrumbExampleComponent } from "./example/BBBreadcrumbExample.component";
export { BBBreadcrumbExampleComponent } from "./example/BBBreadcrumbExample.component";

import { BBLoadingPageExampleComponent } from "./example/BBLoadingPageExample.component";
export { BBLoadingPageExampleComponent } from "./example/BBLoadingPageExample.component";

import { BBValidatorsExampleComponent } from "./example/BBValidatorsExample.component";
export { BBValidatorsExampleComponent } from "./example/BBValidatorsExample.component";

import { BBButtonExampleComponent } from "./example/BBButtonExample.component";
export { BBButtonExampleComponent } from "./example/BBButtonExample.component";

import { BBCheckboxesExampleComponent } from "./example/BBCheckboxesExample.component";
export { BBCheckboxesExampleComponent } from "./example/BBCheckboxesExample.component";

import { BBRadiosExampleComponent } from "./example/BBRadiosExample.component";
export { BBRadiosExampleComponent } from "./example/BBRadiosExample.component";

import { BBInputsExampleComponent } from "./example/BBInputsExample.component";
export { BBInputsExampleComponent } from "./example/BBInputsExample.component";

import { BBModalExampleComponent } from "./example/BBModalExample.component";
export { BBModalExampleComponent } from "./example/BBModalExample.component";

import { BBTablesExampleComponent } from "./example/BBTableExample.component";
export { BBTablesExampleComponent } from "./example/BBTableExample.component";

import { BuiContentExampleRoutes } from './example.routes';

export const imports = [
  CommonModule,
  FormsModule,
  RouterModule,
  BootstrapUIModule,
  BuiContentExampleRoutes,
];

export const declarations = [

  BBContentExampleComponent,
  BBCardExampleComponent,
  BBBadgesExampleComponent,
  BBBreadcrumbExampleComponent,
  BBLoadingPageExampleComponent,
  BBValidatorsExampleComponent,
  BBButtonExampleComponent,
  BBCheckboxesExampleComponent,
  BBRadiosExampleComponent,
  BBInputsExampleComponent,
  BBModalExampleComponent,
  BBTablesExampleComponent,

];

@NgModule({
  declarations,
  imports,
  providers: [
  ],
  exports: [
    ...declarations,
  ],
})
export class BootstrapUIExampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BootstrapUIExampleModule,
    };
  }
  constructor(
  ) {
  }
}
