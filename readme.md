# Angular bootstrap UI

Complete UI toolkit using bootstrap 4 for Angular 5+.

Built on top of ngx-bootstrap.

# [Changelog](https://github.com/llafuente/angular-bootstrap-ui/blob/master/CHANGELOG.md)

# [Examples](https://llafuente.github.io/angular-bootstrap-ui)

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

`angular-bootstrap-ui` use peerDependencies to handle most it's dependencies.

This is the recommended installation.

```
npm i --save "angular-bootstrap-ui" "bootstrap@4.0.0" "font-awesome@4.7.0"  "ngx-bootstrap@2.0.3" "ng2-toasty@4.0.3" "@ngx-translate/core@8.0.0"
```

# Language selection

@app.module.ts

```ts
import { TranslateService } from '../angular-bootstrap-ui';

export class AppModule {
  constructor(translateService: TranslateService) {
    translateService.setDefaultLang('es');
  }
}
```

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


## Dependencies notes

### [ng2-toasty](https://github.com/akserg/ng2-toasty)

This module require you to insert in your HTML:

```html
<ng2-toasty position="bottom-center"></ng2-toasty>
```

### [ngx-bootstrap](https://valor-software.com/ngx-bootstrap)

ngx-bootstrap need to be configured in boostrap 4 mode:

```html
<html>
  <head>
    <script>window.__theme = 'bs4';</script>
  <!-- ... -->
```

To configure datepicker locale read [datepicker/locales](https://valor-software.com/ngx-bootstrap/#/datepicker#locales)


### @ngx-translate/core

Version 8.0.0 is used to keep rxjs in version 5.

When Angular 6 is a bit mature @ngx-translate will be bumped and no more support
for Angular 5.

### running example app

Example app require to setup a symlink, `npm link` could be an alternative

```
cd example-app\node_modules

# for windows
# NOTE: this require administrator priviledges
mklink /D angular-bootstrap-ui ../../

# for linux
# ln -sf angular-bootstrap-ui ../../
```

### publish gh-pages

cd example-app
git co gh-pages
git add fontawesome* index.html inline.bundle.js inline.bundle.js.map main.bundle.js main.bundle.js.map polyfills.bundle.js polyfills.bundle.js.map styles.bundle.js styles.bundle.js.map vendor.bundle.js vendor.bundle.js.map favicon.ico
