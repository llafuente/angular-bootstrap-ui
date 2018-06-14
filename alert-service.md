# bb-alert-service &amp; BBAlertService

Global alert service.

## Usage

Insert in your app.component.html (your main component)

```html
<bb-alert-service></bb-alert-service>
```

This made the service to be available to every component.

```ts
import { BBAlertService } from "angular-bootstrap-ui";

//...

@Component({
})
export class YourComponent {

  constructor (
    public bbAlertService: BBAlertService,
  ) {

  }

  show() {
    // plain text
    this.bbAlertService.show("title", "text", false).subscribe(() => {
      // this is called when modal is closed!
    });

    // html
    this.bbAlertService.show("title", "text", true).subscribe(() => {});
  }
}

```
