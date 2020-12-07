import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanRoutingModule } from './human-routing.module';
import { HumanComponent } from './human.component';
import { HumanListComponent } from './human-list/human-list.component';
import { SharedModule } from '../shared/shared.module';
import { HumanFormComponent } from './human-form/human-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HumanComponent, HumanListComponent, HumanFormComponent],
  imports: [
    CommonModule,
    HumanRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class HumanModule { }
