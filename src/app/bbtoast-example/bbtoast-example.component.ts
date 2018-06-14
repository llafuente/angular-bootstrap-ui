import { Component, OnInit } from '@angular/core';
import { ToastrService, ToastrConfig } from 'ngx-toastr';


@Component({
  selector: 'toast-example-component',
  templateUrl: './bbtoast-example.component.html',
  styleUrls: ['./bbtoast-example.component.scss']
})
export class BBToastExampleComponent implements OnInit {

  constructor(public toastrService: ToastrService) {}

  toastyDown() {
    this.toastrService.info(null, "header!", {
      closeButton: true,
      timeOut: 5000,
      positionClass: "toast-bottom-full-width",
    });
    this.toastrService.error(null, "header!", {
      closeButton: true,
      timeOut: 5000,
      positionClass: "toast-bottom-full-width",
    });
    this.toastrService.success(null, "header!", {
      closeButton: true,
      timeOut: 5000,
      positionClass: "toast-bottom-full-width",
    });
    //this.toastrService.default(options);
    this.toastrService.warning(null, "header!", {
      closeButton: true,
      timeOut: 5000,
      positionClass: "toast-bottom-full-width",
    });
  }

  ngOnInit() {
  }

}
