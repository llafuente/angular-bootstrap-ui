import { Subject } from "rxjs";


/**
 * It's the same as Subject.concat but properly modifying the new Subject state
 * for example: isStopped
 */
export function aggregateSubjects(a: Subject<any>, b: Subject<any>): Subject<any> {
  if (a === null || a.isStopped) {
    return b;
  }

  if (b === null || b.isStopped) {
    return a;
  }

  const ret = new Subject<any>();
  let okCount = 0;

  a.subscribe((success) => {
    ret.next(success);
  }, (err) => {
    ret.error(err);
  }, () => {
    ++okCount;
    if (okCount == 2) {
      ret.complete();
    }
  });

  b.subscribe((success) => {
    ret.next(success);
  }, (err) => {
    ret.error(err);
  }, () => {
    ++okCount;
    if (okCount == 2) {
      ret.complete();
    }
  });

  return ret;

}
