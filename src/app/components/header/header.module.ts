import {NgModule} from "@angular/core";
import {HeaderComponent} from "./component/header.component";
import {SidebarModule} from "primeng/sidebar";
import {RouterLink} from "@angular/router";
import {SharedModule} from "primeng/api";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    SidebarModule,
    RouterLink,
    SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {

}
