import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'app-bbcontent-example',
  templateUrl: './bbcontent-example.component.html',
  styleUrls: ['./bbcontent-example.component.scss']
})
export class BBContentExampleComponent implements OnInit {

  subject: Subject<any> = null;

  constructor(
  ) {
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
