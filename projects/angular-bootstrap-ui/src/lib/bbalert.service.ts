import { Injectable } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { BBAlertGlobalComponent } from "./bbalert-global/bbalert-global.component";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BBAlertService {
  component: BBAlertGlobalComponent;

  constructor() {}

  // lazy set because it's a circular dependency
  set(component: BBAlertGlobalComponent) {
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
