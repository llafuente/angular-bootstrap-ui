import { Component, EventEmitter, Input, OnInit, AfterViewChecked, ElementRef, OnDestroy } from "@angular/core";
import * as ftellipsis from "ftellipsis";
/**
 * Create a container for text. If the text overflow the container height it
 * will display the ellipsis
 */

@Component({
  selector: 'bb-ellipsis',
  templateUrl: './bbellipsis.component.html',
  styleUrls: ['./bbellipsis.component.css']
})
export class BBEllipsisComponent implements OnInit, AfterViewChecked, OnDestroy {
  /** container maxHeight */
  @Input() height: number;

  /** ftellipsis.Ellipsis type */
  ellipsis: any;
  /** interval variable */
  interval: any = null; // TODO Timer not found ? number is invalid ?

  constructor(
    public element: ElementRef
  ) {
  }
  /**
   * Create the Ellipsis in the container and update it every 250ms
   */
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
  /**
   * Remove interval
   */
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  /**
   * Update Ellipsis after checks
   */
  ngAfterViewChecked() {
    this.ellipsis.calc();
    this.ellipsis.set();
  }
}
