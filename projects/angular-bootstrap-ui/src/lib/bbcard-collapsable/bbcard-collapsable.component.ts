import { Component, OnInit, HostBinding, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bb-card-collapsable',
  templateUrl: './bbcard-collapsable.component.html',
  styleUrls: ['./bbcard-collapsable.component.css']
})
export class BBCardCollapsableComponent implements OnInit {
  @Input() header: string;
  @Input() startCollapsed: boolean;
  @Input() uniqueid: string;
  // this is called on initialization
  // not only on user interaction
  // this allow to have a unique output :)
  // the boolean sent is if it's collapsed
  @Output() onToogle: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostBinding("class.collapsed") collapsed: boolean;

  constructor() { }

  ngOnInit() {
    this.collapsed =
      this.startCollapsed === undefined ? true : !!this.startCollapsed;

    // check localStorage for the last state
    if (this.uniqueid !== undefined) {
      // search in the localStorage
      const jsonstr = sessionStorage.getItem("bbva-card-collapsable");
      try {
        const json = JSON.parse(jsonstr) || {};
        if (json[this.uniqueid] !== undefined) {
          this.collapsed = json[this.uniqueid];
        }
      } catch (e) {}
    }

    this.onToogle.next(this.collapsed);
  }

  toogle() {
    this.collapsed = !this.collapsed;
    this.onToogle.next(this.collapsed);

    // check localStorage for the last state
    if (this.uniqueid !== undefined) {
      // search in the localStorage
      const jsonstr = sessionStorage.getItem("bbva-card-collapsable");
      try {
        const json = JSON.parse(jsonstr) || {};
        json[this.uniqueid] = this.collapsed;
        sessionStorage.setItem("bbva-card-collapsable", JSON.stringify(json));
      } catch (e) {}
    }
  }

}
