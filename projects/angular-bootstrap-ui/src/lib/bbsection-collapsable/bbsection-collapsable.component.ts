import { Component, OnInit, Input, Output, EventEmitter, HostBinding, ElementRef } from '@angular/core';

@Component({
  selector: 'bb-section-collapsable',
  templateUrl: './bbsection-collapsable.component.html',
  styleUrls: ['./bbsection-collapsable.component.css']
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
