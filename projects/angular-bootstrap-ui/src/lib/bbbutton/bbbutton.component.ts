import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'bb-button',
  templateUrl: './bbbutton.component.html',
  styleUrls: ['./bbbutton.component.css']
})
export class BBButtonComponent implements OnInit {
  @HostBinding("class.disabled")
  @Input()
  disabled: boolean;
  @Input() btn = "primary";
  /**
   * Align button to be vertical aligned with an input
   */
  @Input() inputAligned: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
