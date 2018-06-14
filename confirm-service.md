# bb-confirm-service &amp; BBConfirmService

global confirmation service.

## Usage

Insert in your app.component.html (your main component)

```html
<bb-confirm-service></bb-confirm-service>
```

This made the service to be available to every component.

```ts
import { BBConfirmService } from "angular-bootstrap-ui";

//...

@Component({
})
export class YourComponent {

  constructor (
    public bbConfirmService: BBConfirmService,
  ) {

  }

  show() {
    // plain text
    this.bbConfirmService.show("title", "text").subscribe((ok) => {
      // this is called when ok/cancel is pressed
    });
  }
}

```
