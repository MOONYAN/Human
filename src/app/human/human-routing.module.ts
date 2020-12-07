import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HumanComponent } from './human.component';

const routes: Routes = [{ path: '', component: HumanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanRoutingModule { }
