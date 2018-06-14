import { Component, OnInit } from '@angular/core';
// NOTE: HACK NOTICE!
// to remove the border of this component we look for how many
// children it has, <3 should means empty (3 TextNodes with all spaces)
// before/after ng-content and one for the empty bb-section-footer

/**
 * Component to identify a footer, it does nothing special just a container
 */
@Component({
  selector: 'bb-section-footer',
  templateUrl: './bbsection-footer.component.html',
  styleUrls: ['./bbsection-footer.component.css']
})
export class BBSectionFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
