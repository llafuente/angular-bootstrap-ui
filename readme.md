# angular-bootstrap-ui

Complete UI toolkit using bootstrap 4 for Angular 5+.

Built on top of ngx-bootstrap.

# [Changelog](https://github.com/llafuente/angular-bootstrap-ui/blob/master/CHANGELOG.md)

# [Examples](https://llafuente.github.io/angular-bootstrap-ui)

# Documentation

* [directives](directives.md)
  * [bb-child](directives.md#bb-child)
  * [bb-autosize](directives.md#bb-autosize)
  * [empty-is-null](directives.md#empty-is-null)
  * [integer](directives.md#integer)
  * [no-comma](directives.md#no-comma)
* [pipes](pipes.md)
  * [getError](pipes.md#geterror)
  * [isError](pipes.md#iserror)
  * [isLoading](pipes.md#isloading)
  * [isSuccess](pipes.md#issuccess)
* [components](components.md)
* [utils](utils.md)
  * [aggregateSubjects](utils.md#aggregatesubjects)
* services
  * [bb-alert-service &amp; BBAlertService](alert-service.md)
  * [bb-confirm-service &amp; BBConfirmService](confirm-service.md)


# Development server

Run `npm run full-start` for a dev server. Navigate to `http://localhost:4200/`.

It will run the example app with all examples.

If you need to modify angular-bootstrap-ui, you need to restart the process,
changes in the library are not detected by angular cli :S

# Dependencies notes

## [ngx-toastr](https://github.com/scttcper/ngx-toastr)

We add just design.

This module require you to insert in your HTML:

```html
<ngx-toastr></ngx-toastr>
```

### [ngx-bootstrap](https://valor-software.com/ngx-bootstrap)

We configure ngx-bootstrap as bootstrap 4 mode.

To configure datepicker locale read [datepicker/locales](https://valor-software.com/ngx-bootstrap/#/datepicker#locales)


## Migration process

This is just for reference purposes.

Migration process from angular 5 -> 6.



```bash
ng generate component --project angular-bootstrap-ui BBButton
ng generate component --project angular-bootstrap-ui BBCard
ng generate component --project angular-bootstrap-ui BBCardCollapsable
ng generate component --project angular-bootstrap-ui BBRouterChangeLoading
ng generate component --project angular-bootstrap-ui BBSection
ng generate component --project angular-bootstrap-ui BBSectionCollapsable
ng generate component --project angular-bootstrap-ui BBSectionContent
ng generate component --project angular-bootstrap-ui BBSectionFooter
ng generate component --project angular-bootstrap-ui BBSectionHeader
ng generate component --project angular-bootstrap-ui BBTable
ng generate component --project angular-bootstrap-ui BBProgress
ng generate component --project angular-bootstrap-ui BBLoadingPage

ng generate component --project angular-bootstrap-ui BBBreadcrumb

ng generate component --project angular-bootstrap-ui BBCheck
ng generate directive --project angular-bootstrap-ui BBChild
ng generate component --project angular-bootstrap-ui BBDatepicker
ng generate component --project angular-bootstrap-ui BBErrors
ng generate component --project angular-bootstrap-ui BBInputContainer
ng generate component --project angular-bootstrap-ui BBRadio
ng generate component --project angular-bootstrap-ui BBStatic
ng generate component --project angular-bootstrap-ui BBSwitch
ng generate directive --project angular-bootstrap-ui BBTextareaAutosize
ng generate component --project angular-bootstrap-ui BBStringListControl
ng generate component --project angular-bootstrap-ui BBAutocompleteListControl
ng generate service --project angular-bootstrap-ui BBErrorMessages

ng generate component --project angular-bootstrap-ui BBFooter
ng generate component --project angular-bootstrap-ui BBLayout
ng generate component --project angular-bootstrap-ui BBNavbar

ng generate component --project angular-bootstrap-ui BBConfirm
ng generate component --project angular-bootstrap-ui BBModal
ng generate component --project angular-bootstrap-ui BBEllipsis

ng generate pipe --project angular-bootstrap-ui GetError
ng generate pipe --project angular-bootstrap-ui IsError
ng generate pipe --project angular-bootstrap-ui IsLoading
ng generate pipe --project angular-bootstrap-ui IsSuccess

ng generate directive --project angular-bootstrap-ui EmptyIsNull
ng generate directive --project angular-bootstrap-ui Integer
ng generate directive --project angular-bootstrap-ui NoComma

ng generate service --project angular-bootstrap-ui BBAlert
ng generate component --project angular-bootstrap-ui BBAlertGlobal

ng generate service --project angular-bootstrap-ui BBConfirm
ng generate component --project angular-bootstrap-ui BBConfirmGlobal


ng generate component BBAlertsExample
ng generate component BBBadgesExample
ng generate component BBBreadcrumbExample
ng generate component BBButtonExample
ng generate component BBCardExample
ng generate component BBCheckboxesExample
ng generate component BBContentExample
ng generate component BBDirectivesExample

ng generate component BBInputsExample
ng generate component BBListsExample
ng generate component BBLoadingPageExample
ng generate component BBModalExample
ng generate component BBRadiosExample
ng generate component BBStringListExample
ng generate component BBTableExample
ng generate component BBTabsExample
ng generate component BBToastExample
ng generate component BBTypographyExample
ng generate component Root

ng generate library angular-common-module
ng generate component --project angular-common-module Root
ng generate service --project angular-common-module SessionStorage
ng generate service --project angular-common-module Log
ng generate pipe --project angular-common-module nl2br
```
