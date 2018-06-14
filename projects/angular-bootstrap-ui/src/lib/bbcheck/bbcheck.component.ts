import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { BBCheckBase } from "../bbcheck-base";

const BBCheckModelValueAccessor = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BBCheckComponent),
  multi: true,
};

@Component({
  selector: 'bb-check',
  templateUrl: './bbcheck.component.html',
  styleUrls: ['./bbcheck.component.css'],

  providers: [BBCheckModelValueAccessor],
})
export class BBCheckComponent extends BBCheckBase implements OnInit {
  /*** @required */
  @Input() name: string = null;

  @Input() label: string = null;

  ngOnInit(): void {
    if (!this.name) {
      throw new Error("bb-check: name is required");
    }
  }

}
