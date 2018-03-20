import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs/Subject";

// <pre>
// isLoading? {{subject | isLoading | json}}
// isError? {{subject | isError | json}}
// </pre>
@Component({
  selector: "bb-section-content",
  template: `
<div [ngSwitch]="subject | isLoading">
  <div *ngSwitchCase="true">

    <bb-progress></bb-progress>

    <alert type="info" *ngIf="loadingMessage" class="text-center mt-2">
      {{loadingMessage}}
    </alert>

  </div>

  <div *ngSwitchCase="false">
    <div [ngSwitch]="subject | isError">

      <div *ngSwitchCase="false">
        <ng-content></ng-content>
      </div>

      <div *ngSwitchCase="true" class="container text-center">
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
    </div>
  </div>
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
    this.subject.error(null);
    this.subject = null;
    this.onReload.next(null);
  }
}
