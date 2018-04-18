import { Component, ViewChild } from "@angular/core";
import { BBConfirmComponent, BBConfirmService, BBAlertService } from "../angular-bootstrap-ui";

@Component({
  selector: "bb-card-example-component",
  templateUrl: "./BBModalExample.component.html",
})
export class BBModalExampleComponent {
  example1: string;
  example2: string;
  example3: string;
  example4: string;
  example5: string;

  @ViewChild("bbConfirm") bbConfirm: BBConfirmComponent;
  @ViewChild("bbConfirm2") bbConfirm2: BBConfirmComponent;

  bbConfirmResultA: boolean = null;
  bbConfirmResultB: boolean = null;

  bbConfirmResult2A: boolean = null;
  bbConfirmResult2B: boolean = null;

  serviceResult: boolean;
  title: string = "title";
  text: string = "content <strong>text</strong>";

  constructor(
    public bbConfirmService: BBConfirmService,
    public bbAlertService: BBAlertService,
  ) {

  }

  ngOnInit() {
    this.bbConfirm.result.subscribe((x) => {
      this.bbConfirmResultA = x;
    });

    this.bbConfirm2.result.subscribe((x) => {
      this.bbConfirmResult2A = x;
    });
  }

  showConfirm() {
    this.bbConfirm.show().subscribe((x) => {
      this.bbConfirmResultB = x;
    });
  }

  showConfirm2() {
    this.bbConfirm2.show().subscribe((x) => {
      this.bbConfirmResult2B = x;
    });
  }

  reset() {
    this.bbConfirmResultA = null;
    this.bbConfirmResultB = null;
    this.bbConfirmResult2A = null;
    this.bbConfirmResult2B = null;
  }

  alertServiceShow() {
    this.bbAlertService.show(this.title, this.text, false).subscribe((response) => {
      this.serviceResult = response;
    })
  }

  alertServiceShowHTML() {
    this.bbAlertService.show(this.title, this.text, true).subscribe((response) => {
      this.serviceResult = response;
    })
  }

  confirmServiceShow() {
    this.bbConfirmService.show(this.title, this.text).subscribe((response) => {
      this.serviceResult = response;
    })
  }
}
