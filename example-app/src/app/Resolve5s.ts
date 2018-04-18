import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class Resolve5s implements Resolve<any> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | any {
    return Observable.create((observer) => {
      setTimeout(() => {
        observer.next(null);
        observer.complete();
      }, 5000);
    });
  }
}
