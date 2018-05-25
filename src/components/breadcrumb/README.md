# bb-breadcrumb

Display breadcrumb data stored at routes.

## Routes

```ts
//...
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RoutesWithBreadcrumbs } from "angular-bootstrap-ui";

export const routes: RoutesWithBreadcrumbs = [
  {
    path: "/xxx",
    component: XXX,
    data: {
      breadcrumb: "text to display",
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [
  ]
})
export class AppRoutingModule {
  constructor() {}
}

```

### Text breadcrumb linked

```
data: {
  breadcrumb: "section 1"
}
```

### Text breadcrumb no link

```
data: {
  breadcrumb: "muted text",
  breadcrumbLink: false,
}
```

### Custom breadcrumb no link

```ts
export function breadcrumbDisplayText() {
  return "TEXT";
}
```

```
data: {
  breadcrumb: breadcrumbDisplayText
}
```


## bb-breadcrumb component

### ignoredLevels="number" (Optional, default: 0)

Ignore the first X levels.

Use [ignoredLevels]="1" to hide Home link.

```html
<bb-breadcrumb [ignoredLevels]="1"></bb-breadcrumb>
```


### i18n

Every breadcrumb label pass through the translate pipe.

*breadcumb.home*: is the label for the home link.
