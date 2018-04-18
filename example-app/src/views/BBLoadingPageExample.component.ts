import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "bb-loading-page-example-component",
  template: `
<alert type="info">
<p>Did you see the loading screen ?</p>
<p>It's made using <a href="https://angular.io/api/router/Resolve" target="_blank">Resolve</a></p>
</alert>
<!--
<h3>Import component for angular/router</h3>
<pre>
import &#123; BBRouterChangeLoadingComponent &#125; from "nova-bbva-ui/layout/BBRouterChangeLoading.component";
// ...
@NgModule
//...
  declarations: [
    //...
    BBRouterChangeLoadingComponent
    //...
]
</pre>
<h3>Declare it at your main component</h3>
<pre>
  &lt;bb-router-change-loading>&lt;/bb-router-change-loading>
</pre>

<h3>routes file</h3>
<pre>
  &#123;
    path: "loading",
    component: BB4UI.BBLoadingPageExampleComponent,
    resolve: &#123;
      wait5s: Resolve5s
    &#125;
  &#125;,
</pre>
-->
  `,
})
export class BBLoadingPageExampleComponent {}
