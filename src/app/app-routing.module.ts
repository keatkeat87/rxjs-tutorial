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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
