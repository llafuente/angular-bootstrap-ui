import { Component, Input, ViewChild, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { BBModalComponent } from "../../components/modals/BBModal.component";
import { BBAlertService } from "./BBAlert.service";
import { Subject } from "rxjs/Subject";
import { Subscription } from "rxjs/Rx";

// NOTE: remove tabindex="-1" to remove ESC key dismissal

@Component({
  selector: "bb-alert-service",
  template: `

<bb-modal
  #bbModal=""
  [header]="header"
  [size]="size"
  [closeButton]="false">
  <bb-section-content>
    <p *ngIf="!isHTML">{{text}}</p>
    <p *ngIf="isHTML" [innerHTML]="text"></p>
  </bb-section-content>
  <bb-section-footer>
    <div class="d-flex">
      <bb-button
        class="ml-auto"
        (click)="hide()">{{(accept || 'confirm.accept') | translate}}</bb-button>
    </div>
  </bb-section-footer>
</bb-modal>

  `,
})
export class BBAlertServiceComponent implements OnDestroy, OnInit {
  header: string = null;
  text: string = null;
  isHTML: boolean = false;

  @ViewChild("bbModal") bbModal: BBModalComponent;

  lastSubject: Subject<null>;
  subscription: Subscription;

  constructor(
    public alertService: BBAlertService
  ) {
    alertService.set(this);
  }

  ngOnInit() {
    this.subscription = this.bbModal.onHide.subscribe(() => {
      this.notifyCloseOnce();
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  notifyCloseOnce() {
    if (this.lastSubject) {
      this.lastSubject.next(null);
      this.lastSubject = null;
    }
  }


  show(header: string, text: string, isHTML: boolean): Subject<null> {
    console.log(header,text, isHTML);
    this.bbModal.show();

    this.header = header;
    this.text = text;
    this.isHTML = isHTML;

    this.lastSubject = new Subject<null>();

    return this.lastSubject;
  }

  hide(result: boolean): void {
    this.notifyCloseOnce();

    this.bbModal.hide();
  }
}

