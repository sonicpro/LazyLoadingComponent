import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathHelperComponent } from './math-helper.component';

const routes: Routes = [{ path: '', component: MathHelperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathHelperRoutingModule { }
