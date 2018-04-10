import { Component, EventEmitter, Input, OnInit, AfterViewChecked, ElementRef, OnDestroy } from "@angular/core";
import * as ftellipsis from "ftellipsis";

@Component({
  selector: "bb-ellipsis",
  template: `
<div [style.maxHeight]="height + 'px'">
  <div>
    <ng-content></ng-content>
  </div>
</div>
  `,
})
export class BBEllipsisComponent implements OnInit, AfterViewChecked, OnDestroy {
  @Input() height: number;
  ellipsis: any;

  interval: number = null;

  constructor(
    public element: ElementRef
  ) {
  }

  ngOnInit() {
    const el = this.element.nativeElement as HTMLElement;
    const div = el.children.item(0);
    const innerDiv = div.children.item(0) as HTMLElement;

    this.ellipsis = new ftellipsis.Ellipsis(div);

    this.interval = setInterval(() => {
      if (parseInt(innerDiv.style.height, 10) === 0) {
        innerDiv.style.height = null;
        this.ngAfterViewChecked();
      }
    }, 250);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  ngAfterViewChecked() {
    this.ellipsis.calc();
    this.ellipsis.set();
  }
}
