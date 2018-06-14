import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'bb-static',
  templateUrl: './bbstatic.component.html',
  styleUrls: ['./bbstatic.component.css'],

  host: {
    class: "form-control-container focused",
  },
})
export class BBStaticComponent implements OnInit {
  // optional
  @Input() label: string;

  @Input() size: string;
  @Input() inline: string;
  @Input() help: string;

  @HostBinding("class.notempty") @Input() align = false;

  ngOnInit(): void {
    if (this.size && ["sm", "lg"].indexOf(this.size) === -1) {
      throw new Error("bb-input: size must be sm or lg");
    }
  }

}
