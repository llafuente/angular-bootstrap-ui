import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'bb-section-content',
  templateUrl: './bbsection-content.component.html',
  styleUrls: ['./bbsection-content.component.css']
})
export class BBSectionContentComponent implements OnInit {
  /** Call it when an error ocurr */
  @Output() onReload: EventEmitter<any> = new EventEmitter<any>();
  @Input() subject: Subject<any> = null;
  @Input() loadingMessage: string;
  @Input() errorMessage: string = null;
  //@Input() hideFooterWhileLoading: boolean = true

  constructor() { }

  ngOnInit() {
  }

  doReload() {
    this.subject.error(null);
    this.subject = null;
    this.onReload.next(null);
  }
}
