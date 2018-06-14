import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { BBChildDirective } from '../bbchild.directive';

@Component({
  selector: 'bb-input-container',
  templateUrl: './bbinput-container.component.html',
  styleUrls: ['./bbinput-container.component.css'],
  host: {
    class: "form-control-container",
  },
})
export class BBInputContainerComponent implements OnInit {
  // optional
  @Input() label: string;

  @Input() inline: string;
  @Input() help: string;

  /**
   * Enable classes for group-addon on continer so you can
   * add a custom addon
   */
  @Input() addon: true;
  /**
   * Text before/left your control
   */
  @Input() preAddon: string;
  /**
   * Text after/right your control
   */
  @Input() postAddon: string;
  @Input() size: string;

  // validation
  public disabled: boolean;
  public required: boolean;

  @HostBinding("class.focused") focused = false;

  @HostBinding("class.notempty") notEmpty = false;

  child: BBChildDirective;

  ngOnInit(): void {
    if (this.size && ["sm", "lg"].indexOf(this.size) === -1) {
      throw new Error("bb-input-container: size must be sm or lg");
    }

    if (!this.child) {
      throw new Error("bb-input-container requires a bb-child children");
    }

    // preAddong occupy the same space as label, so if found move label up
    this.notEmpty = !!this.preAddon;
  }

  setNotEmpty(b: boolean) {
    this.notEmpty = !!this.preAddon || b;
  }
}
