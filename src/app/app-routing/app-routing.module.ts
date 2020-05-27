import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent } from '../comp-one/comp-one.component';
import { CompTwoComponent } from '../comp-two/comp-two.component';

const routes: Routes = [
  { path: "comp-one", component: CompOneComponent},
  { path: "comp-two", component: CompTwoComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
