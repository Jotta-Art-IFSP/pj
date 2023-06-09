import {NgModule} from "@angular/core";
import {LoginRoutingModule} from "./login-routing.module";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {LoginComponent} from "./component/login.component";
import {SidebarModule} from "primeng/sidebar";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    ButtonModule,
    CardModule,
    FormsModule,
    ChipsModule,
    ReactiveFormsModule,
    SidebarModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule {

}
