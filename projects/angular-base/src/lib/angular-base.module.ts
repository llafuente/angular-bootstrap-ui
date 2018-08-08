import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { RootComponent } from './root/root.component';
import { LogService } from './log.service';
import { SessionStorageService } from './session-storage.service';
import { Nl2brPipe } from './nl2br.pipe';

export { RootComponent } from './root/root.component';
export { LogService } from './log.service';
export { SessionStorageService } from './session-storage.service';
export { Nl2brPipe } from './nl2br.pipe';
export * from './Logger';
export * from './Base';

@NgModule({
  imports: [
    RouterModule
  ],
  providers: [
    LogService, SessionStorageService
  ],
  declarations: [RootComponent, Nl2brPipe],
  exports: [RootComponent, Nl2brPipe]
})
export class AngularCommonModule { }
