import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "bb-section-content",
  template: `
<div *ngIf="subject | isLoading">

  <bb-progress></bb-progress>

  <alert type="info" *ngIf="loadingMessage" class="text-center mt-2">
    {{loadingMessage}}
  </alert>

</div>

<div *ngIf="!(subject | isError) && !(subject | isLoading)">
  <ng-content></ng-content>
</div>

<div *ngIf="(subject | isError) && !(subject | isLoading)" class="container text-center">
  <alert type="danger" class="mt-2">
    {{errorMessage || 'Error al obtener la informacion solicitada.'}}
  </alert>

  <button
    class="btn"
    type="button"
    (click)="doReload()">
    <i class="fa fa-refresh"></i> Volver a intentarlo
  </button>
</div>
  `,
})
export class BBSectionContentComponent {
  @Output() onReload: EventEmitter<any> = new EventEmitter<any>();
  @Input() subject: Subject<any> = null;
  @Input() loadingMessage: string;
  @Input() errorMessage: string = null;
  //@Input() hideFooterWhileLoading: boolean = true

  doReload() {
    this.subject = null;
    this.onReload.next(null);
  }
}
