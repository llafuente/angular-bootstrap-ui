import { Component, Input, ViewChild, EventEmitter } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "bb-modal",
  templateUrl: "./BBModal.component.html",
})
export class BBModalComponent {
  @Input() header: string = null;
  @Input() closeButton = true;
  @Input() size = "md";

  @ViewChild("modal") modalManager: ModalDirective;

  get onShow(): EventEmitter<ModalDirective> {
    return this.modalManager.onShow;
  }

  get onHide(): EventEmitter<ModalDirective> {
    return this.modalManager.onHide;
  }

  show(): EventEmitter<ModalDirective> {
    this.modalManager.show();
    return this.modalManager.onShow;
  }

  hide(): EventEmitter<ModalDirective> {
    this.modalManager.hide();
    return this.modalManager.onHide;
  }
}
