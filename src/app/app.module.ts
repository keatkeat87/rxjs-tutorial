import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TakeComponent } from './take/take.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { ConcatAllComponent } from './concat-all/concat-all.component';
import { MergeAllComponent } from './merge-all/merge-all.component';
import { SwitchAllComponent } from './switch-all/switch-all.component';
import { SkipComponent } from './skip/skip.component';
import { StartWithComponent } from './start-with/start-with.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ZipComponent } from './zip/zip.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { ScanComponent } from './scan/scan.component';
import { BufferComponent } from './buffer/buffer.component';
import { BufferCountComponent } from './buffer-count/buffer-count.component';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { BufferToggleComponent } from './buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './buffer-when/buffer-when.component';
import { DelayComponent } from './delay/delay.component';
import { DelayWhenComponent } from './delay-when/delay-when.component';
import { DebounceComponent } from './debounce/debounce.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { ThrottleTimeComponent } from './throttle-time/throttle-time.component';

@NgModule({
  declarations: [
    AppComponent,
    TakeComponent,
    TakeUntilComponent,
    ConcatComponent,
    MergeComponent,
    ConcatAllComponent,
    MergeAllComponent,
    SwitchAllComponent,
    SkipComponent,
    StartWithComponent,
    CombineLatestComponent,
    ZipComponent,
    WithLatestFromComponent,
    ScanComponent,
    BufferComponent,
    BufferCountComponent,
    BufferTimeComponent,
    BufferToggleComponent,
    BufferWhenComponent,
    DelayComponent,
    DelayWhenComponent,
    DebounceComponent,
    DebounceTimeComponent,
    ThrottleTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
