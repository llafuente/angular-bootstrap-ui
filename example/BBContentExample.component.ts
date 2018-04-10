import { Component, EventEmitter, Input } from "@angular/core";
import * as ftellipsis from "ftellipsis";
import { Subject } from "rxjs/Subject";
declare const jQuery;

@Component({
  template: `
<h1>Ellipsis</h1>

<h3>1 lines (no ellipsis)</h3>
<bb-ellipsis height="48">jsahd kjajsd hkashd akjhd aksjd</bb-ellipsis>

<h3>2 lines</h3>
<bb-ellipsis height="48">jsahd kjajsd hkashd akjhd aksjd haksj dhaksjd haskjd haskdj haskjdaksdjhas kjhdaskjhdaks duhasiduh akduash kdjash dkashkjas hkauhsd kausdh kasuhdoas dakjshd aksud haksd haskdj haskd uhaskduhsaikduhaksdu hakdsuh aksudha kkaushd aowdijh askjdahiuhdwkjahsd aijwnakcja haiushd ahduask asdka uhdkaushd asud halksidjh askudh akshd aushdika hfuakshfkasdh ausdhsadjhasdihasodi ashudash daishdkasdj nhakauhsd aksiudha sdjsahd kjajsd hkashd akjhd aksjd haksj dhaksjd haskjd haskdj haskjdaksdjhas kjhdaskjhdaks duhasiduh akduash kdjash dkashkjas hkauhsd kausdh kasuhdoas dakjshd aksud haksd haskdj haskd uhaskduhsaikduhaksdu hakdsuh aksudha kkaushd aowdijh askjdahiuhdwkjahsd aijwnakcja haiushd ahduask asdka uhdkaushd asud halksidjh askudh akshd aushdika hfuakshfkasdh ausdhsadjhasdihasodi ashudash daishdkasdj nhakauhsd aksiudha sdjsahd kjajsd hkashd akjhd aksjd haksj dhaksjd haskjd haskdj haskjdaksdjhas kjhdaskjhdaks duhasiduh akduash kdjash dkashkjas hkauhsd kausdh kasuhdoas dakjshd aksud haksd haskdj haskd uhaskduhsaikduhaksdu hakdsuh aksudha kkaushd aowdijh askjdahiuhdwkjahsd aijwnakcja haiushd ahduask asdka uhdkaushd asud halksidjh askudh akshd aushdika hfuakshfkasdh ausdhsadjhasdihasodi ashudash daishdkasdj nhakauhsd aksiudha sd</bb-ellipsis>

<h3>4 lines</h3>
<bb-ellipsis height="96">jsahd kjajsd hkashd akjhd aksjd haksj dhaksjd haskjd haskdj haskjdaksdjhas kjhdaskjhdaks duhasiduh akduash kdjash dkashkjas hkauhsd kausdh kasuhdoas dakjshd aksud haksd haskdj haskd uhaskduhsaikduhaksdu hakdsuh aksudha kkaushd aowdijh askjdahiuhdwkjahsd aijwnakcja haiushd ahduask asdka uhdkaushd asud halksidjh askudh akshd aushdika hfuakshfkasdh ausdhsadjhasdihasodi ashudash daishdkasdj nhakauhsd aksiudha sdjsahd kjajsd hkashd akjhd aksjd haksj dhaksjd haskjd haskdj haskjdaksdjhas kjhdaskjhdaks duhasiduh akduash kdjash dkashkjas hkauhsd kausdh kasuhdoas dakjshd aksud haksd haskdj haskd uhaskduhsaikduhaksdu hakdsuh aksudha kkaushd aowdijh askjdahiuhdwkjahsd aijwnakcja haiushd ahduask asdka uhdkaushd asud halksidjh askudh akshd aushdika hfuakshfkasdh ausdhsadjhasdihasodi ashudash daishdkasdj nhakauhsd aksiudha sdjsahd kjajsd hkashd akjhd aksjd haksj dhaksjd haskjd haskdj haskjdaksdjhas kjhdaskjhdaks duhasiduh akduash kdjash dkashkjas hkauhsd kausdh kasuhdoas dakjshd aksud haksd haskdj haskd uhaskduhsaikduhaksdu hakdsuh aksudha kkaushd aowdijh askjdahiuhdwkjahsd aijwnakcja haiushd ahduask asdka uhdkaushd asud halksidjh askudh akshd aushdika hfuakshfkasdh ausdhsadjhasdihasodi ashudash daishdkasdj nhakauhsd aksiudha sd</bb-ellipsis>

<h1>Hidden elippsis</h1>
<bb-card-collapsable [startCollapsed]="true">
  <bb-section-content>
    <hr />
    <bb-ellipsis height="96">jsahd kjajsd hkashd akjhd</bb-ellipsis>

    <hr />
    <bb-ellipsis height="96">jsahd kjajsd hkashd akjhd aksjd haksj dhaksjd haskjd haskdj haskjdaksdjhas kjhdaskjhdaks duhasiduh akduash kdjash dkashkjas hkauhsd kausdh kasuhdoas dakjshd aksud haksd haskdj haskd uhaskduhsaikduhaksdu hakdsuh aksudha kkaushd aowdijh askjdahiuhdwkjahsd aijwnakcja haiushd ahduask asdka uhdkaushd asud halksidjh askudh akshd aushdika hfuakshfkasdh ausdhsadjhasdihasodi ashudash daishdkasdj nhakauhsd aksiudha sdjsahd kjajsd hkashd akjhd aksjd haksj dhaksjd haskjd haskdj haskjdaksdjhas kjhdaskjhdaks duhasiduh akduash kdjash dkashkjas hkauhsd kausdh kasuhdoas dakjshd aksud haksd haskdj haskd uhaskduhsaikduhaksdu hakdsuh aksudha kkaushd aowdijh askjdahiuhdwkjahsd aijwnakcja haiushd ahduask asdka uhdkaushd asud halksidjh askudh akshd aushdika hfuakshfkasdh ausdhsadjhasdihasodi ashudash daishdkasdj nhakauhsd aksiudha sdjsahd kjajsd hkashd akjhd aksjd haksj dhaksjd haskjd haskdj haskjdaksdjhas kjhdaskjhdaks duhasiduh akduash kdjash dkashkjas hkauhsd kausdh kasuhdoas dakjshd aksud haksd haskdj haskd uhaskduhsaikduhaksdu hakdsuh aksudha kkaushd aowdijh askjdahiuhdwkjahsd aijwnakcja haiushd ahduask asdka uhdkaushd asud halksidjh askudh akshd aushdika hfuakshfkasdh ausdhsadjhasdihasodi ashudash daishdkasdj nhakauhsd aksiudha sd</bb-ellipsis>
  </bb-section-content>
</bb-card-collapsable>

<hr />

<h1>Section</h1>

<button class="btn" (click)="createRequest()">Create request (starts loading)</button>
<button class="btn" (click)="fetchContent()">Request end sucess (stop loading, display content)</button>
<button class="btn" (click)="throwError()">Request end error (stop loading, show error)</button>

<bb-section>
  <bb-section-header>header text</bb-section-header>
  <bb-section-content
    (onReload)="createRequest()"
    [subject]="subject">section content</bb-section-content>
  <bb-section-footer>section footer</bb-section-footer>
</bb-section>

`,
})
export class BBContentExampleComponent {

  subject: Subject<any> = null;

  constructor(
  ) {
  }

  createRequest() {
    this.subject = new Subject<any>();
  }

  refresh() {
    this.subject.error(null);
  }

  throwError() {
    this.subject.error("this is an error!");
  }

  fetchContent() {
    this.subject.next("content arrive!");
  }
}
