import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularBootstrapUiModule } from 'angular-bootstrap-ui';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutes } from './app.routes';
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
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    BBAlertsExampleComponent,
    BBBadgesExampleComponent,
    BBBreadcrumbExampleComponent,
    BBButtonExampleComponent,
    BBCardExampleComponent,
    BBCheckboxesExampleComponent,
    BBContentExampleComponent,
    BBDirectivesExampleComponent,
    BBFormsExampleComponent,
    BBInputsExampleComponent,
    BBListsExampleComponent,
    BBLoadingPageExampleComponent,
    BBModalExampleComponent,
    BBRadiosExampleComponent,
    BBStringListExampleComponent,
    BBTableExampleComponent,
    BBTabsExampleComponent,
    BBToastExampleComponent,
    BBTypographyExampleComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes,
    AngularBootstrapUiModule,

    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
