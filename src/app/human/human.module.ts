import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanRoutingModule } from './human-routing.module';
import { HumanComponent } from './human.component';
import { HumanListComponent } from './human-list/human-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HumanComponent, HumanListComponent],
  imports: [
    CommonModule,
    HumanRoutingModule,
    SharedModule
  ]
})
export class HumanModule { }
