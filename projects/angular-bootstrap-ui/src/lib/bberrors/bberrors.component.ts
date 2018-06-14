import { Component, Input, OnInit } from "@angular/core";
import { NgModel } from "@angular/forms";
import { BBErrorMessagesService } from "../bberror-messages.service";

/**
 * Display common errors errors
 * To configure error messages use: BBErrorMessages
 * Note angular set valid=false when control is disabled
 *
 */
@Component({
  selector: 'bb-errors',
  templateUrl: './bberrors.component.html',
  styleUrls: ['./bberrors.component.css']
})
export class BBErrorsComponent implements OnInit {

  /** @required */
  @Input() model: NgModel;
  /** override pattern message */
  @Input() pattern: string;
  /** override maxlength message */
  @Input() maxlength: string;
  /** override minlength message */
  @Input() minlength: string;
  /** override required message */
  @Input() required: string;
  /** override email message */
  @Input() email: string;
  /** override url message */
  @Input() url: string;
  /** override number message */
  @Input() number: string;

  constructor(public messages: BBErrorMessagesService) {}

  ngOnInit() {
  }

}
