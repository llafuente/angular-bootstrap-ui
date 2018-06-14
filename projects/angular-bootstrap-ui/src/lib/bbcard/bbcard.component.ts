import { Component, OnInit, HostBinding, Input } from '@angular/core';

// NOTE all whitespace removal (no identation) it's on purpose
// to support css :empty

/**
 * Create a Card
 */
@Component({
  selector: 'bb-card',
  templateUrl: './bbcard.component.html',
  styleUrls: ['./bbcard.component.css'],
})
export class BBCardComponent implements OnInit {
  /** header text */
  @Input() header: string;

  constructor() { }

  ngOnInit() {
  }

}
