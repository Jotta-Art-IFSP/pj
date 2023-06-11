import {NgModule} from "@angular/core";
import {HeaderComponent} from "./component/header.component";
import {SidebarModule} from "primeng/sidebar";
import {RouterLink} from "@angular/router";
import {SharedModule} from "primeng/api";
import {NgClass} from "@angular/common";

@NgModule({
  declarations: [
    HeaderComponent
  ],
    imports: [
        SidebarModule,
        RouterLink,
        SharedModule,
        NgClass
    ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {

}
