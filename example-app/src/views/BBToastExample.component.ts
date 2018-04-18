import { Component } from "@angular/core";
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";

@Component({
  selector: "toast-example-component",
  templateUrl: "./BBToastExample.component.html",
})
export class BBToastExampleComponent {
  constructor(public toastyService: ToastyService) {}

  toastyDown() {
    const toastOptions: ToastOptions = {
      title: "test!!!!",
      showClose: true,
      timeout: 5000,
      theme: "bootstrap",
      onAdd: (toast: ToastData) => {
      },
      onRemove(toast: ToastData) {
      },
    };

    // Add see all possible types in one shot
    this.openAll(toastOptions);
  }

  openAll(options: ToastOptions) {
    this.toastyService.info(options);
    this.toastyService.error(options);
    this.toastyService.success(options);
    this.toastyService.default(options);
    this.toastyService.warning(options);
  }
}
