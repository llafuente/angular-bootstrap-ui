import { Component } from "@angular/core";

@Component({
  selector: "bb-stringlist-example-component",
  templateUrl: "./BBStringListExample.component.html",
})
export class BBStringListExampleComponent {
  example1: string;
  example2: string;

  userlist: string[] = ["pepe", "manuel"];
  events: string[] = [];
  events2: string[] = [];

  categories = [];
  allCategories = ["xxx", "xyz", "xyy", "yyy", "zzzz"];

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
