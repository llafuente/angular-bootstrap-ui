import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'app-bbcontent-example',
  templateUrl: './bbcontent-example.component.html',
  styleUrls: ['./bbcontent-example.component.scss']
})
export class BBContentExampleComponent implements OnInit {

  subject: Subject<any> = null;
  subject2: Subject<any> = new Subject<any>();

  nest;

  constructor(
  ) {
    this.subject2.subscribe((x) => {
console.log("solve!", x);
    });

    setTimeout(() => {
      console.log("!?!?!?!?!?!?");
      this.subject2.next({});
      //this.subject2.complete();****

      this.nest = {
        nest: {
          verynest: "nest.nest.verynest failed?, see the console"
        }
      };
    }, 5000);
  }

  createRequest() {
    this.subject = new Subject<any>();
  }

  refresh() {
    this.subject.error(null);
  }

  throwError() {
    this.subject.error("this is an error!");
  }

  fetchContent() {
    this.subject.next("content arrive!");
  }

  ngOnInit() {
  }

}
