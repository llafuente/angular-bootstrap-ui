import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  HostBinding,
} from "@angular/core";

@Component({
  selector: "bb-section-collapsable",
  template: `
<section class="container">
  <h1
    class="pointer"
    (click)="toogle()">
    <div class="float-right">
      <i
        class="fa fa-angle-up disabled"
        *ngIf="!collapsed"></i>
      <i
        class="fa fa-angle-down"
        *ngIf="collapsed"></i>
    </div>
    <ng-content select="bb-section-header"></ng-content>
  </h1>

  <div [ngStyle]="{'display': collapsed ? 'none' : 'block'}">
    <ng-content select="bb-section-content"></ng-content>
  </div>
  <ng-content select="bb-section-footer"></ng-content>
</section>

`,
})
export class BBSectionCollapsableComponent implements OnInit {
  @Input() startCollapsed: boolean;
  @Output() onToogle: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostBinding('class.collapsed')
  public collapsed: boolean;

  constructor(public element: ElementRef) {}

  ngOnInit() {
    this.collapsed =
      this.startCollapsed === undefined ? true : !!this.startCollapsed;
  }

  toogle() {
    this.collapsed = !this.collapsed;
    this.onToogle.next(this.collapsed);
  }
}
