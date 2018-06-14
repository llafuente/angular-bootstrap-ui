import { Injectable } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { BBConfirmGlobalComponent } from "./bbconfirm-global/bbconfirm-global.component";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BBConfirmService {
  component: BBConfirmGlobalComponent;

  constructor() {}

  // lazy set because it's a circular dependency
  set(component: BBConfirmGlobalComponent) {
    this.component = component;
  }

  show(header, text): Subject<boolean> {
    return this.component.show(header, text);
  }

  hide(result: boolean) {
    return this.component.hide(result);
  }
}
