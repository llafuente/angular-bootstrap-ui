import { Component, Input, ViewChild } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { BBConfirmService } from "./BBConfirm.service";
import { BBConfirmComponent } from "../../components/modals/BBConfirm.component";
import { Subject } from "rxjs/Subject";

// NOTE: remove tabindex="-1" to remove ESC key dismissal

@Component({
  selector: "bb-confirm-service",
  template: `
<bb-confirm [header]="header" #bbConfirm>
{{text}}
</bb-confirm>
  `,
})
export class BBConfirmServiceComponent {
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

