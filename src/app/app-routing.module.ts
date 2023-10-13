import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {InputComponent} from "./input-header/input.component";
import {ResultComponent} from "./result-page/result.component";
import{AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full' },
  { path: 'input', component: InputComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  declarations: [
    HeaderComponent,
    ResultComponent,
    FooterComponent,
    InputComponent,
    AppComponent
  ],
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
