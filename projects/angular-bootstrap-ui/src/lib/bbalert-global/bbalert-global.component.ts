import { Component, Input, ViewChild, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { BBModalComponent } from "../bbmodal/bbmodal.component";
import { BBAlertService } from "../bbalert.service";
import { Subject, Subscription } from "rxjs";

@Component({
  selector: 'bb-alert-service',
  templateUrl: './bbalert-global.component.html',
  styleUrls: ['./bbalert-global.component.css']
})
export class BBAlertGlobalComponent implements OnDestroy, OnInit {

  header: string = null;
  text: string = null;
  isHTML: boolean = false;
  size = "md";

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


  show(header: string, text: string, isHTML: boolean, size: string = "md"): Subject<null> {
    //console.log(header,text, isHTML);
    this.bbModal.show();

    this.header = header;
    this.text = text;
    this.isHTML = isHTML;
    this.size = size;

    this.lastSubject = new Subject<null>();

    return this.lastSubject;
  }

  hide(): void {
    this.notifyCloseOnce();

    this.bbModal.hide();
  }
}

