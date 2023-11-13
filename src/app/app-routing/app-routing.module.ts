import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent} from "../input-header/input.component";
import { ResultComponent} from "../result-page/result.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path : '', redirectTo: '/input', pathMatch:'full'},
  {path : 'input', component: InputComponent},
  {path: 'result', component: ResultComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
