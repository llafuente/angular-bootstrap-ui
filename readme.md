# Angular bootstrap UI

Complete UI toolkit using bootstrap 4 for Angular 5+.

Built on top of ngx-bootstrap.

# [Changelog](https://github.com/llafuente/angular-bootstrap-ui/blob/master/CHANGELOG.md)

# Documentation

* [bb-alert-service &amp; BBAlertService](src/services/alert/README.md)
* [bb-confirm-service &amp; BBConfirmService](src/services/alert/README.md)
* [Directives](src/directives/README.md)
  * [empty-is-null](src/directives/README.md#empty-is-null)
  * [integer](src/directives/README.md#integer)
  * [no-comma](src/directives/README.md#no-comma)
* [Pipes](src/pipes/README.md)
  * [getError](src/pipes/README.md#geterror)
  * [isError](src/pipes/README.md#iserror)
  * [isLoading](src/pipes/README.md#isloading)
  * [isSuccess](src/pipes/README.md#issuccess)
* [Utils](src/utils/README.md)
  * [aggregateSubjects](src/utils/README.md#aggregatesubjects)


# Usage

## Install

```
npm i --save "angular-bootstrap-ui" "bootstrap@4.0.0" "font-awesome@4.7.0"  "ngx-bootstrap@2.0.3" "ng2-toasty@4.0.3"
```

We use peerDependencies instead of dependencies to manage out dependencies

# SCSS import

```
$fa-font-path: "~font-awesome/fonts";
@import '~font-awesome/scss/font-awesome.scss';

@import '~bootstrap/scss/_mixins.scss';
@import '~bootstrap/scss/_functions.scss';
@import '~bootstrap/scss/_variables.scss';

@import '~angular-bootstrap-ui/scss/index';
@import '~bootstrap/scss/bootstrap.scss';
```


## External deps install

Follow their instructions:

### [ng2-toasty](https://github.com/akserg/ng2-toasty)

This module require you to insert in your HTML:

```html
<ng2-toasty position="bottom-center"></ng2-toasty>
```

### [ngx-bootstrap](https://valor-software.com/ngx-bootstrap)

ngx-bootstrap need to be configured in boostrap 4 mode:

your index.html
```
<html>
  <head>
    <script>window.__theme = 'bs4';</script>
  <!-- ... -->
```

To configure datepicker locale read [datepicker/locales](https://valor-software.com/ngx-bootstrap/#/datepicker#locales)


