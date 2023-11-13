import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputComponent} from "./input-header/input.component";
import {ResultComponent} from "./result-page/result.component";

const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full' },
  { path: 'input', component: InputComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],

  declarations: [  ]

})
export class AppRoutingModule { }
