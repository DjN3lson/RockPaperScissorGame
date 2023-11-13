import { NgModule } from '@angular/core';
import  { BrowserModule} from "@angular/platform-browser";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {InputComponent} from "./input-header/input.component";
import {ResultComponent} from "./result-page/result.component";
import{AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {DataService} from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ResultComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
