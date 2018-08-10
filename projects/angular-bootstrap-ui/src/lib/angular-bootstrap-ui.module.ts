import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { setTheme } from 'ngx-bootstrap/utils';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { CommonModule } from '@angular/common';
// ToastrModule is not imported, should be at root app
// left here to remember is a peerDependency we cannot compile without it
import { ToastrModule } from 'ngx-toastr';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { BBButtonComponent } from './bbbutton/bbbutton.component';
export { BBButtonComponent } from './bbbutton/bbbutton.component';
import { BBCardComponent } from './bbcard/bbcard.component';
export { BBCardComponent } from './bbcard/bbcard.component';
import { BBCardCollapsableComponent } from './bbcard-collapsable/bbcard-collapsable.component';
export { BBCardCollapsableComponent } from './bbcard-collapsable/bbcard-collapsable.component';
import { BBRouterChangeLoadingComponent } from './bbrouter-change-loading/bbrouter-change-loading.component';
export { BBRouterChangeLoadingComponent } from './bbrouter-change-loading/bbrouter-change-loading.component';
import { BBSectionComponent } from './bbsection/bbsection.component';
export { BBSectionComponent } from './bbsection/bbsection.component';
import { BBSectionContentComponent } from './bbsection-content/bbsection-content.component';
export { BBSectionContentComponent } from './bbsection-content/bbsection-content.component';
import { BBSectionFooterComponent } from './bbsection-footer/bbsection-footer.component';
export { BBSectionFooterComponent } from './bbsection-footer/bbsection-footer.component';
import { BBSectionHeaderComponent } from './bbsection-header/bbsection-header.component';
export { BBSectionHeaderComponent } from './bbsection-header/bbsection-header.component';
import { BBTableComponent } from './bbtable/bbtable.component';
export { BBTableComponent } from './bbtable/bbtable.component';
import { BBSectionCollapsableComponent } from './bbsection-collapsable/bbsection-collapsable.component';
export { BBSectionCollapsableComponent } from './bbsection-collapsable/bbsection-collapsable.component';
import { BBProgressComponent } from './bbprogress/bbprogress.component';
export { BBProgressComponent } from './bbprogress/bbprogress.component';
import { BBLoadingPageComponent } from './bbloading-page/bbloading-page.component';
export { BBLoadingPageComponent } from './bbloading-page/bbloading-page.component';
import { BBBreadcrumbComponent } from './bbbreadcrumb/bbbreadcrumb.component';
export { BBBreadcrumbComponent, getFromResolve } from './bbbreadcrumb/bbbreadcrumb.component';
import { BBCheckComponent } from './bbcheck/bbcheck.component';
export { BBCheckComponent } from './bbcheck/bbcheck.component';
import { BBChildDirective } from './bbchild.directive';
export { BBChildDirective } from './bbchild.directive';
import { BBDatepickerComponent } from './bbdatepicker/bbdatepicker.component';
export { BBDatepickerComponent } from './bbdatepicker/bbdatepicker.component';
import { BBErrorsComponent } from './bberrors/bberrors.component';
export { BBErrorsComponent } from './bberrors/bberrors.component';
import { BBInputContainerComponent } from './bbinput-container/bbinput-container.component';
export { BBInputContainerComponent } from './bbinput-container/bbinput-container.component';
import { BBRadioComponent } from './bbradio/bbradio.component';
export { BBRadioComponent } from './bbradio/bbradio.component';
import { BBStaticComponent } from './bbstatic/bbstatic.component';
export { BBStaticComponent } from './bbstatic/bbstatic.component';
import { BBSwitchComponent } from './bbswitch/bbswitch.component';
export { BBSwitchComponent } from './bbswitch/bbswitch.component';
import { BBTextareaAutosizeDirective } from './bbtextarea-autosize.directive';
export { BBTextareaAutosizeDirective } from './bbtextarea-autosize.directive';
import { BBStringListControlComponent } from './bbstring-list-control/bbstring-list-control.component';
export { BBStringListControlComponent } from './bbstring-list-control/bbstring-list-control.component';
import { BBAutocompleteListControlComponent } from './bbautocomplete-list-control/bbautocomplete-list-control.component';
export { BBAutocompleteListControlComponent } from './bbautocomplete-list-control/bbautocomplete-list-control.component';
import { BBFooterComponent } from './bbfooter/bbfooter.component';
export { BBFooterComponent } from './bbfooter/bbfooter.component';
import { BBLayoutComponent } from './bblayout/bblayout.component';
export { BBLayoutComponent } from './bblayout/bblayout.component';
import { BBNavbarComponent } from './bbnavbar/bbnavbar.component';
export { BBNavbarComponent } from './bbnavbar/bbnavbar.component';
import { BBConfirmComponent } from './bbconfirm/bbconfirm.component';
export { BBConfirmComponent } from './bbconfirm/bbconfirm.component';
import { BBModalComponent } from './bbmodal/bbmodal.component';
export { BBModalComponent } from './bbmodal/bbmodal.component';
import { BBEllipsisComponent } from './bbellipsis/bbellipsis.component';
export { BBEllipsisComponent } from './bbellipsis/bbellipsis.component';
import { GetErrorPipe } from './get-error.pipe';
export { GetErrorPipe } from './get-error.pipe';
import { IsErrorPipe } from './is-error.pipe';
export { IsErrorPipe } from './is-error.pipe';
import { IsLoadingPipe } from './is-loading.pipe';
export { IsLoadingPipe } from './is-loading.pipe';
import { IsSuccessPipe } from './is-success.pipe';
export { IsSuccessPipe } from './is-success.pipe';
import { EmptyIsNullDirective } from './empty-is-null.directive';
export { EmptyIsNullDirective } from './empty-is-null.directive';
import { IntegerDirective } from './integer.directive';
export { IntegerDirective } from './integer.directive';
import { NoCommaDirective } from './no-comma.directive';
export { NoCommaDirective } from './no-comma.directive';
import { BBAlertGlobalComponent } from './bbalert-global/bbalert-global.component';
export { BBAlertGlobalComponent } from './bbalert-global/bbalert-global.component';
import { BBConfirmGlobalComponent } from './bbconfirm-global/bbconfirm-global.component';
export { BBConfirmGlobalComponent } from './bbconfirm-global/bbconfirm-global.component';

import { BBAlertService } from './bbalert.service';
export { BBAlertService } from './bbalert.service';
import { BBConfirmService } from './bbconfirm.service';
export { BBConfirmService } from './bbconfirm.service';
import { BBErrorMessagesService } from './bberror-messages.service';
export { BBErrorMessagesService } from './bberror-messages.service';

export { aggregateSubjects } from './utils/aggregateSubjects';
export { RoutesWithBreadcrumbs } from './bbbreadcrumb/bbbreadcrumb.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,


    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),

    TranslateModule.forChild(),
  ],

  declarations: [BBButtonComponent, BBCardComponent, BBCardCollapsableComponent, BBRouterChangeLoadingComponent, BBSectionComponent, BBSectionContentComponent, BBSectionFooterComponent, BBSectionHeaderComponent, BBTableComponent, BBSectionCollapsableComponent, BBProgressComponent, BBLoadingPageComponent, BBBreadcrumbComponent, BBCheckComponent, BBChildDirective, BBDatepickerComponent, BBErrorsComponent, BBInputContainerComponent, BBRadioComponent, BBStaticComponent, BBSwitchComponent, BBTextareaAutosizeDirective, BBStringListControlComponent, BBAutocompleteListControlComponent, BBFooterComponent, BBLayoutComponent, BBNavbarComponent, BBConfirmComponent, BBModalComponent, BBEllipsisComponent, GetErrorPipe, IsErrorPipe, IsLoadingPipe, IsSuccessPipe, EmptyIsNullDirective, IntegerDirective, NoCommaDirective, BBAlertGlobalComponent, BBConfirmGlobalComponent],

  providers: [
    BBAlertService,
    BBConfirmService,
    BBErrorMessagesService,
  ],

  exports: [
    BBButtonComponent, BBCardComponent, BBCardCollapsableComponent, BBRouterChangeLoadingComponent, BBSectionComponent, BBSectionContentComponent, BBSectionFooterComponent, BBSectionHeaderComponent, BBTableComponent, BBSectionCollapsableComponent, BBProgressComponent, BBLoadingPageComponent, BBBreadcrumbComponent, BBCheckComponent, BBChildDirective, BBDatepickerComponent, BBErrorsComponent, BBInputContainerComponent, BBRadioComponent, BBStaticComponent, BBSwitchComponent, BBTextareaAutosizeDirective, BBStringListControlComponent, BBAutocompleteListControlComponent, BBFooterComponent, BBLayoutComponent, BBNavbarComponent, BBConfirmComponent, BBModalComponent, BBEllipsisComponent, GetErrorPipe, IsErrorPipe, IsLoadingPipe, IsSuccessPipe, EmptyIsNullDirective, IntegerDirective, NoCommaDirective, BBAlertGlobalComponent, BBConfirmGlobalComponent,

    TooltipModule,
    AlertModule,
    DatepickerModule,
    ModalModule,
    TypeaheadModule,

    TranslateModule,
  ]
})
export class AngularBootstrapUiModule {
  constructor(
    translate: TranslateService,
  ) {
    setTheme('bs4');

    translate.setTranslation('en', {
      "content": {
        "retry": "Try again",
        "error": "There was an error obtaining information",
      },
      "breadcrumb": {
        "home": "Home"
      },
      "datepicker": {
        "clear": "Clear",
        "close": "Close"
      },
      "modal": {
        "close": "Close"
      },
      "alert": {
        "ok": "OK",
      },
      "confirm": {
        "cancel": "Cancel",
        "accept": "Accept"
      },
    });
    translate.setTranslation('es', {
      "content": {
        "retry": "Volver a intentarlo",
        "error": "Error al obtener la informacion solicitada.",
      },
      "breadcrumb": {
        "home": "Inicio"
      },
      "datepicker": {
        "clear": "Vaciar",
        "close": "Cerrar"
      },
      "modal": {
        "close": "Cerrar"
      },
      "alert": {
        "ok": "OK",
      },
      "confirm": {
        "cancel": "Cancelar",
        "accept": "Aceptar"
      },
    });
  }
}
