import {NgModule} from "@angular/core";
import {LoginComponent} from "./component/login.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginRoutingModule} from "./login-routing.module";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";

@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        LoginRoutingModule,
        ButtonModule,
        CardModule,
        FormsModule,
        ChipsModule,
        ReactiveFormsModule
    ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule {

}
