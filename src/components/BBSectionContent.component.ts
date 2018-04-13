import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs/Subject";

/**
 * Component to identify a content unlike footer/header it does many things :)
 * * display a loading while subject isLoading
 * * display content if subject isSuccess
 * * display an error if subject isError, with a retry button
 */
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
          {{errorMessage || ("content.error" | translate)}}
        </alert>

        <button
          class="btn"
          type="button"
          (click)="doReload()">
          <i class="fa fa-refresh"></i> {{"content.retry" | translate}}
        </button>
      </div>
    </div>
  </div>
</div>
  `,
})
export class BBSectionContentComponent {
  /** Call it when an error ocurr */
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
