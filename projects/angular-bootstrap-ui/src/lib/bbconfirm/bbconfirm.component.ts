import { Component, Input, ViewChild } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Observable, Observer } from "rxjs";
import { Subject } from "rxjs";
import { BBModalComponent } from "../bbmodal/bbmodal.component";

// NOTE: remove tabindex="-1" to remove ESC key dismissal

@Component({
  selector: 'bb-confirm',
  templateUrl: './bbconfirm.component.html',
  styleUrls: ['./bbconfirm.component.css']
})
export class BBConfirmComponent {
  /**
   * Header text
   */
  @Input() header: string = null;
  /**
   * Bootstrap modal size: sm, md, lg
   */
  @Input() size = "md";
  /**
   * Cancel button text. Note: It will be translated
   */
  @Input() cancel = null;
  /**
   * Accept button text. Note: It will be translated
   */
  @Input() accept = null;

  @ViewChild("bbModal") bbModal: BBModalComponent;

  result: Subject<boolean> = new Subject();
  lastResult: Subject<boolean> = null;

  constructor() {}

  show(): Subject<boolean> {
    this.lastResult = new Subject();
    this.bbModal.modalManager.show();

    return this.lastResult;
  }

  hide(result: boolean) {
    this.result.next(result);
    this.lastResult.next(result);
    // this.lastResult.complete()
    this.bbModal.modalManager.hide();
  }
}
