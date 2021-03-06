import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { DistinctComponent } from './distinct/distinct.component';
import { RetryComponent } from './retry/retry.component';
import { RetryWhenComponent } from './retry-when/retry-when.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'take-until' },
  { path: 'take', component: TakeComponent },
  { path: 'take-until', component: TakeUntilComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'concat-all', component: ConcatAllComponent },
  { path: 'merge-all', component: MergeAllComponent },
  { path: 'switch-all', component: SwitchAllComponent },
  { path: 'skip', component: SkipComponent },
  { path: 'start-with', component: StartWithComponent },
  { path: 'combine-latest', component: CombineLatestComponent },
  { path: 'zip', component: ZipComponent },
  { path: 'with-latest-from', component: WithLatestFromComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'buffer', component: BufferComponent },
  { path: 'buffer-count', component: BufferCountComponent },
  { path: 'buffer-time', component: BufferTimeComponent },
  { path: 'buffer-toggle', component: BufferToggleComponent },
  { path: 'buffer-when', component: BufferWhenComponent },
  { path: 'delay', component: DelayComponent },
  { path: 'delay-when', component: DelayWhenComponent },
  { path: 'debounce-time', component: DebounceTimeComponent },
  { path: 'debounce', component: DebounceComponent },
  { path: 'throttle-time', component: ThrottleTimeComponent },
  { path: 'distinct-until-changed', component: DistinctUntilChangedComponent },
  { path: 'distinct', component: DistinctComponent },
  { path: 'retry', component: RetryComponent },
  { path: 'retry-when', component: RetryWhenComponent },
  { path: 'subject', component: SubjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
