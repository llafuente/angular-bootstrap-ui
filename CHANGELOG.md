# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="6.0.0"></a>
## [6.0.0](https://github.com/llafuente/angular-bootstrap-ui/compare/v1.3.1...v6.0.0) (2018-05-25)


### Features

* Migrate to Angular 6, the new naming convention will be to set the first number to the mayor Angular version.
* Include `angular-common-module` in the project and rename to `angular-commons`


### BREAKING CHANGES

* ng2-toasty is replaced by ngx-toaster
* @ngx-translate/core updated to 10.0.1
* ngx-bootstrap updated to 3.0.0


<a name="1.3.1"></a>
## [1.3.1](https://github.com/llafuente/angular-bootstrap-ui/compare/v1.3.0...v1.3.1) (2018-05-25)


### Bug Fixes

* breadcrumbs ([cf1ff8c](https://github.com/llafuente/angular-bootstrap-ui/commit/cf1ff8c))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/llafuente/angular-bootstrap-ui/compare/v1.2.1...v1.3.0) (2018-05-25)


### Bug Fixes

* replace ng2-translate to [@ngx-translate](https://github.com/ngx-translate)/core ([fb0e9cb](https://github.com/llafuente/angular-bootstrap-ui/commit/fb0e9cb))


### Features

* allow override each error message at component level ([06bc46a](https://github.com/llafuente/angular-bootstrap-ui/commit/06bc46a))
* vartiables for font-colors inputs states ([e22c13c](https://github.com/llafuente/angular-bootstrap-ui/commit/e22c13c))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/llafuente/angular-bootstrap-ui/compare/v1.2.0...v1.2.1) (2018-04-13)


### Bug Fixes

* aot issues ([da4280c](https://github.com/llafuente/angular-bootstrap-ui/commit/da4280c))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/llafuente/angular-bootstrap-ui/compare/v1.1.1...v1.2.0) (2018-04-10)


### Bug Fixes

* visibility issues with hidden elippsis ([9de5608](https://github.com/llafuente/angular-bootstrap-ui/commit/9de5608))


### Features

* add empty-is-null directive ([b7854c4](https://github.com/llafuente/angular-bootstrap-ui/commit/b7854c4))
* add integer directive ([84807b3](https://github.com/llafuente/angular-bootstrap-ui/commit/84807b3))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/llafuente/angular-bootstrap-ui/compare/v1.1.0...v1.1.1) (2018-04-09)


### Bug Fixes

* alert service return types ([c2da5a8](https://github.com/llafuente/angular-bootstrap-ui/commit/c2da5a8))
* do not apply label style to custom controls ([f540aec](https://github.com/llafuente/angular-bootstrap-ui/commit/f540aec))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/llafuente/angular-bootstrap-ui/compare/v1.0.2...v1.1.0) (2018-04-08)


### Features

* add BBAlertService ([5b0db39](https://github.com/llafuente/angular-bootstrap-ui/commit/5b0db39))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/llafuente/angular-bootstrap-ui/compare/v1.0.1...v1.0.2) (2018-04-04)


### Bug Fixes

* aot issues ([cafe3d9](https://github.com/llafuente/angular-bootstrap-ui/commit/cafe3d9))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/llafuente/angular-bootstrap-ui/compare/v1.0.0...v1.0.1) (2018-04-04)


### Bug Fixes

* bb-autocomplete-list style ([b228cfa](https://github.com/llafuente/angular-bootstrap-ui/commit/b228cfa))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/llafuente/angular-bootstrap-ui/compare/v0.0.8...v1.0.0) (2018-04-03)


### Bug Fixes

* checkbox indicator alignament with default font ([87e1814](https://github.com/llafuente/angular-bootstrap-ui/commit/87e1814))
* move angular-common-module to devDeps ([9bfb77d](https://github.com/llafuente/angular-bootstrap-ui/commit/9bfb77d))


### Features

* **bootstrap-4.0.0:** checkboxes ([508927b](https://github.com/llafuente/angular-bootstrap-ui/commit/508927b))
* **bootstrap-4.0.0:** form styles ([5e74fda](https://github.com/llafuente/angular-bootstrap-ui/commit/5e74fda))
* **bootstrap-4.0.0:** migrate tables ([b9a78d8](https://github.com/llafuente/angular-bootstrap-ui/commit/b9a78d8))
* **bootstrap-4.0.0:** radio styles ([e4e4dff](https://github.com/llafuente/angular-bootstrap-ui/commit/e4e4dff))
* add alert/list/tabs examples ([b322050](https://github.com/llafuente/angular-bootstrap-ui/commit/b322050))
* add bb-string-list ([ba6556c](https://github.com/llafuente/angular-bootstrap-ui/commit/ba6556c))
* add ng2-toasty ([3e751db](https://github.com/llafuente/angular-bootstrap-ui/commit/3e751db))
* add typography example ([c21be2e](https://github.com/llafuente/angular-bootstrap-ui/commit/c21be2e))


### BREAKING CHANGES

* **bootstrap-4.0.0:** BBTable inverse input renamed to dark

Before:
```
<bb-table [inverse]="true">
```

After:
```
<bb-table [dark]="true">
```



<a name="0.0.8"></a>
## [0.0.8](https://github.com/llafuente/angular-bootstrap-ui/compare/v0.0.7...v0.0.8) (2018-04-03)
