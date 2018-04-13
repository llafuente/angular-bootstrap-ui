import { Injectable } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { BBAlertServiceComponent } from "./BBAlertService.component";
import { Subject } from "rxjs/Subject";

@Injectable()
export class BBAlertService {
  component: BBAlertServiceComponent;

  constructor() {}

  // lazy set because it's a circular dependency
  set(component: BBAlertServiceComponent) {
    this.component = component;
  }

  show(header: string, text: string, isHTML: boolean): Subject<boolean> {
    console.log(header,text,isHTML);
    return this.component.show(header, text, isHTML);
  }

  hide(): void {
    this.component.hide();
  }
}
