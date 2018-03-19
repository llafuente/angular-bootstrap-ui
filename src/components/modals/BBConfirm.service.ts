import { Injectable } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { BBConfirmServiceComponent } from "./BBConfirmService.component";
import { Subject } from "rxjs/Subject";

@Injectable()
export class BBConfirmService {
  component: BBConfirmServiceComponent;

  constructor() {}

  // lazy set because it's a circular dependency
  set(component: BBConfirmServiceComponent) {
    this.component = component;
  }

  show(header, text): Subject<boolean> {
    return this.component.show(header, text);
  }

  hide(result: boolean) {
    return this.component.hide(result);
  }
}
