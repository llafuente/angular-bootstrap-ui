import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-stringlist-example-component',
  templateUrl: './bbstring-list-example.component.html',
  styleUrls: ['./bbstring-list-example.component.scss']
})
export class BBStringListExampleComponent implements OnInit {
  example1: string;
  example2: string;

  userlist: string[] = ["pepe", "manuel"];
  events: string[] = [];
  events2: string[] = [];

  categories = [];
  allCategories = ["xxx", "xyz", "xyy", "yyy", "zzzz"];

  constructor() { }

  ngOnInit() {
  }

  onAdd(events: string[], str: string) {
    events.push(`added ${str}`);
  }

  onRemove(events: string[],str: string) {
    events.push(`removed ${str}`);
  }

  reset() {
    this.userlist = ["pepe", "manuel"];
  }
}
