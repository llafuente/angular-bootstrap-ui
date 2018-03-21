import { Component, EventEmitter, Input, OnInit, AfterViewChecked, ElementRef } from "@angular/core";
import * as ftellipsis from "ftellipsis";

@Component({
  selector: "bb-ellipsis",
  template: `
<div>
  <div [style.height]="height + 'px'">
    <ng-content></ng-content>
  </div>
</div>
  `,
})
export class BBEllipsisComponent implements OnInit, AfterViewChecked {
  @Input() height: number;
  ellipsis: any;

  constructor(
    public element: ElementRef
  ) {
  }

  ngOnInit() {
    const el = this.element.nativeElement as HTMLElement;
    const div = el.children.item(0);

    this.ellipsis = new ftellipsis.Ellipsis(div);
  }

  ngAfterViewChecked() {
    this.ellipsis.calc();
    this.ellipsis.set();
  }
}
