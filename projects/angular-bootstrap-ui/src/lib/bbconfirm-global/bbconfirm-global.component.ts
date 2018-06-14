import { Component, Input, ViewChild } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { BBConfirmService } from "../bbconfirm.service";
import { BBConfirmComponent } from "../bbconfirm/bbconfirm.component";
import { Subject } from "rxjs";

// NOTE: remove tabindex="-1" to remove ESC key dismissal

@Component({
  selector: 'bb-confirm-service',
  templateUrl: './bbconfirm-global.component.html',
  styleUrls: ['./bbconfirm-global.component.css']
})
export class BBConfirmGlobalComponent {

  header: string = null;
  text: string = null;

  @ViewChild("bbConfirm") bbConfirm: BBConfirmComponent;

  constructor(
    public confirmService: BBConfirmService
  ) {
    confirmService.set(this);
  }


  show(header, text) {
    this.header = header;
    this.text = text;

    return this.bbConfirm.show();
  }

  hide(result: boolean) {
    return this.bbConfirm.hide(result);
  }
}

