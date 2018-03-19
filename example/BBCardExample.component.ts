import { Component } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "bb-card-example-component",
  templateUrl: "./BBCardExample.component.html",
})
export class BBCardExampleComponent {
  toogles: any = {};

  loading2 = false;
  error2 = true;

  sectionEvents: any = {
    onLoad: 0,
    onRefresh: 0,
  };

  loading3 = false;
  error3 = true;

  cardSubject: Subject<any> = null;
  toogleLoading() {
    if (this.cardSubject) {
      this.cardSubject = null;
    } else {
      this.cardSubject = new Subject<any>();
    }
  }

  cardSubject2: Subject<any> = null;
  toogleLoading2() {
    if (this.cardSubject2) {
      this.cardSubject2 = null;
    } else {
      this.cardSubject2 = new Subject<any>();
    }
  }
  showError2() {
    this.cardSubject2 = new Subject<any>();
    this.cardSubject2.error(new Error("This is an error!"));
  }
  reload2() {
    this.cardSubject2 = new Subject<any>();
  }


  toogle(src, isCollapsed) {
    this.toogles[src] = this.toogles[src] || { collapsed: 0, open: 0 };
    ++this.toogles[src][isCollapsed ? "collapsed" : "open"];
  }

  onLoadExample1() {
    ++this.sectionEvents.onLoad;
  }
}
