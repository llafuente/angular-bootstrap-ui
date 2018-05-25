import { Component, Input } from "@angular/core";
import { NgModel } from "@angular/forms";
import { BBErrorMessages } from "./BBErrorMessages.service";

// <pre>valid? {{model.valid | json}} dirty? {{model.dirty | json}} touched? {{model.touched | json}}</pre>

/**
 * Display common errors errors
 * To configure error messages use: BBErrorMessages
 * Note angular set valid=false when control is disabled
 *
 */
@Component({
  selector: "bb-errors",
  template: `
<div class="alert alert-danger" *ngIf="!model.valid && model?.errors && (model.dirty || model.touched)">
  <div *ngIf="model.errors?.required" class="form-control-feedback">{{required || messages.required}}</div>
  <div *ngIf="model.errors?.minlength" class="form-control-feedback">{{minlength || messages.minlength}}</div>
  <div *ngIf="model.errors?.maxlength" class="form-control-feedback">{{maxlength || messages.maxlength}}</div>
  <div *ngIf="model.errors?.email" class="form-control-feedback">{{email || messages.email}}</div>
  <div *ngIf="model.errors?.url" class="form-control-feedback">{{url || messages.url}}</div>
  <div *ngIf="model.errors?.pattern" class="form-control-feedback">{{pattern || messages.pattern}}</div>
  <div *ngIf="model.errors?.number" class="form-control-feedback">{{number || messages.number || messages.pattern}}</div>
</div>
  `,
})
export class BBErrorsComponent {
  /** required */
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

  constructor(public messages: BBErrorMessages) {}
}
