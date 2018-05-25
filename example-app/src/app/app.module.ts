import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, NgModel } from "@angular/forms";

import { BootstrapUIModule } from 'angular-bootstrap-ui/index';

import { BBContentExampleComponent } from '../views/BBContentExample.component';
export { BBContentExampleComponent } from '../views/BBContentExample.component';

import { BBCardExampleComponent } from "../views/BBCardExample.component";
export { BBCardExampleComponent } from "../views/BBCardExample.component";

import { BBBadgesExampleComponent } from "../views/BBBadgesExample.component";
export { BBBadgesExampleComponent } from "../views/BBBadgesExample.component";

import { BBBreadcrumbExampleComponent } from "../views/BBBreadcrumbExample.component";
export { BBBreadcrumbExampleComponent } from "../views/BBBreadcrumbExample.component";

import { BBLoadingPageExampleComponent } from "../views/BBLoadingPageExample.component";
export { BBLoadingPageExampleComponent } from "../views/BBLoadingPageExample.component";

import { BBDirectivesExampleComponent } from "../views/BBDirectivesExample.component";
export { BBDirectivesExampleComponent } from "../views/BBDirectivesExample.component";

import { BBButtonExampleComponent } from "../views/BBButtonExample.component";
export { BBButtonExampleComponent } from "../views/BBButtonExample.component";

import { BBCheckboxesExampleComponent } from "../views/BBCheckboxesExample.component";
export { BBCheckboxesExampleComponent } from "../views/BBCheckboxesExample.component";

import { BBRadiosExampleComponent } from "../views/BBRadiosExample.component";
export { BBRadiosExampleComponent } from "../views/BBRadiosExample.component";

import { BBInputsExampleComponent } from "../views/BBInputsExample.component";
export { BBInputsExampleComponent } from "../views/BBInputsExample.component";

import { BBModalExampleComponent } from "../views/BBModalExample.component";
export { BBModalExampleComponent } from "../views/BBModalExample.component";

import { BBTablesExampleComponent } from "../views/BBTableExample.component";
export { BBTablesExampleComponent } from "../views/BBTableExample.component";

import { BBTypographyExampleComponent } from "../views/BBTypographyExample.component";
export { BBTypographyExampleComponent } from "../views/BBTypographyExample.component";

import { BBToastExampleComponent } from "../views/BBToastExample.component";
export { BBToastExampleComponent } from "../views/BBToastExample.component";

import { BBFormsExampleComponent } from "../views/BBFormsExample.component";
export { BBFormsExampleComponent } from "../views/BBFormsExample.component";

import { BBAlertsExampleComponent } from "../views/BBAlertsExample.component";
export { BBAlertsExampleComponent } from "../views/BBAlertsExample.component";

import { BBTabsExampleComponent } from "../views/BBTabsExample.component";
export { BBTabsExampleComponent } from "../views/BBTabsExample.component";

import { BBListsExampleComponent } from "../views/BBListsExample.component";
export { BBListsExampleComponent } from "../views/BBListsExample.component";

import { BBStringListExampleComponent } from "../views/BBStringListExample.component";
export { BBStringListExampleComponent } from "../views/BBStringListExample.component";

import { BootstrapUIExampleRouteModule } from './app.routes';
import { AngularCommonModule } from 'angular-common-module';
import { TranslateService } from 'angular-bootstrap-ui';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    AppComponent,

    BBContentExampleComponent,
    BBCardExampleComponent,
    BBBadgesExampleComponent,
    BBBreadcrumbExampleComponent,
    BBLoadingPageExampleComponent,
    BBDirectivesExampleComponent,
    BBButtonExampleComponent,
    BBCheckboxesExampleComponent,
    BBRadiosExampleComponent,
    BBInputsExampleComponent,
    BBModalExampleComponent,
    BBTablesExampleComponent,
    BBTypographyExampleComponent,
    BBToastExampleComponent,
    BBFormsExampleComponent,
    BBAlertsExampleComponent,
    BBTabsExampleComponent,
    BBListsExampleComponent,
    BBStringListExampleComponent,
  ],
  imports: [
    BrowserModule,

    CommonModule,
    FormsModule,
    RouterModule,
    BootstrapUIModule,
    BootstrapUIExampleRouteModule,
    AngularCommonModule,

    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translateService: TranslateService) {
    translateService.setDefaultLang('es');
  }
}
