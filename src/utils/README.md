# Utils

Some useful functions

## aggregateSubjects

It's the same as Subject.concat but properly modifying the new Subject state,
calling complete when both subjects are completed even on error.

It's main usage is to concat all requests loading into a single subject.

### [source](aggregateSubjects.ts)

### Example


```
import { Component, Injector, OnInit } from "@angular/core";
import { Subject } from "rxjs";


@Component({
  template: "

<bb-card header="Card">
  <bb-section-content [subject]="contentStatus">
    Card content
  </bb-section-content>
</bb-card>

",
})
export class TestComponent implements OnInit {
  /** This var contains all request information for content loading/errors */
  contentStatus: Subject<any> = null;
  /**
   * Queue request
   */
  addLoading(obs: Subject<any>) {
    this.contentStatus = aggregateSubjects(this.contentStatus, obs);
  }

  ngOnInit() {
    const x = this.requestToApi.getSomething();
    this.addLoading(x);
    x.subscribe((response) => {
      // do something!
    });

    const x = this.requestToApi.getSomethingMore();
    this.addLoading(x);
    x.subscribe((response) => {
      // do something!
    });
  }
}
```
