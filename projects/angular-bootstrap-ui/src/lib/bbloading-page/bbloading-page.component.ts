import { Component, OnInit, HostBinding, Input } from '@angular/core';

/**
 * Create a full screen loading and set a spinner in the middle while loading=true
 * loading=false hides everything
 */
@Component({
  selector: 'bb-loading-page',
  templateUrl: './bbloading-page.component.html',
  styleUrls: ['./bbloading-page.component.css']
})
export class BBLoadingPageComponent implements OnInit {
  /** display loading? */
  @HostBinding("class.loading")
  @Input()
  loading = false;

  constructor() { }

  ngOnInit() {
  }

}
