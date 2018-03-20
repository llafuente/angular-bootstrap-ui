import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, NgModel } from "@angular/forms";
import { ToastyConfig, ToastyModule } from "ng2-toasty";

import { TooltipModule } from "ngx-bootstrap/tooltip";
import { AlertModule } from "ngx-bootstrap/alert";
import { DatepickerModule } from "ngx-bootstrap/datepicker";
import { ModalModule } from "ngx-bootstrap/modal";

import { TranslateModule, TranslateService } from 'ng2-translate';

import { BBEllipsisComponent } from "./src/components/BBEllipsis.component";
export { BBEllipsisComponent } from "./src/components/BBEllipsis.component";

import { BBSectionCollapsableComponent } from "./src/components/BBSectionCollapsable.component";
export { BBSectionCollapsableComponent } from "./src/components/BBSectionCollapsable.component";

import { BBProgressComponent } from "./src/components/BBProgress.component";
export { BBProgressComponent } from "./src/components/BBProgress.component";

import { BBSectionComponent } from "./src/components/BBSection.component";
export { BBSectionComponent } from "./src/components/BBSection.component";
import { BBSectionContentComponent } from "./src/components/BBSectionContent.component";
export { BBSectionContentComponent } from "./src/components/BBSectionContent.component";
import { BBSectionFooterComponent } from "./src/components/BBSectionFooter.component";
export { BBSectionFooterComponent } from "./src/components/BBSectionFooter.component";
import { BBSectionHeaderComponent } from "./src/components/BBSectionHeader.component";
export { BBSectionHeaderComponent } from "./src/components/BBSectionHeader.component";

// cards
import { BBCardComponent } from "./src/components/BBCard.component";
export { BBCardComponent } from "./src/components/BBCard.component";
import { BBCardCollapsableComponent } from "./src/components/BBCardCollapsable.component";
export { BBCardCollapsableComponent } from "./src/components/BBCardCollapsable.component";

import { BreadcrumbComponent } from "./src/components/BBBreadcrumb.component";
export { BreadcrumbCallback, BreadcrumbComponent, getFromResolve, IBreadcrumb, RoutesWithBreadcrumbs, RouteWithBreadcrumbs } from "./src/components/BBBreadcrumb.component";


import { BBLoadingPageComponent } from "./src/components/BBLoadingPage.component";
export { BBLoadingPageComponent } from "./src/components/BBLoadingPage.component";
import { BBRouterChangeLoadingComponent } from "./src/components/BBRouterChangeLoading.component";
export { BBRouterChangeLoadingComponent } from "./src/components/BBRouterChangeLoading.component";

import { BBButtonComponent } from "./src/components/BBButton.component";
export { BBButtonComponent } from "./src/components/BBButton.component";

import { NoCommaDirective } from "./src/directives/NoComma.directive";
export { NoCommaDirective } from "./src/directives/NoComma.directive";

import { BBTableComponent } from "./src/components/BBTable.component";
export { BBTableComponent } from "./src/components/BBTable.component";

// checkboxes
import { BBCheckComponent } from "./src/components/forms/BBCheck.component";
export { BBCheckComponent } from "./src/components/forms/BBCheck.component";

// switch
import { BBSwitchComponent } from "./src/components/forms/BBSwitch.component";
export { BBSwitchComponent } from "./src/components/forms/BBSwitch.component";

// radios
import { BBRadioComponent } from "./src/components/forms/BBRadio.component";
export { BBRadioComponent } from "./src/components/forms/BBRadio.component";

// inputs
import { BBStaticComponent } from "./src/components/forms/BBStatic.component";
export { BBStaticComponent } from "./src/components/forms/BBStatic.component";

import { BBInputContainerComponent } from "./src/components/forms/BBInputContainer.component";
export { BBInputContainerComponent } from "./src/components/forms/BBInputContainer.component";

import { BBChildComponent } from "./src/components/forms/BBChild.component";
export { BBChildComponent } from "./src/components/forms/BBChild.component";

import { BBTextareaAutosize } from "./src/components/forms/BBTextareaAutosize.directive";
export { BBTextareaAutosize } from "./src/components/forms/BBTextareaAutosize.directive";

import { BBDatepickerComponent } from "./src/components/forms/BBDatepicker.component";
export { BBDatepickerComponent } from "./src/components/forms/BBDatepicker.component";

// errors
import { BBErrorsComponent } from "./src/components/forms/BBErrors.component";
export { BBErrorsComponent } from "./src/components/forms/BBErrors.component";
import { BBErrorMessages } from "./src/components/forms/BBErrorMessages.service";
export { BBErrorMessages } from "./src/components/forms/BBErrorMessages.service";


// modals
import { BBModalComponent } from "./src/components/modals/BBModal.component";
export { BBModalComponent } from "./src/components/modals/BBModal.component";
import { BBConfirmComponent } from "./src/components/modals/BBConfirm.component";
export { BBConfirmComponent } from "./src/components/modals/BBConfirm.component";
import { BBConfirmService } from "./src/components/modals/BBConfirm.service";
export { BBConfirmService } from "./src/components/modals/BBConfirm.service";
import { BBConfirmServiceComponent } from "./src/components/modals/BBConfirmService.component";
export { BBConfirmServiceComponent } from "./src/components/modals/BBConfirmService.component";

import { BBNavbarComponent } from "./src/components/layout/BBNavbar.component";
export { BBNavbarComponent } from "./src/components/layout/BBNavbar.component";

import { BBFooterComponent } from "./src/components/layout/BBFooter.component";
export { BBFooterComponent } from "./src/components/layout/BBFooter.component";

import { BBLayoutComponent } from "./src/components/layout/BBLayout.component";
export { BBLayoutComponent } from "./src/components/layout/BBLayout.component";

import { GetErrorPipe } from "./src/pipes/getError.pipe";
export { GetErrorPipe } from "./src/pipes/getError.pipe";
import { IsErrorPipe } from "./src/pipes/IsError.pipe";
export { IsErrorPipe } from "./src/pipes/IsError.pipe";
import { IsLoadingPipe } from "./src/pipes/IsLoading.pipe";
export { IsLoadingPipe } from "./src/pipes/IsLoading.pipe";
import { IsSuccessPipe } from "./src/pipes/IsSuccess.pipe";
export { IsSuccessPipe } from "./src/pipes/IsSuccess.pipe";

// utils
export { aggregateSubjects } from "./src/utils/aggregateSubjects";


export const imports = [
  CommonModule,
  FormsModule,
  RouterModule,
  TranslateModule.forRoot(),

  TooltipModule.forRoot(),
  AlertModule.forRoot(),
  DatepickerModule.forRoot(),
  ModalModule.forRoot(),
];

export const declarations = [
  BBProgressComponent,

  BBEllipsisComponent,
  BBSectionCollapsableComponent,
  BBSectionComponent,
  BBSectionContentComponent,
  BBSectionFooterComponent,
  BBSectionHeaderComponent,

  BBCardComponent,
  BBCardCollapsableComponent,

  BreadcrumbComponent,

  BBLoadingPageComponent,
  BBRouterChangeLoadingComponent,

  BBButtonComponent,

  NoCommaDirective,

  BBCheckComponent,
  BBCheckComponent,
  BBSwitchComponent,
  BBRadioComponent,
  BBStaticComponent,
  BBInputContainerComponent,
  BBChildComponent,
  BBTextareaAutosize,
  BBDatepickerComponent,
  BBErrorsComponent,

  BBModalComponent,
  BBConfirmComponent,
  BBConfirmServiceComponent,

  BBNavbarComponent,
  BBFooterComponent,
  BBLayoutComponent,

  BBTableComponent,

  GetErrorPipe,
  IsErrorPipe,
  IsLoadingPipe,
  IsSuccessPipe,

];

@NgModule({
  declarations,
  imports,
  providers: [
    BBErrorMessages,
    BBConfirmService,
  ],
  exports: [
    ...declarations,
    TranslateModule,

    TooltipModule,
    AlertModule,
    DatepickerModule,
    ModalModule,
  ],
})
export class BootstrapUIModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BootstrapUIModule,
    };
  }
  constructor(
    translate: TranslateService,
  ) {
    translate.setTranslation('en', {
      "breadcrumb": {
        "home": "Home"
      },
    });
    translate.setTranslation('es', {
      "breadcrumb": {
        "home": "Inicio"
      },
    });
  }
}
