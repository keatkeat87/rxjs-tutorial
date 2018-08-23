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
    SkipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
