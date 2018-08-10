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

# Dependencies notes

## [ngx-toastr](https://github.com/scttcper/ngx-toastr)

We add just design.

This module require you to insert in your HTML:

```html
<ngx-toastr></ngx-toastr>
```

And at root module

```ts
import { ToastrModule } from "ngx-toastr";

@NgModule({
  imports: [
    ToastrModule.forRoot()
    //...
  ]
})
//...
```

### [ngx-bootstrap](https://valor-software.com/ngx-bootstrap)

We configure ngx-bootstrap as bootstrap 4 mode.

To configure datepicker locale read [datepicker/locales](https://valor-software.com/ngx-bootstrap/#/datepicker#locales)
