import { Component, OnInit } from '@angular/core';
/**
 * Create a page section
 *
 * Valid children
 * * bb-section-header
 * * bb-section-content
 * * bb-section-footer
 */
@Component({
  selector: 'bb-section',
  templateUrl: './bbsection.component.html',
  styleUrls: ['./bbsection.component.css']
})
export class BBSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
