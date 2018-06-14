import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: 'bb-modal',
  templateUrl: './bbmodal.component.html',
  styleUrls: ['./bbmodal.component.css']
})
export class BBModalComponent implements OnInit {
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

  ngOnInit() {
  }

}
